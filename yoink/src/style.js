// Parse a CSS declaration string ("a:b;c:d") into a React style object.
// Lets us carry the design's inline styles over verbatim instead of
// hand-converting every property to camelCase.
export function s(str) {
  const out = {};
  for (const part of str.split(';')) {
    const i = part.indexOf(':');
    if (i === -1) continue;
    let key = part.slice(0, i).trim();
    const val = part.slice(i + 1).trim();
    if (!key) continue;
    // leave CSS custom properties (--foo) untouched; camelCase the rest
    if (!key.startsWith('--')) key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = val;
  }
  return out;
}
