import { s } from '../style.js';
import Mochi from '../components/Mochi.jsx';
import { dropItems } from '../data.js';

const coinBadge = 'radial-gradient(circle at 35% 28%,#FFE9A8,#FFC700 62%,#E0A400)';

export default function Drops({ dropH, dropM, dropS }) {
  return (
    <div style={s("min-height:100%;background:#F7F4FD;display:flex;flex-direction:column;font-family:'Nunito',sans-serif;color:#1E1233")}>

      {/* ── header ── */}
      <div style={s("position:sticky;top:0;z-index:30;background:#fff;padding:47px 14px 11px;box-shadow:0 4px 16px rgba(30,18,51,.07)")}>
        <div style={s("display:flex;align-items:center;justify-content:space-between;margin-bottom:11px")}>
          <div style={s("display:flex;align-items:center;gap:7px")}>
            <div style={s("font:700 23px 'Fredoka';color:#8B5CF6;letter-spacing:.3px")}>Yoink<span style={s("color:#FFC700")}>!</span></div>
            <div style={s("font:700 9.5px 'Fredoka';letter-spacing:.6px;color:#fff;background:#8B5CF6;padding:3px 7px;border-radius:7px")}>DROPS</div>
          </div>
          <div style={s("display:flex;align-items:center;gap:7px")}>
            <div style={s("display:flex;align-items:center;gap:6px;background:#FFF7DD;border:1.5px solid #FFE39A;border-radius:999px;padding:5px 11px 5px 6px")}>
              <span style={s(`width:18px;height:18px;border-radius:50%;background:${coinBadge};display:inline-flex;align-items:center;justify-content:center;font:700 10px 'Fredoka';color:#8A5A00;box-shadow:0 1px 0 #C98B00;flex:none`)}>Y</span>
              <span style={s("font:700 13px 'Fredoka';color:#9A6B00")}>2,480</span>
            </div>
            <div style={s("display:flex;align-items:center;gap:3px;background:#FFE9DF;border:1.5px solid #FFC2A8;border-radius:999px;padding:5px 9px 5px 7px")}>
              <span className="mi" style={s("font-size:17px;color:#FF6B3D;font-variation-settings:'FILL' 1")}>local_fire_department</span><span style={s("font:700 13px 'Fredoka';color:#D2491F")}>7</span>
            </div>
            <div style={s("position:relative;width:38px;height:38px;border-radius:12px;background:#F4EEF4;display:flex;align-items:center;justify-content:center")}>
              <span className="mi" style={s("font-size:22px;color:#1E1233")}>shopping_bag</span>
              <span style={s("position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background:#8B5CF6;color:#fff;font:700 10px 'Fredoka';display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #fff")}>3</span>
            </div>
          </div>
        </div>
        <div style={s("display:flex;gap:8px;align-items:center")}>
          <div style={s("flex:1;display:flex;align-items:center;gap:8px;background:#F4EEF4;border-radius:14px;padding:11px 13px")}>
            <span className="mi" style={s("font-size:20px;color:#9A8FA6")}>search</span>
            <span style={s("font:600 13.5px 'Nunito';color:#9A8FA6")}>Search drops &amp; rare finds&hellip;</span>
          </div>
          <div style={s("width:44px;height:44px;border-radius:14px;background:#EEE6FF;display:flex;align-items:center;justify-content:center")}>
            <span className="mi" style={s("font-size:22px;color:#8B5CF6")}>tune</span>
          </div>
        </div>
      </div>

      {/* ── content ── */}
      <div style={s("flex:1;padding:14px 14px 98px;display:flex;flex-direction:column;gap:16px")}>

        {/* midnight drop hero */}
        <div style={s("position:relative;overflow:hidden;border-radius:24px;padding:16px;background:linear-gradient(150deg,#7C3AED,#B07CFF 92%);box-shadow:0 14px 30px rgba(124,58,237,.34)")}>
          <div style={s("position:absolute;top:0;left:0;height:100%;width:28%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent);animation:yshine 4.2s ease-in-out infinite")} />
          <div style={s("position:relative")}>
            <div style={s("display:flex;align-items:center;gap:6px;color:#fff;font:700 11px 'Fredoka';letter-spacing:.6px")}><span style={s("width:8px;height:8px;border-radius:50%;background:#FFC700;box-shadow:0 0 0 3px rgba(255,199,0,.3);animation:ydot 1.4s infinite")} />MIDNIGHT DROP &middot; LIVE</div>
            <div style={s("font:700 23px 'Fredoka';color:#fff;margin:7px 0 12px")}>Crystal Boba Keychain</div>
            <div style={s("position:relative;height:118px;border-radius:16px;background:repeating-linear-gradient(135deg,#E9DEFF 0 12px,#D6C2FF 12px 24px);display:flex;align-items:flex-end;justify-content:space-between;padding:10px;margin-bottom:14px")}>
              <div style={s("background:rgba(255,255,255,.85);font:600 10px ui-monospace,Menlo,monospace;color:#6B5E76;padding:3px 9px;border-radius:8px")}>boba charm</div>
              <div style={s("background:#1E1233;color:#fff;font:700 10px 'Fredoka';padding:4px 9px;border-radius:8px")}>1 of 40</div>
            </div>
            <div style={s("font:700 10px 'Nunito';color:rgba(255,255,255,.7);letter-spacing:.5px;margin-bottom:6px")}>DROP ENDS IN</div>
            <div style={s("display:flex;gap:6px")}>
              <div style={s("background:#fff;border-radius:10px;padding:6px 0;text-align:center;min-width:40px")}><div style={s("font:700 18px 'Fredoka';color:#7C3AED;font-variant-numeric:tabular-nums")}>{dropH}</div><div style={s("font:700 8px 'Nunito';color:#9A8FA6;letter-spacing:.5px")}>HRS</div></div>
              <div style={s("background:#fff;border-radius:10px;padding:6px 0;text-align:center;min-width:40px")}><div style={s("font:700 18px 'Fredoka';color:#7C3AED;font-variant-numeric:tabular-nums")}>{dropM}</div><div style={s("font:700 8px 'Nunito';color:#9A8FA6;letter-spacing:.5px")}>MIN</div></div>
              <div style={s("background:#fff;border-radius:10px;padding:6px 0;text-align:center;min-width:40px")}><div style={s("font:700 18px 'Fredoka';color:#7C3AED;font-variant-numeric:tabular-nums")}>{dropS}</div><div style={s("font:700 8px 'Nunito';color:#9A8FA6;letter-spacing:.5px")}>SEC</div></div>
              <div style={s("flex:1;display:flex;align-items:center;justify-content:flex-end;gap:5px;color:#fff;font:700 12px 'Nunito'")}><span className="mi" style={s("font-size:18px")}>visibility</span>312 watching</div>
            </div>
            <div style={s("margin-top:14px;background:#FFC700;color:#1E1233;font:700 15px 'Fredoka';padding:12px;border-radius:14px;text-align:center;box-shadow:0 4px 0 #C99700")}><span className="mi" style={s("font-size:17px;vertical-align:-3px;margin-right:6px;font-variation-settings:'FILL' 1")}>notifications_active</span>Notify me when it drops</div>
          </div>
        </div>

        {/* daily spin card */}
        <div style={s("border-radius:22px;padding:16px;background:#fff;box-shadow:0 6px 18px rgba(30,18,51,.07);display:flex;align-items:center;gap:15px")}>
          <div style={s("position:relative;flex:none;width:104px;height:104px")}>
            <div style={s("position:absolute;inset:0;border-radius:50%;background:conic-gradient(#FF3D9A 0 60deg,#FFC700 60deg 120deg,#12B5A0 120deg 180deg,#8B5CF6 180deg 240deg,#FF6B3D 240deg 300deg,#3B82F6 300deg 360deg);box-shadow:0 0 0 5px #fff,0 6px 16px rgba(30,18,51,.18);animation:yspin 9s linear infinite")} />
            <div style={s("position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;background:#fff;box-shadow:0 2px 6px rgba(30,18,51,.2);display:flex;align-items:center;justify-content:center;font:700 14px 'Fredoka';color:#8B5CF6")}>Y</div>
            <div style={s("position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:13px solid #1E1233;z-index:2")} />
          </div>
          <div style={s("flex:1")}>
            <div style={s("font:700 17px 'Fredoka';color:#1E1233")}>Daily Spin</div>
            <div style={s("font:600 12.5px/1.35 'Nunito';color:#6B5E76;margin:2px 0 11px")}>1 free spin left &middot; win coins, rare drops &amp; XP</div>
            <div style={s("display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#8B5CF6,#B07CFF);color:#fff;font:700 14px 'Fredoka';padding:10px 18px;border-radius:14px;box-shadow:0 4px 0 #6D28D9")}><span className="mi" style={s("font-size:18px;font-variation-settings:'FILL' 1")}>casino</span>SPIN TO WIN</div>
          </div>
        </div>

        <div style={s("display:flex;align-items:baseline;justify-content:space-between")}>
          <div style={s("font:700 18px 'Fredoka';color:#1E1233")}>Dropping next</div>
          <div style={s("font:700 13px 'Nunito';color:#8B5CF6")}>See all</div>
        </div>

        {/* drops grid */}
        <div style={s("display:grid;grid-template-columns:1fr 1fr;gap:12px")}>
          {dropItems.map((item) => (
            <div key={item.id} style={s("background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 4px 0 rgba(30,18,51,.05),0 10px 20px rgba(30,18,51,.06)")}>
              <div style={s(`position:relative;height:116px;background:${item.stripe}`)}>
                <div style={s("position:absolute;top:8px;left:8px;display:flex;align-items:center;gap:4px;padding:3px 8px;border-radius:8px;background:#1E1233;color:#fff;font:700 10px 'Fredoka'")}><span style={s("width:6px;height:6px;border-radius:50%;background:#FF6B3D;animation:ydot 1.3s infinite")} />{item.left} left</div>
                <div style={s("position:absolute;top:7px;right:7px;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.88);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(30,18,51,.12)")}><span className="mi" style={s("font-size:16px;color:#8B5CF6")}>notifications</span></div>
                <div style={s("position:absolute;bottom:7px;left:50%;transform:translateX(-50%);padding:2px 8px;border-radius:7px;background:rgba(255,255,255,.85);font:600 9.5px ui-monospace,Menlo,monospace;color:#6B5E76;white-space:nowrap")}>{item.img}</div>
              </div>
              <div style={s("padding:9px 10px 11px")}>
                <div style={s("font:700 12.5px/1.25 'Nunito';height:32px;overflow:hidden;color:#1E1233")}>{item.name}</div>
                <div style={s("margin:8px 0")}><div style={s("height:6px;border-radius:99px;background:#F0E6F0;overflow:hidden")}><div style={s(`height:100%;width:${item.leftPct}%;background:linear-gradient(90deg,#8B5CF6,#FF3D9A);border-radius:99px`)} /></div></div>
                <div style={s("display:flex;align-items:center;gap:5px")}>
                  <span style={s(`width:17px;height:17px;border-radius:50%;background:${coinBadge};display:inline-flex;align-items:center;justify-content:center;font:700 9px 'Fredoka';color:#8A5A00;box-shadow:0 1px 0 #C98B00;flex:none`)}>Y</span>
                  <span style={s("font:700 15px 'Fredoka';color:#1E1233")}>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={s("display:flex;justify-content:flex-start;margin-top:2px")}>
          <Mochi color="#8B5CF6" say="Drops vanish fast — set a reminder!" size={54} />
        </div>

      </div>

      {/* ── bottom nav ── */}
      <div style={s("position:sticky;bottom:0;z-index:30;background:#fff;box-shadow:0 -3px 18px rgba(30,18,51,.08);padding:9px 14px 22px;display:flex;align-items:flex-end;justify-content:space-between")}>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#8B5CF6;font-variation-settings:'FILL' 1")}>home</span><span style={s("font:700 10px 'Fredoka';color:#8B5CF6")}>Home</span></div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#B0A4BC")}>bolt</span><span style={s("font:600 10px 'Fredoka';color:#B0A4BC")}>Drops</span></div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:5px")}>
          <div style={s("margin-top:-26px;width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#8B5CF6,#FFC700);box-shadow:0 7px 16px rgba(139,92,246,.42),0 0 0 4px #fff;display:flex;align-items:center;justify-content:center;animation:ypulse 2.4s ease-in-out infinite")}><span className="mi" style={s("font-size:28px;color:#fff;font-variation-settings:'FILL' 1")}>casino</span></div>
          <span style={s("font:700 10px 'Fredoka';color:#8B5CF6;margin-top:-2px")}>Spin</span>
        </div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#B0A4BC")}>favorite</span><span style={s("font:600 10px 'Fredoka';color:#B0A4BC")}>Saved</span></div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#B0A4BC")}>person</span><span style={s("font:600 10px 'Fredoka';color:#B0A4BC")}>You</span></div>
      </div>

    </div>
  );
}
