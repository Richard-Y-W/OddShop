export const APP_SCREENS = {
  market: 'market',
  productDetail: 'product-detail',
};

const PRODUCT_OPEN_TRIGGERS = ['listing', 'Buy', 'Bid', 'Offer'];

export function getInitialScreen() {
  return APP_SCREENS.market;
}

export function getProductOpenTriggers() {
  return PRODUCT_OPEN_TRIGGERS;
}

export function openProductDetail(selectedListing, trigger = 'listing') {
  return {
    screen: APP_SCREENS.productDetail,
    selectedListing,
    trigger,
    productDetailVariant: '11a',
  };
}

export function returnToMarket() {
  return {
    screen: APP_SCREENS.market,
    selectedListing: null,
  };
}
