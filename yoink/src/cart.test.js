import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import test from 'node:test';

const cartUrl = new URL('./cart.js', import.meta.url);

const polaroid = {
  id: 'f0',
  name: 'Vintage Polaroid SX-70 - tested',
  img: 'polaroid sx-70',
  price: '120',
  seller: 'retro_optics',
  fb: '97.0%',
  stripe: 'linear-gradient(#fff,#eee)',
};

const charizard = {
  id: 'f1',
  name: 'Holo Charizard 1st Ed - PSA 8',
  img: 'graded slab',
  price: '18,415',
  seller: 'cardvault',
  fb: '98.1%',
  stripe: 'linear-gradient(#fee,#eef)',
};

test('cart helpers add listings once and increment repeated listings', async () => {
  assert.equal(existsSync(cartUrl), true, 'missing cart helpers');
  const { addListingToCart, getCartQuantity } = await import(cartUrl);

  const oneItem = addListingToCart([], polaroid);
  const repeated = addListingToCart(oneItem, polaroid);
  const twoItems = addListingToCart(repeated, charizard);

  assert.equal(oneItem.length, 1);
  assert.equal(repeated.length, 1);
  assert.equal(repeated[0].quantity, 2);
  assert.equal(twoItems.length, 2);
  assert.equal(getCartQuantity(twoItems), 3);
});

test('cart helpers compute subtotal, shipping, total, and display labels', async () => {
  assert.equal(existsSync(cartUrl), true, 'missing cart helpers');
  const { addListingToCart, formatMoney, getCartShipping, getCartSubtotal, getCartTotal } = await import(cartUrl);

  const cart = addListingToCart(addListingToCart(addListingToCart([], polaroid), polaroid), charizard);

  assert.equal(getCartSubtotal(cart), 18655);
  assert.equal(getCartShipping(cart), 3);
  assert.equal(getCartTotal(cart), 18658);
  assert.equal(formatMoney(getCartTotal(cart)), '$18,658.00');
});

test('checkout totals can use the selected shipping option from checkout', async () => {
  assert.equal(existsSync(cartUrl), true, 'missing cart helpers');
  const { addListingToCart, getCheckoutTotals } = await import(cartUrl);

  const cart = addListingToCart([], polaroid);
  const standardTotals = getCheckoutTotals(cart, { shippingPrice: 3 });
  const rushTotals = getCheckoutTotals(cart, { shippingPrice: 6.5 });

  assert.deepEqual(standardTotals, {
    subtotal: 120,
    shipping: 3,
    total: 123,
  });
  assert.deepEqual(rushTotals, {
    subtotal: 120,
    shipping: 6.5,
    total: 126.5,
  });
});
