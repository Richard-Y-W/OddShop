import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const appSource = readFileSync(new URL('./App.jsx', import.meta.url), 'utf8');
const splashCss = readFileSync(new URL('./components/SplashScreen.css', import.meta.url), 'utf8');

test('splash overlay is scoped to the phone frame', () => {
  const phoneStart = appSource.indexOf('<IOSDevice>');
  const splashStart = appSource.indexOf('<SplashScreen />');
  const phoneEnd = appSource.indexOf('</IOSDevice>');

  assert.ok(phoneStart >= 0, 'App should render the iOS phone frame');
  assert.ok(splashStart > phoneStart, 'SplashScreen should be mounted inside IOSDevice');
  assert.ok(splashStart < phoneEnd, 'SplashScreen should be inside the phone frame closing tag');
  assert.match(splashCss, /\.yoink-splash\s*\{[^}]*position:\s*absolute;/s);
  assert.doesNotMatch(splashCss, /\.yoink-splash\s*\{[^}]*position:\s*fixed;/s);
});
