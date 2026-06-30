// Ported verbatim from the Yoink Home Directions design logic.

const TINT = {
  pink:   ['#FFD6EA', '#FFB9DC'],
  purple: ['#E9DEFF', '#D6C2FF'],
  yellow: ['#FFEDA6', '#FFE177'],
  teal:   ['#C7F5EC', '#A6EEDD'],
  coral:  ['#FFD9C9', '#FFC1A6'],
  blue:   ['#CFE4FF', '#AFD2FF'],
};

const SAT = {
  pink: '#FF3D9A', purple: '#8B5CF6', yellow: '#EFA100',
  teal: '#10B5A0', coral: '#FF6B3D', blue: '#3B82F6',
};

export function stripe(a, b) {
  return `repeating-linear-gradient(135deg,${a} 0 11px,${b} 11px 22px)`;
}

const mk = (o) => ({
  ...o,
  stripe: stripe(TINT[o.hue][0], TINT[o.hue][1]),
  tagColor: SAT[o.hue],
});

export const bazaarItems = [
  mk({ id: 1, name: 'Holographic Frog Sticker Pack', img: 'holo stickers', tag: 'DEAL',  hue: 'pink',   price: '120',   was: '200',   rate: '4.9', sold: '2.1k', almost: true,  left: 16 }),
  mk({ id: 2, name: 'Y2K Bedazzled Flip Phone',       img: 'flip phone',   tag: 'RARE',  hue: 'purple', price: '4,800', was: '6,000', rate: '4.8', sold: '312',  almost: false, left: 0 }),
  mk({ id: 3, name: 'Rubber Duck Army · 50 pc',       img: 'duck army',    tag: 'HOT',   hue: 'yellow', price: '340',   was: '500',   rate: '4.7', sold: '5.4k', almost: false, left: 0 }),
  mk({ id: 4, name: 'Vintage Polaroid Camera',        img: 'polaroid',     tag: 'RETRO', hue: 'teal',   price: '2,200', was: '2,800', rate: '4.9', sold: '880',  almost: true,  left: 38 }),
  mk({ id: 5, name: 'Bubble Lava Lamp',               img: 'lava lamp',    tag: 'TREND', hue: 'coral',  price: '760',   was: '1,100', rate: '4.6', sold: '1.3k', almost: false, left: 0 }),
  mk({ id: 6, name: 'Squishy Mochi Plush',            img: 'mochi plush',  tag: 'CUTE',  hue: 'blue',   price: '290',   was: '420',   rate: '5.0', sold: '9.8k', almost: true,  left: 8 }),
];

export const chips = ['Y2K', 'Retro', 'Oddities', 'Plushies', 'Stickers', 'Tech'];

export const dropItems = [
  mk({ id: 1, name: 'Crystal Boba Keychain',    img: 'boba charm',   hue: 'purple', price: '480',   left: 8,  total: 40 }),
  mk({ id: 2, name: 'Holo Trading Card · Foil', img: 'foil card',    hue: 'pink',   price: '1,250', left: 23, total: 60 }),
  mk({ id: 3, name: 'Pixel Mini Console',       img: 'mini console', hue: 'teal',   price: '2,900', left: 4,  total: 30 }),
  mk({ id: 4, name: 'Galaxy Slime Jar',         img: 'slime jar',    hue: 'blue',   price: '210',   left: 51, total: 120 }),
].map((it) => ({ ...it, leftPct: Math.max(6, Math.round((it.left / it.total) * 100)) }));

export const pocketItems = [
  mk({ id: 1, name: 'Retro Arcade Coin',     img: 'arcade coin',  hue: 'teal',   price: '180' }),
  mk({ id: 2, name: 'Mini Claw Machine',     img: 'claw machine', hue: 'yellow', price: '1,400' }),
  mk({ id: 3, name: 'Kawaii Cat Eraser Set', img: 'eraser set',   hue: 'pink',   price: '95' }),
  mk({ id: 4, name: 'Pixel Heart Pin',       img: 'heart pin',    hue: 'coral',  price: '150' }),
];

export const sets = [
  { id: 1, name: 'Retro Arcade', have: 3, total: 5, reward: '500', accent: '#10B5A0', thumbs: [{ h: 'teal', o: true }, { h: 'yellow', o: true }, { h: 'pink', o: true }, { h: 'purple', o: false }, { h: 'coral', o: false }] },
  { id: 2, name: 'Kawaii Squad', have: 2, total: 6, reward: '800', accent: '#FF3D9A', thumbs: [{ h: 'pink', o: true }, { h: 'blue', o: true }, { h: 'yellow', o: false }, { h: 'teal', o: false }, { h: 'purple', o: false }, { h: 'coral', o: false }] },
].map((set) => ({
  ...set,
  pct: Math.round((set.have / set.total) * 100),
  thumbs: set.thumbs.map((th) => ({ ...th, stripe: stripe(TINT[th.h][0], TINT[th.h][1]), locked: !th.o })),
}));

export const streak = [
  { d: 'M', done: true }, { d: 'T', done: true }, { d: 'W', done: true },
  { d: 'T', done: true }, { d: 'F', done: true }, { d: 'S', done: true, today: true },
  { d: 'S', done: false },
].map((day) => ({ ...day, todo: !day.done }));
