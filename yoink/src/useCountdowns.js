import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');
const fmtMS = (sec) => {
  const x = Math.max(0, sec);
  return `${pad(Math.floor(x / 60))}:${pad(Math.floor(x % 60))}`;
};

// Single 1s ticker shared by every screen, mirroring the design's DCLogic.
export function useCountdowns() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setT((s) => (s + 1) % 100000), 1000);
    return () => clearInterval(iv);
  }, []);

  const dropSecs = 9669 - (t % 9670);

  return {
    lightning: fmtMS(312 - (t % 313)),
    dropH: pad(Math.floor(dropSecs / 3600)),
    dropM: pad(Math.floor((dropSecs % 3600) / 60)),
    dropS: pad(Math.floor(dropSecs % 60)),
  };
}
