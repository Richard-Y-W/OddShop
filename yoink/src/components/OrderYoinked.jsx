import { useEffect } from 'react';
import handGrab from '../assets/yoink-glove-hand-grab.png';
import handOpen from '../assets/yoink-glove-hand-open.png';
import './OrderYoinked.css';

export const ORDER_YOINKED_DURATION_MS = 2000;

// Order-placed celebration: the glove snatches the shopping bag off the
// screen, sparks pop, "Yoink'd!" lands, then the overlay hands control back
// via onDone. Same two glove poses and motion language as the splash.
export default function OrderYoinked({ stripe, onDone = () => {} }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, ORDER_YOINKED_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="yoink-order-grab"
      aria-label="Order placed"
      style={{ '--yoink-grab-duration': `${ORDER_YOINKED_DURATION_MS}ms`, '--yoink-grab-stripe': stripe }}
    >
      <div className="yoink-order-grab__bag" aria-hidden="true">
        <div className="yoink-order-grab__bag-handle" />
        <div className="yoink-order-grab__bag-body" />
        <div className="yoink-order-grab__bag-face">Y</div>
      </div>
      <div className="yoink-order-grab__hand" aria-hidden="true">
        <img className="yoink-order-grab__frame yoink-order-grab__frame--open" src={handOpen} alt="" />
        <img className="yoink-order-grab__frame yoink-order-grab__frame--grab" src={handGrab} alt="" />
      </div>
      <span className="yoink-order-grab__spark yoink-order-grab__spark--one" aria-hidden="true" />
      <span className="yoink-order-grab__spark yoink-order-grab__spark--two" aria-hidden="true" />
      <span className="yoink-order-grab__spark yoink-order-grab__spark--three" aria-hidden="true" />
      <span className="yoink-order-grab__spark yoink-order-grab__spark--four" aria-hidden="true" />
      <div className="yoink-order-grab__word">
        Yoink&#8217;d!
        <small>Your order is on its way</small>
      </div>
    </div>
  );
}
