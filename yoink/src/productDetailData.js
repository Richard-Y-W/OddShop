import { stripe } from './data.js';

export const productDetailVariant = '11a';

export const productDots = [
  { id: 'active', color: '#171326' },
  { id: 'secondary', color: '#CFC8DD' },
  { id: 'tertiary', color: '#CFC8DD' },
  { id: 'quaternary', color: '#CFC8DD' },
];

export const reviewHighlights = [
  { label: 'Works great', count: 94 },
  { label: 'Fast shipping', count: 72 },
  { label: 'As described', count: 68 },
  { label: 'Nostalgic', count: 41 },
];

export const reviewThread = [
  {
    id: 'mika',
    name: 'Mika',
    ago: '1 month ago',
    avatar: stripe('#FFE0C2', '#FFCDA6'),
    initial: 'M',
    rating: 5,
    text: 'Great condition for the age. Minor wear, but it works perfectly and the sound is exactly what I wanted.',
    helpful: 11,
  },
  {
    id: 'ren',
    name: 'Ren',
    ago: '2 weeks ago',
    avatar: stripe('#CFE4FF', '#AFD2FF'),
    initial: 'R',
    rating: 4,
    text: 'Packed carefully, shipped fast, and the tapes were a fun bonus. The buttons feel clean after the service.',
    helpful: 8,
  },
  {
    id: 'ari',
    name: 'Ari',
    ago: '3 days ago',
    avatar: stripe('#E9DEFF', '#D6C2FF'),
    initial: 'A',
    rating: 5,
    text: 'Exactly as described. The restored belt makes it feel reliable, and the photos matched the item.',
    helpful: 6,
  },
];

export const deliveryBenefits = [
  { icon: 'bolt', label: 'Ships in 24h', filled: true },
  { icon: 'autorenew', label: 'Free returns', filled: false },
  { icon: 'verified_user', label: 'Authenticity checked', filled: true },
];

export const policyRows = [
  { icon: 'assignment_return', label: 'Return policy', accent: '#171326' },
  { icon: 'receipt_long', label: 'Shipping policy', accent: '#171326' },
  { icon: 'storefront', label: 'Visit pixelpawn', accent: '#6A5ACD' },
];

export function makeStarRow(rating) {
  return Array.from({ length: 5 }, (_, index) => ({
    id: index,
    color: index < rating ? '#FFB84D' : '#E5E1ED',
  }));
}

export function makeProductDetail(listing = {}) {
  const isAuction = listing.cta === 'Bid' || listing.isAuction;
  const isOffer = listing.cta === 'Offer' || listing.isOffer;

  return {
    variant: productDetailVariant,
    title: listing.name ?? 'Retro Cassette Walkman',
    imageLabel: listing.img ?? 'walkman photo',
    imageStripe: listing.stripe ?? stripe('#EEEBF6', '#E0DCEE'),
    price: listing.price ?? '640',
    seller: listing.seller ?? 'pixelpawn',
    sellerFeedback: listing.fb ?? '100%',
    primaryCta: isAuction ? 'Place bid' : isOffer ? 'Make offer' : 'Add to cart',
    secondaryCta: isAuction ? 'Buy it now' : isOffer ? 'Add to cart' : 'Buy now',
    salePrice: listing.price ?? '640',
    originalPrice: '900',
    discount: '29% off',
    socialProof: '500+ yoinked this month',
    eyeing: '18',
    coinBack: '+64 coins',
    scarcity: isAuction ? `${listing.bids ?? '23'} bids` : 'Only 8 left',
    dealEnds: listing.timeLeft ? `Deal ends ${listing.timeLeft}` : 'Deal ends 12:08',
    rating: '4.5',
    ratingCount: '290',
    quantityAvailable: 8,
    description:
      'Rewind to analog bliss. This fully-restored cassette Walkman was serviced end-to-end: new belt, cleaned heads, fresh foam pads, and 12 hand-picked mixtapes from the golden era.',
    deliveryEstimate: 'Arrives Jul 3 - Jul 6',
    shipTo: 'Ship to 80841',
    dots: productDots,
    reviewHighlights,
    reviews: reviewThread,
    deliveryBenefits,
    policyRows,
  };
}
