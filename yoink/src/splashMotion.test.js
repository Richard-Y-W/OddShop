import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { splashMotion } from './splashMotion.js';

const splashCss = readFileSync(new URL('./components/SplashScreen.css', import.meta.url), 'utf8');
const splashComponent = readFileSync(new URL('./components/SplashScreen.jsx', import.meta.url), 'utf8');

test('splash motion uses the approved bottom-anchored pinch direction', () => {
  assert.equal(splashMotion.wordmark, 'Yoink!');
  assert.equal(splashMotion.brandColor, '#6A5ACD');
  assert.equal(splashMotion.durationMs, 2160);
  assert.equal(splashMotion.exitStyle, 'bottom-anchored-pinch-white-flash-reveal');
  assert.equal(splashMotion.handStyle, 'generated-two-pose-bottom-pinch-glove');
  assert.equal(splashMotion.frameBlend, 'open-to-grab-caught-logo');
  assert.equal(splashMotion.usesBlur, false);
  assert.equal(splashMotion.autoPlaysOnLoad, true);
});

const handPoses = ['open', 'grab'];

test('splash hand renders only the two approved generated glove pose assets', () => {
  for (const pose of handPoses) {
    assert.equal(
      existsSync(new URL(`./assets/yoink-glove-hand-${pose}.png`, import.meta.url)),
      true,
      `missing generated hand pose ${pose}`,
    );
    assert.match(splashComponent, new RegExp(`yoink-glove-hand-${pose}\\.png`));
    assert.match(splashComponent, new RegExp(`yoink-splash__hand-frame--${pose}`));
  }
  assert.doesNotMatch(splashComponent, /yoink-glove-hand-(fist|pull)\.png/);
  assert.doesNotMatch(splashComponent, /yoink-splash__hand-frame--(fist|pull)/);
});

test('splash hand uses two image frames during the grab', () => {
  assert.match(splashCss, /\.yoink-splash__hand-frame\s*\{[^}]*object-fit:\s*contain/s);
  assert.match(splashCss, /animation:\s*yoinkSplashHand var\(--yoink-duration\) cubic-bezier\(/);
  assert.match(splashCss, /yoinkSplashHandFrameOpen var\(--yoink-duration\) cubic-bezier\(/);
  assert.match(splashCss, /yoinkSplashHandFrameGrab var\(--yoink-duration\) cubic-bezier\(/);
  assert.match(splashCss, /@keyframes yoinkSplashHandFrameOpen/);
  assert.match(splashCss, /@keyframes yoinkSplashHandFrameGrab/);
  assert.doesNotMatch(splashCss, /yoinkSplashHandFrame(Fist|Pull)/);
  assert.doesNotMatch(splashCss, /yoink-splash__hand-frame--(fist|pull)/);
});

test('splash hand carries a bottom-anchored caught logo layer', () => {
  assert.match(splashComponent, /yoink-splash__hand-slot/);
  assert.match(splashComponent, /yoink-splash__caught-logo/);
  assert.match(splashComponent, /yoink-splash__hand-cover/);
  assert.match(splashCss, /\.yoink-splash__hand-slot\s*\{[^}]*top:\s*168px/s);
  assert.match(splashCss, /\.yoink-splash__hand-slot\s*\{[^}]*z-index:\s*7/s);
  assert.match(splashCss, /\.yoink-splash__caught-logo\s*\{[^}]*top:\s*80%/s);
  assert.match(splashCss, /\.yoink-splash__caught-logo\s*\{[^}]*z-index:\s*11/s);
  assert.match(splashCss, /\.yoink-splash__hand-cover\s*\{[^}]*top:\s*63%/s);
  assert.match(splashCss, /\.yoink-splash__hand-cover\s*\{[^}]*z-index:\s*10/s);
  assert.match(splashCss, /\.yoink-splash__hand-frame\s*\{[^}]*z-index:\s*12/s);
});

test('splash hand pinches the squashed word before the white flash reveal', () => {
  assert.match(splashCss, /44%\s*\{\s*opacity:\s*1;[\s\S]*scale\(1\.14,\s*\.62\)/s);
  assert.match(splashCss, /49%\s*\{\s*opacity:\s*1;[\s\S]*scale\(\.58,\s*\.34\)/s);
  assert.match(splashCss, /@keyframes yoinkSplashCaughtLogo/);
  assert.match(splashCss, /@keyframes yoinkSplashHandSlot/);
  assert.match(splashCss, /@keyframes yoinkSplashHandCover/);
  assert.match(splashCss, /@keyframes yoinkSplashWhiteFlash/);
  assert.match(splashComponent, /yoink-splash__white-flash/);
});

test('splash pause happens on the contact squish before the hand pulls away', () => {
  assert.match(
    splashCss,
    /49%, 58%\s*\{\s*opacity:\s*1;\s*transform:\s*translate3d\(-50%, -34px, 0\) rotate\(-1deg\) scale\(1\)/s,
  );
  assert.match(
    splashCss,
    /50%, 58%\s*\{\s*opacity:\s*1;\s*transform:\s*translate\(-50%, -50%\) scale\(\.55, \.42\) rotate\(-3deg\)/s,
  );
  assert.match(
    splashCss,
    /66%\s*\{\s*opacity:\s*1;\s*transform:\s*translate3d\(-56%, -170px, 0\) rotate\(-9deg\) scale\(\.9\)/s,
  );
  assert.match(
    splashCss,
    /84%, 100%\s*\{\s*opacity:\s*0;\s*transform:\s*translate3d\(-64%, -560px, 0\) rotate\(-16deg\) scale\(\.74\)/s,
  );
});

test('splash fades through a white screen before revealing the home screen', () => {
  assert.match(splashCss, /\.yoink-splash__white-flash\s*\{[^}]*background:\s*#fff/s);
  assert.match(splashCss, /\.yoink-splash__white-flash\s*\{[^}]*animation:\s*yoinkSplashWhiteFlash var\(--yoink-duration\) ease/s);
  assert.match(splashCss, /80%, 92%\s*\{\s*opacity:\s*1;\s*transform:\s*translate\(-50%, -50%\) scale\(1\.24\)/s);
  assert.match(splashCss, /0%, 92%\s*\{\s*opacity:\s*1;\s*\}/s);
});
