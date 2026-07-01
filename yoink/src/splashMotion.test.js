import assert from 'node:assert/strict';
import test from 'node:test';
import { splashMotion } from './splashMotion.js';

test('splash motion keeps the approved bright cartoon fist direction', () => {
  assert.equal(splashMotion.wordmark, 'Yoink!');
  assert.equal(splashMotion.brandColor, '#6A5ACD');
  assert.equal(splashMotion.durationMs, 2420);
  assert.equal(splashMotion.exitStyle, 'soft-cartoon-fist-yank');
  assert.equal(splashMotion.handStyle, 'smooth-cartoon-human-fist');
  assert.equal(splashMotion.usesBlur, false);
  assert.equal(splashMotion.autoPlaysOnLoad, true);
});
