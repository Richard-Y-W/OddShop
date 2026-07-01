import { splashMotion } from '../splashMotion.js';
import './SplashScreen.css';

export default function SplashScreen() {
  return (
    <div
      className="yoink-splash"
      aria-label="Yoink loading animation"
      style={{ '--yoink-brand': splashMotion.brandColor, '--yoink-duration': `${splashMotion.durationMs}ms` }}
    >
      <div className="yoink-splash__shadow" />
      <div className="yoink-splash__rig">
        <div className="yoink-splash__logo" aria-hidden="true">
          <span className="yoink-splash__word">Yoink</span>
          <span className="yoink-splash__bang">!</span>
        </div>
        <div className="yoink-splash__cover" />
        <div className="yoink-splash__hand" aria-hidden="true">
          <div className="yoink-splash__wrist" />
          <div className="yoink-splash__open-hand">
            <div className="yoink-splash__open-palm" />
            <div className="yoink-splash__open-fingers" />
            <div className="yoink-splash__open-thumb" />
          </div>
          <div className="yoink-splash__closed-hand">
            <div className="yoink-splash__fist" />
            <div className="yoink-splash__fist-thumb" />
            <div className="yoink-splash__fist-highlight" />
          </div>
        </div>
      </div>
    </div>
  );
}
