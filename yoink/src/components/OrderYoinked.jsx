import { useEffect } from 'react';
import { Cane } from './SplashScreen.jsx';
import './OrderYoinked.css';

export const ORDER_YOINKED_DURATION_MS = 1600;

// Order-placed celebration: the hook cane snatches the shopping bag off the
// screen sideways — same snappy motion language as the splash — then
// "Yoink'd!" slams in and control returns via onDone.
export default function OrderYoinked({ stripe, onDone = () => {} }) {
  useEffect(() => {
    const timer = window.setTimeout(onDone, ORDER_YOINKED_DURATION_MS + 250);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div
      className="yoink-order-grab"
      aria-label="Order placed"
      style={{ '--yoink-grab-duration': `${ORDER_YOINKED_DURATION_MS}ms`, '--yoink-grab-stripe': stripe }}
    >
      <div className="yoink-order-grab__rig" aria-hidden="true">
        <div className="yoink-order-grab__bag">
          <div className="yoink-order-grab__bag-handle" />
          <div className="yoink-order-grab__bag-body" />
          <div className="yoink-order-grab__bag-face">Y</div>
        </div>
        <div className="yoink-order-grab__cane-slide">
          <Cane className="yoink-order-grab__cane" />
        </div>
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
