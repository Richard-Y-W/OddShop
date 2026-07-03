import handGrab from '../assets/yoink-glove-hand-grab.png';
import handOpen from '../assets/yoink-glove-hand-open.png';
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
          <div className="yoink-splash__hand-slot" />
          <div className="yoink-splash__caught-logo">
            <span>Yoink</span>
            <span>!</span>
          </div>
          <div className="yoink-splash__hand-cover" />
          <img className="yoink-splash__hand-frame yoink-splash__hand-frame--open" src={handOpen} alt="" />
          <img className="yoink-splash__hand-frame yoink-splash__hand-frame--grab" src={handGrab} alt="" />
        </div>
      </div>
      <div className="yoink-splash__white-flash" aria-hidden="true" />
    </div>
  );
}
