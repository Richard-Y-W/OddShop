import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { splashMotion } from './splashMotion.js';

const splashCss = readFileSync(new URL('./components/SplashScreen.css', import.meta.url), 'utf8');
const splashComponent = readFileSync(new URL('./components/SplashScreen.jsx', import.meta.url), 'utf8');
const orderCss = readFileSync(new URL('./components/OrderYoinked.css', import.meta.url), 'utf8');
const orderComponent = readFileSync(new URL('./components/OrderYoinked.jsx', import.meta.url), 'utf8');

test('splash motion uses the approved hook-cane side-yank direction', () => {
  assert.equal(splashMotion.wordmark, 'Yoink!');
  assert.equal(splashMotion.brandColor, '#6A5ACD');
  assert.equal(splashMotion.exitStyle, 'hook-cane-side-yank-white-flash-reveal');
  assert.equal(splashMotion.grabber, 'vaudeville-hook-cane');
  assert.equal(splashMotion.caneRender, 'inline-svg-two-stroke');
  assert.equal(splashMotion.usesBlur, false);
  assert.equal(splashMotion.autoPlaysOnLoad, true);
});

test('splash is snappy: under two seconds total', () => {
  assert.ok(splashMotion.durationMs <= 2000, `durationMs ${splashMotion.durationMs} > 2000`);
});

test('the cane is a crisp inline SVG, not the retired glove PNGs', () => {
  assert.match(splashComponent, /export function Cane/);
  assert.match(splashComponent, /yoink-splash__cane/);
  assert.match(splashComponent, /A46 46 0 0 0/, 'hook arc present');
  assert.doesNotMatch(splashComponent, /yoink-glove-hand/);
  assert.doesNotMatch(splashCss, /hand-frame|caught-logo|hand-slot|hand-cover/);
});

test('cane hooks the wordmark then yanks the whole rig off the right edge', () => {
  assert.match(splashCss, /@keyframes yoinkSplashCane/);
  assert.match(splashCss, /@keyframes yoinkSplashYank/);
  // the rig (logo + cane together) leaves stage right, fully opaque until gone
  assert.match(splashCss, /59%\s*\{\s*opacity:\s*1;\s*transform:[^}]*translateX\(190px\) skewX\(-12deg\) scaleX\(1\.28\)/s);
  assert.match(splashCss, /64%, 100%\s*\{\s*opacity:\s*0;\s*transform:[^}]*translateX\(680px\)/s);
  // hook contact squishes the logo sideways
  assert.match(splashCss, /44%\s*\{\s*opacity:\s*1;\s*transform:\s*translateX\(-9px\) scale\(\.82, 1\.08\)/s);
});

test('dopamine hits: screen shake, sparks, and speed lines on the yank', () => {
  assert.match(splashCss, /@keyframes yoinkSplashShake/);
  assert.match(splashCss, /@keyframes yoinkSplashSpark/);
  assert.match(splashCss, /@keyframes yoinkSplashLine/);
  assert.match(splashComponent, /yoink-splash__spark--four/);
  assert.match(splashComponent, /yoink-splash__line--three/);
});

test('splash fades through a white flash before revealing the home screen', () => {
  assert.match(splashCss, /\.yoink-splash__white-flash\s*\{[^}]*background:\s*#fff/s);
  assert.match(splashCss, /@keyframes yoinkSplashWhiteFlash/);
  assert.match(splashCss, /100%\s*\{\s*opacity:\s*0;\s*visibility:\s*hidden;\s*\}/s);
});

test('order grab reuses the cane with the same snappy side-yank', () => {
  assert.match(orderComponent, /import \{ Cane \} from '\.\/SplashScreen\.jsx'/);
  assert.match(orderComponent, /yoink-order-grab__cane/);
  assert.doesNotMatch(orderComponent, /yoink-glove-hand/);
  assert.match(orderCss, /@keyframes yoinkOrderYank/);
  assert.match(orderCss, /@keyframes yoinkOrderSpark/);
  assert.match(orderComponent, /ORDER_YOINKED_DURATION_MS = 1600/);
});
