import assert from 'node:assert/strict';
import test from 'node:test';
import {
  APP_SCREENS,
  getInitialScreen,
  getProductOpenTriggers,
  openProductDetail,
  returnToMarket,
} from './appFlow.js';

test('app flow starts on mono market and opens 11a product detail from every listing trigger', () => {
  const listing = { id: 'f12', cta: 'Buy', name: 'Cassette Walkman + 12 tapes' };

  assert.equal(getInitialScreen(), APP_SCREENS.market);
  assert.deepEqual(getProductOpenTriggers(), ['listing', 'Buy', 'Bid', 'Offer']);

  const detailState = openProductDetail(listing, 'Offer');

  assert.equal(detailState.screen, APP_SCREENS.productDetail);
  assert.equal(detailState.productDetailVariant, '11a');
  assert.equal(detailState.selectedListing, listing);
  assert.equal(detailState.trigger, 'Offer');
  assert.deepEqual(returnToMarket(), { screen: APP_SCREENS.market, selectedListing: null });
});
