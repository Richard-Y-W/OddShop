function parsePrice(price) {
  if (typeof price === 'number') return price;
  const parsed = Number(String(price ?? '0').replace(/,/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatMoney(value) {
  return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function makeCartItem(listing, quantity = 1) {
  return {
    id: listing.id ?? listing.name ?? 'yoink-item',
    title: listing.name ?? 'Yoink item',
    imageLabel: listing.img ?? 'item',
    imageStripe: listing.stripe ?? 'repeating-linear-gradient(135deg,#F0EEF8 0 11px,#E6E3F2 11px 22px)',
    seller: listing.seller ?? 'yoink_seller',
    feedback: listing.fb ?? '99.0%',
    unitPrice: parsePrice(listing.price),
    quantity,
  };
}

export function addListingToCart(cartItems, listing, quantity = 1) {
  const nextQuantity = Math.max(1, quantity);
  const item = makeCartItem(listing, nextQuantity);
  const existing = cartItems.find((cartItem) => cartItem.id === item.id);

  if (!existing) return [...cartItems, item];

  return cartItems.map((cartItem) => (
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + nextQuantity }
      : cartItem
  ));
}

export function getCartQuantity(cartItems) {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

export function getCartSubtotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
}

export function getCartShipping(cartItems) {
  return cartItems.length > 0 ? 3 : 0;
}

export function getCartTotal(cartItems) {
  return getCartSubtotal(cartItems) + getCartShipping(cartItems);
}

export function getCheckoutTotals(cartItems, { shippingPrice } = {}) {
  const subtotal = getCartSubtotal(cartItems);
  const shipping = cartItems.length > 0 ? Number(shippingPrice ?? getCartShipping(cartItems)) : 0;

  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
  };
}
