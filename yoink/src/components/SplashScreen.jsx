import { splashMotion } from '../splashMotion.js';
import './SplashScreen.css';

// Vaudeville hook cane, drawn as a two-stroke inline SVG (ink outline +
// brand fill) so it stays crisp at any size. The C-hook opens to the right
// and wraps the wordmark before the side yank.
export function Cane({ className }) {
  const path = 'M552 36 L128 36 A46 46 0 0 0 128 128 L170 128';
  return (
    <svg className={className} viewBox="0 0 560 150" aria-hidden="true">
      <path d={path} fill="none" stroke="#171326" strokeWidth="23" strokeLinecap="round" />
      <path d={path} fill="none" stroke="var(--yoink-cane, #FFB84D)" strokeWidth="13" strokeLinecap="round" />
      <path d="M540 32 L380 32" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export default function SplashScreen() {
  return (
    <div
      className="yoink-splash"
      aria-label="Yoink loading animation"
      style={{ '--yoink-brand': splashMotion.brandColor, '--yoink-duration': `${splashMotion.durationMs}ms` }}
    >
      <div className="yoink-splash__stage">
        <div className="yoink-splash__rig">
          <div className="yoink-splash__logo" aria-hidden="true">
            <span className="yoink-splash__word">Yoink</span>
            <span className="yoink-splash__bang">!</span>
          </div>
          <div className="yoink-splash__cane-slide" aria-hidden="true">
            <Cane className="yoink-splash__cane" />
          </div>
        </div>
        <div className="yoink-splash__lines" aria-hidden="true">
          <span className="yoink-splash__line yoink-splash__line--one" />
          <span className="yoink-splash__line yoink-splash__line--two" />
          <span className="yoink-splash__line yoink-splash__line--three" />
        </div>
        <span className="yoink-splash__spark yoink-splash__spark--one" aria-hidden="true" />
        <span className="yoink-splash__spark yoink-splash__spark--two" aria-hidden="true" />
        <span className="yoink-splash__spark yoink-splash__spark--three" aria-hidden="true" />
        <span className="yoink-splash__spark yoink-splash__spark--four" aria-hidden="true" />
      </div>
      <div className="yoink-splash__white-flash" aria-hidden="true" />
    </div>
  );
}
