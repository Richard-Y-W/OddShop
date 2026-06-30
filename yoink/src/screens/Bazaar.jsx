import { s } from '../style.js';
import Mochi from '../components/Mochi.jsx';
import { bazaarItems, chips } from '../data.js';

const coinBadge = 'radial-gradient(circle at 35% 28%,#FFE9A8,#FFC700 62%,#E0A400)';

export default function Bazaar({ lightning }) {
  return (
    <div style={s("min-height:100%;background:#FBF5FB;display:flex;flex-direction:column;font-family:'Nunito',sans-serif;color:#1E1233")}>

      {/* ── header ── */}
      <div style={s("position:sticky;top:0;z-index:30;background:#fff;padding:47px 14px 11px;box-shadow:0 4px 16px rgba(30,18,51,.07)")}>
        <div style={s("display:flex;align-items:center;justify-content:space-between;margin-bottom:11px")}>
          <div style={s("font:700 23px 'Fredoka';color:#FF3D9A;letter-spacing:.3px")}>Yoink<span style={s("color:#FFC700")}>!</span></div>
          <div style={s("display:flex;align-items:center;gap:7px")}>
            <div style={s("display:flex;align-items:center;gap:6px;background:#FFF7DD;border:1.5px solid #FFE39A;border-radius:999px;padding:5px 11px 5px 6px")}>
              <span style={s(`width:18px;height:18px;border-radius:50%;background:${coinBadge};display:inline-flex;align-items:center;justify-content:center;font:700 10px 'Fredoka';color:#8A5A00;box-shadow:0 1px 0 #C98B00;flex:none`)}>Y</span>
              <span style={s("font:700 13px 'Fredoka';color:#9A6B00")}>2,480</span>
            </div>
            <div style={s("display:flex;align-items:center;gap:3px;background:#FFE9DF;border:1.5px solid #FFC2A8;border-radius:999px;padding:5px 9px 5px 7px")}>
              <span className="mi" style={s("font-size:17px;color:#FF6B3D;font-variation-settings:'FILL' 1")}>local_fire_department</span>
              <span style={s("font:700 13px 'Fredoka';color:#D2491F")}>7</span>
            </div>
            <div style={s("position:relative;width:38px;height:38px;border-radius:12px;background:#F4EEF4;display:flex;align-items:center;justify-content:center")}>
              <span className="mi" style={s("font-size:22px;color:#1E1233")}>shopping_bag</span>
              <span style={s("position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background:#FF3D9A;color:#fff;font:700 10px 'Fredoka';display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 2px #fff")}>3</span>
            </div>
          </div>
        </div>
        <div style={s("display:flex;gap:8px;align-items:center")}>
          <div style={s("flex:1;display:flex;align-items:center;gap:8px;background:#F4EEF4;border-radius:14px;padding:11px 13px")}>
            <span className="mi" style={s("font-size:20px;color:#9A8FA6")}>search</span>
            <span style={s("font:600 13.5px 'Nunito';color:#9A8FA6")}>Search weird, wonderful, rare&hellip;</span>
          </div>
          <div style={s("width:44px;height:44px;border-radius:14px;background:#FFE3F0;display:flex;align-items:center;justify-content:center")}>
            <span className="mi" style={s("font-size:22px;color:#FF3D9A")}>tune</span>
          </div>
        </div>
      </div>

      {/* ── content ── */}
      <div style={s("flex:1;padding:14px 14px 98px;display:flex;flex-direction:column;gap:16px")}>

        {/* lightning banner */}
        <div style={s("position:relative;overflow:hidden;border-radius:20px;padding:14px 15px;background:linear-gradient(120deg,#FF3D9A,#FF7AB8);box-shadow:0 10px 22px rgba(255,61,154,.32)")}>
          <div style={s("position:absolute;top:0;left:0;height:100%;width:34%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.55),transparent);animation:yshine 3.6s ease-in-out infinite")} />
          <div style={s("position:relative;display:flex;align-items:center;justify-content:space-between;gap:8px")}>
            <div style={s("color:#fff")}>
              <div style={s("display:flex;align-items:center;gap:5px;font:700 12px 'Fredoka';letter-spacing:.5px;opacity:.96")}><span className="mi" style={s("font-size:16px;font-variation-settings:'FILL' 1")}>bolt</span>LIGHTNING DEALS</div>
              <div style={s("font:700 19px 'Fredoka';margin:3px 0 8px")}>Up to 60% off</div>
              <div style={s("display:inline-flex;align-items:center;gap:6px;background:#fff;border-radius:10px;padding:5px 11px")}>
                <span className="mi" style={s("font-size:15px;color:#FF3D9A;font-variation-settings:'FILL' 1")}>timer</span>
                <span style={s("font:700 14px 'Fredoka';color:#FF3D9A;font-variant-numeric:tabular-nums")}>{lightning}</span>
              </div>
            </div>
            <div style={s("flex:none;margin-right:2px")}>
              <Mochi color="#12B5A0" say="" size={60} />
            </div>
          </div>
        </div>

        {/* category chips */}
        <div className="ynoscroll" style={s("display:flex;gap:8px;overflow-x:auto;margin:0 -14px;padding:0 14px")}>
          <div style={s("flex:none;padding:8px 15px;border-radius:999px;background:#FF3D9A;font:700 13px 'Nunito';color:#fff;white-space:nowrap;box-shadow:0 3px 0 #D11C77")}>All</div>
          {chips.map((chip) => (
            <div key={chip} style={s("flex:none;padding:8px 15px;border-radius:999px;background:#fff;border:1.5px solid #EEE2EE;font:700 13px 'Nunito';color:#6B5E76;white-space:nowrap")}>{chip}</div>
          ))}
        </div>

        <div style={s("display:flex;align-items:baseline;justify-content:space-between")}>
          <div style={s("font:700 18px 'Fredoka';color:#1E1233")}>Trending finds</div>
          <div style={s("font:700 13px 'Nunito';color:#FF3D9A")}>See all</div>
        </div>

        {/* product grid */}
        <div style={s("display:grid;grid-template-columns:1fr 1fr;gap:12px")}>
          {bazaarItems.map((item) => (
            <div key={item.id} style={s("background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 4px 0 rgba(30,18,51,.05),0 10px 20px rgba(30,18,51,.06)")}>
              <div style={s(`position:relative;aspect-ratio:1/1;background:${item.stripe}`)}>
                <div style={s(`position:absolute;top:8px;left:8px;padding:3px 7px;border-radius:8px;background:${item.tagColor};color:#fff;font:700 9.5px 'Fredoka';letter-spacing:.4px`)}>{item.tag}</div>
                <div style={s("position:absolute;top:7px;right:7px;width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.88);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(30,18,51,.12)")}><span className="mi" style={s("font-size:16px;color:#FF3D9A")}>favorite</span></div>
                <div style={s("position:absolute;bottom:7px;left:50%;transform:translateX(-50%);padding:2px 8px;border-radius:7px;background:rgba(255,255,255,.85);font:600 9.5px ui-monospace,Menlo,monospace;color:#6B5E76;white-space:nowrap")}>{item.img}</div>
              </div>
              <div style={s("padding:8px 10px 11px")}>
                <div style={s("font:700 12.5px/1.25 'Nunito';height:32px;overflow:hidden;color:#1E1233")}>{item.name}</div>
                <div style={s("display:flex;align-items:center;gap:3px;margin:5px 0 6px")}>
                  <span className="mi" style={s("font-size:13px;color:#FFC700;font-variation-settings:'FILL' 1")}>star</span>
                  <span style={s("font:700 11px 'Nunito';color:#1E1233")}>{item.rate}</span>
                  <span style={s("font:600 11px 'Nunito';color:#9A8FA6")}>&middot; {item.sold} sold</span>
                </div>
                <div style={s("display:flex;align-items:center;gap:5px")}>
                  <span style={s(`width:17px;height:17px;border-radius:50%;background:${coinBadge};display:inline-flex;align-items:center;justify-content:center;font:700 9px 'Fredoka';color:#8A5A00;box-shadow:0 1px 0 #C98B00;flex:none`)}>Y</span>
                  <span style={s("font:700 15px 'Fredoka';color:#1E1233")}>{item.price}</span>
                  <span style={s("font:600 11px 'Nunito';color:#B9AEC2;text-decoration:line-through")}>{item.was}</span>
                </div>
                {item.almost && (
                  <div style={s("margin-top:7px")}>
                    <div style={s("height:6px;border-radius:99px;background:#F0E6F0;overflow:hidden")}><div style={s(`height:100%;width:${item.left}%;background:linear-gradient(90deg,#FF6B3D,#FF3D9A);border-radius:99px`)} /></div>
                    <div style={s("font:700 9.5px 'Nunito';color:#FF6B3D;margin-top:3px")}>Almost gone</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* daily spin banner */}
        <div style={s("position:relative;overflow:hidden;border-radius:20px;padding:14px 15px;background:linear-gradient(120deg,#8B5CF6,#B07CFF);box-shadow:0 10px 22px rgba(139,92,246,.3);display:flex;align-items:center;gap:13px")}>
          <div style={s("width:52px;height:52px;border-radius:50%;background:conic-gradient(#FFC700 0 90deg,#FF3D9A 90deg 180deg,#12B5A0 180deg 270deg,#fff 270deg 360deg);box-shadow:0 0 0 4px rgba(255,255,255,.4);animation:yspin 7s linear infinite;flex:none")} />
          <div style={s("flex:1;color:#fff")}>
            <div style={s("font:700 16px 'Fredoka'")}>Daily Spin is ready</div>
            <div style={s("font:600 12.5px 'Nunito';opacity:.92")}>Win up to 1,000 coins &mdash; free today</div>
          </div>
          <div style={s("background:#FFC700;color:#1E1233;font:700 14px 'Fredoka';padding:10px 16px;border-radius:14px;box-shadow:0 4px 0 #C99700")}>SPIN</div>
        </div>

      </div>

      {/* ── bottom nav ── */}
      <div style={s("position:sticky;bottom:0;z-index:30;background:#fff;box-shadow:0 -3px 18px rgba(30,18,51,.08);padding:9px 14px 22px;display:flex;align-items:flex-end;justify-content:space-between")}>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#FF3D9A;font-variation-settings:'FILL' 1")}>home</span><span style={s("font:700 10px 'Fredoka';color:#FF3D9A")}>Home</span></div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#B0A4BC")}>search</span><span style={s("font:600 10px 'Fredoka';color:#B0A4BC")}>Search</span></div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:5px")}>
          <div style={s("margin-top:-26px;width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#FF3D9A,#FFC700);box-shadow:0 7px 16px rgba(255,61,154,.42),0 0 0 4px #fff;display:flex;align-items:center;justify-content:center;animation:ypulse 2.4s ease-in-out infinite")}><span className="mi" style={s("font-size:28px;color:#fff;font-variation-settings:'FILL' 1")}>casino</span></div>
          <span style={s("font:700 10px 'Fredoka';color:#8B5CF6;margin-top:-2px")}>Spin</span>
        </div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#B0A4BC")}>favorite</span><span style={s("font:600 10px 'Fredoka';color:#B0A4BC")}>Saved</span></div>
        <div style={s("flex:1;display:flex;flex-direction:column;align-items:center;gap:3px")}><span className="mi" style={s("font-size:25px;color:#B0A4BC")}>person</span><span style={s("font:600 10px 'Fredoka';color:#B0A4BC")}>You</span></div>
      </div>

    </div>
  );
}
