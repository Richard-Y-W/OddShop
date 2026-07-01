import assert from 'node:assert/strict';
import test from 'node:test';
import { appendMarketFeed, makeMarketFeed, marketCats } from './data.js';

test('market feed generates the locked turn 8 listing shape', () => {
  const feed = makeMarketFeed(0, 8);

  assert.equal(feed.length, 8);
  assert.deepEqual(marketCats, ['Deals', 'Ending soon', 'Trading cards', 'Retro tech', 'Vintage', 'Plushies']);
  assert.equal(feed[0].id, 'f0');
  assert.equal(feed[0].name, 'Vintage Polaroid SX-70 — tested');
  assert.equal(feed[0].cta, 'Buy');
  assert.equal(feed[1].cta, 'Bid');
  assert.equal(feed[2].cta, 'Offer');
  assert.equal(feed[1].urgent, true);
  assert.equal(feed[1].shipFree, false);
  assert.equal(feed[0].topRated, true);
  assert.match(feed[0].stripe, /^repeating-linear-gradient/);
});

test('market feed continues deterministically from an offset', () => {
  const first = makeMarketFeed(0, 2);
  const next = makeMarketFeed(2, 2);

  assert.equal(first[1].id, 'f1');
  assert.equal(next[0].id, 'f2');
  assert.notEqual(first[0].name, next[0].name);
});

test('market feed appends in pages and caps at the design limit', () => {
  const current = makeMarketFeed(0, 238);
  const next = appendMarketFeed(current);

  assert.equal(next.length, 240);
  assert.equal(next[238].id, 'f238');
  assert.equal(next[239].id, 'f239');
  assert.equal(appendMarketFeed(next), next);
});
