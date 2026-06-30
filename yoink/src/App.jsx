import { s } from './style.js';
import IOSDevice from './components/IOSDevice.jsx';
import Bazaar from './screens/Bazaar.jsx';
import Drops from './screens/Drops.jsx';
import Pocket from './screens/Pocket.jsx';
import { useCountdowns } from './useCountdowns.js';

const directions = [
  { id: '1a', name: 'Bazaar', desc: 'dense marketplace grid, pink-led, lightning deals' },
  { id: '1b', name: 'Drops',  desc: 'limited hype releases, purple-led, spin-wheel hero' },
  { id: '1c', name: 'Pocket', desc: 'collect sets, teal/yellow, XP & streak forward' },
];

function Label({ id, name, desc }) {
  return (
    <div style={s("display:flex;align-items:center;gap:9px;font:600 13px 'Nunito';color:rgba(255,255,255,.72);max-width:402px;margin-bottom:13px")}>
      <span style={s("font:700 11px 'Nunito',ui-monospace,monospace;padding:3px 8px;background:rgba(255,255,255,.14);color:#fff;border-radius:6px")}>{id}</span>
      <span><b style={s("color:#fff;font-family:'Fredoka'")}>{name}</b> &mdash; {desc}</span>
    </div>
  );
}

export default function App() {
  const { lightning, dropH, dropM, dropS } = useCountdowns();
  const screens = {
    '1a': <Bazaar lightning={lightning} />,
    '1b': <Drops dropH={dropH} dropM={dropM} dropS={dropS} />,
    '1c': <Pocket />,
  };

  return (
    <div style={s("min-height:100vh;padding:36px 40px 60px;box-sizing:border-box")}>
      <div style={s("display:flex;align-items:center;gap:10px;margin:0 0 7px")}>
        <span style={s("font:700 11px 'Nunito',ui-monospace,monospace;padding:3px 8px;background:#fff;color:#1b1226;border-radius:6px")}>1</span>
        <span style={s("font:700 15px 'Fredoka';color:#fff;letter-spacing:.2px")}>Yoink &middot; 3 home-screen directions</span>
      </div>
      <p style={s("font:600 13.5px/1.5 'Nunito';color:rgba(255,255,255,.58);margin:0 0 30px;max-width:720px")}>
        One candy system + Mochi the mascot, three takes on the home feed &mdash; built to feel like an eBay/Amazon browse, then layered with game currency, streaks &amp; live deal timers. The countdowns are actually ticking.
      </p>

      <div style={s("display:flex;flex-wrap:wrap;gap:40px;align-items:flex-start")}>
        {directions.map((d) => (
          <div key={d.id} style={s("flex:none")}>
            <Label id={d.id} name={d.name} desc={d.desc} />
            <IOSDevice>{screens[d.id]}</IOSDevice>
          </div>
        ))}
      </div>
    </div>
  );
}
