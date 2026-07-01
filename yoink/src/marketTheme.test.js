import assert from 'node:assert/strict';
import test from 'node:test';
import { marketTheme } from './marketTheme.js';

test('mono market uses requested active and badge colors', () => {
  assert.equal(marketTheme.brand, '#6A5ACD');
  assert.equal(marketTheme.activeChipBackground, '#6A5ACD');
  assert.equal(marketTheme.currencyButtonBackground, '#6A5ACD');
  assert.equal(marketTheme.cartCountBackground, '#6A5ACD');
  assert.equal(marketTheme.attentionBadgeBackground, '#FFB84D');
  assert.equal(marketTheme.attentionBadgeText, '#171326');
});
