import { s } from '../style.js';

// Animated blob mascot, ported from Mochi.dc.html.
export default function Mochi({ color = '#12B5A0', size = 72, say = '' }) {
  const hasSay = String(say).length > 0;
  return (
    <div style={s("display:inline-flex;align-items:center;gap:9px;font-family:'Fredoka',sans-serif")}>
      <div style={s(`position:relative;width:${size}px;height:${size}px;flex:none`)}>
        <div style={s(`position:absolute;inset:0;background:${color};border-radius:48% 52% 46% 54% / 56% 52% 48% 44%;box-shadow:0 8px 16px rgba(30,18,51,.18),inset 0 -6px 10px rgba(0,0,0,.07);animation:mochiBob 2.8s ease-in-out infinite`)}>
          <div style={s(`position:absolute;left:50%;top:-15%;width:7%;height:20%;background:${color};border-radius:9px;transform:translateX(-50%) rotate(9deg);transform-origin:bottom center`)} />
          <div style={s(`position:absolute;left:55%;top:-21%;width:19%;height:19%;background:${color};border-radius:50%;transform:translateX(-50%);filter:brightness(.92)`)} />
          <div style={s("position:absolute;top:14%;left:16%;width:30%;height:21%;background:rgba(255,255,255,.45);border-radius:50%;transform:rotate(-18deg)")} />
          <div style={s("position:absolute;top:35%;left:25%;width:14%;height:19%;background:#2A1B3D;border-radius:50%;animation:mochiBlink 4.6s infinite")}>
            <div style={s("position:absolute;top:14%;left:18%;width:40%;height:40%;background:#fff;border-radius:50%")} />
          </div>
          <div style={s("position:absolute;top:35%;right:25%;width:14%;height:19%;background:#2A1B3D;border-radius:50%;animation:mochiBlink 4.6s infinite")}>
            <div style={s("position:absolute;top:14%;left:18%;width:40%;height:40%;background:#fff;border-radius:50%")} />
          </div>
          <div style={s("position:absolute;top:53%;left:13%;width:16%;height:11%;background:#FF7FB8;opacity:.5;border-radius:50%")} />
          <div style={s("position:absolute;top:53%;right:13%;width:16%;height:11%;background:#FF7FB8;opacity:.5;border-radius:50%")} />
          <div style={s("position:absolute;top:57%;left:50%;transform:translateX(-50%);width:30%;height:17%;border:0 solid #2A1B3D;border-bottom-width:4px;border-radius:0 0 60px 60px")} />
        </div>
        <div style={s(`position:absolute;bottom:-2%;left:29%;width:18%;height:9%;background:${color};filter:brightness(.85);border-radius:50%`)} />
        <div style={s(`position:absolute;bottom:-2%;right:29%;width:18%;height:9%;background:${color};filter:brightness(.85);border-radius:50%`)} />
      </div>
      {hasSay && (
        <div style={s("position:relative;background:#fff;border-radius:14px;padding:8px 12px;font:600 12.5px 'Nunito';color:#2A1B3D;box-shadow:0 4px 14px rgba(30,18,51,.16);max-width:148px;line-height:1.25")}>
          {say}
          <div style={s("position:absolute;left:-4px;top:50%;transform:translateY(-50%) rotate(45deg);width:9px;height:9px;background:#fff")} />
        </div>
      )}
    </div>
  );
}
