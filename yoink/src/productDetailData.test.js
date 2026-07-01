import assert from 'node:assert/strict';
import test from 'node:test';
import {
  deliveryBenefits,
  makeProductDetail,
  productDetailVariant,
  reviewHighlights,
  reviewThread,
} from './productDetailData.js';

test('product detail data follows the 11a reviews and delivery layout', () => {
  const listing = {
    id: 'f12',
    name: 'Cassette Walkman + 12 tapes',
    price: '640',
    img: 'walkman',
    seller: 'pixelpawn',
    cta: 'Buy',
  };

  const detail = makeProductDetail(listing);

  assert.equal(productDetailVariant, '11a');
  assert.equal(detail.variant, '11a');
  assert.equal(detail.title, 'Cassette Walkman + 12 tapes');
  assert.equal(detail.price, '640');
  assert.equal(detail.primaryCta, 'Add to cart');
  assert.equal(detail.secondaryCta, 'Buy now');
  assert.equal(detail.seller, 'pixelpawn');
  assert.deepEqual(reviewHighlights.map((item) => item.label), ['Works great', 'Fast shipping', 'As described', 'Nostalgic']);
  assert.ok(reviewThread.length >= 2);
  assert.ok(reviewThread.every((review) => Number.isInteger(review.helpful)));
  assert.deepEqual(deliveryBenefits.map((item) => item.label), ['Ships in 24h', 'Free returns', 'Authenticity checked']);
  assert.equal(detail.deliveryEstimate, 'Arrives Jul 3 - Jul 6');
});
