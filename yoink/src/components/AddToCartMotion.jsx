import './AddToCartMotion.css';

export default function AddToCartMotion({ playKey, cartCount = 2 }) {
  if (!playKey) return null;

  return (
    <div key={playKey} className="yoink-cart-motion" aria-hidden="true">
      <div className="yoink-cart-motion__item-bubble">
        <div className="yoink-cart-motion__item-card" />
      </div>

      <div className="yoink-cart-motion__cart">
        <div className="yoink-cart-motion__cart-handle" />
        <div className="yoink-cart-motion__cart-basket" />
        <div className="yoink-cart-motion__cart-wheel yoink-cart-motion__cart-wheel--one" />
        <div className="yoink-cart-motion__cart-wheel yoink-cart-motion__cart-wheel--two" />
        <div className="yoink-cart-motion__cart-badge">{cartCount}</div>
      </div>

      <div className="yoink-cart-motion__burst" />
    </div>
  );
}
