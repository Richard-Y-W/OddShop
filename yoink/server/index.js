// Standalone production server: serves the built app from dist/ and the
// JSON API from the same origin. `npm run build && npm run serve`.

import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createStore } from './store.js';
import { createApiMiddleware } from './api.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const store = createStore({ file: join(root, 'server', 'db.json') });
const api = createApiMiddleware(store);

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

const server = createServer((req, res) => {
  if (req.url.startsWith('/api/')) return api(req, res);

  const url = new URL(req.url, 'http://yoink.local');
  let file = normalize(join(dist, url.pathname));
  if (!file.startsWith(dist)) file = join(dist, 'index.html');
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(dist, 'index.html');
  res.setHeader('Content-Type', MIME[extname(file)] ?? 'application/octet-stream');
  createReadStream(file).pipe(res);
});

const port = Number(process.env.PORT) || 5175;
server.listen(port, () => {
  console.log(`Yoink running at http://localhost:${port}`);
});
