import { s } from './style.js';
import IOSDevice from './components/IOSDevice.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import MonoMarket from './screens/MonoMarket.jsx';

export default function App() {
  return (
    <div style={s("min-height:100vh;padding:36px 40px 60px;box-sizing:border-box")}>
      <SplashScreen />
      <div style={s("display:flex;align-items:center;gap:10px;margin:0 0 7px")}>
        <span style={s("font:700 11px 'Nunito',ui-monospace,monospace;padding:3px 8px;background:#fff;color:#1b1226;border-radius:6px")}>8a</span>
        <span style={s("font:700 15px 'Fredoka';color:#fff;letter-spacing:.2px")}>Mono Market &mdash; black/white, slate-blue logo only</span>
      </div>
      <p style={s("font:600 13.5px/1.5 'Nunito';color:rgba(255,255,255,.58);margin:0 0 30px;max-width:720px")}>
        Black and white marketplace UI with a pale lavender wash. The Yoink wordmark is the only brand-color element.
      </p>

      <div style={s("display:flex;align-items:flex-start")}>
        <IOSDevice>
          <MonoMarket />
        </IOSDevice>
      </div>
    </div>
  );
}
