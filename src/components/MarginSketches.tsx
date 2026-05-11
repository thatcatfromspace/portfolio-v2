import { useEffect, useLayoutEffect, useState, useCallback, useRef } from "react";
import styles from "./MarginSketches.module.css";

type GroupKey = "hero" | "now" | "projects" | "experience";
type VisibleMap = Record<GroupKey, boolean>;
type YMap = Record<GroupKey, number>;

const MAX_W = 800;
const GAP = 32;

const sd = (on: boolean, dur: string, delay: string) =>
  on ? `stroke-dashoffset ${dur} cubic-bezier(0.25,0.46,0.45,0.94) ${delay}` : "none";
const op = (on: boolean, dur: string, delay: string) =>
  on ? `opacity ${dur} ease ${delay}` : "none";




interface SpinningCubeProps {
  cx: number;
  cy: number;
  halfSize: number;
  visible: boolean;
  ink: string;
}

const SpinningCube = ({ cx, cy, halfSize, visible, ink }: SpinningCubeProps) => {
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const rafRef   = useRef<number>(0);
  const angleRef = useRef(0);

  const gridLines: [number, number, number, number, number, number][] = [];
  [-1, -1/3, 1/3, 1].forEach(v => {
    [-1, 1].forEach(a => {
      gridLines.push([v, a, -1, v, a, 1]);
      gridLines.push([a, v, -1, a, v, 1]);
      gridLines.push([-1, v, a, 1, v, a]);
    });
  });

  useEffect(() => {
    if (!visible) return;
    const FOV = 3.8, SPEED = 0.006, s = halfSize;
    const INV_S2 = 1 / Math.SQRT2;
    const ux = INV_S2, uy = INV_S2, uz = 0;

    const animate = () => {
      angleRef.current += SPEED;
      const a = angleRef.current, cosT = Math.cos(a), sinT = Math.sin(a), omc = 1 - cosT;
      const project = (vx: number, vy: number, vz: number) => {
        const dot = ux * vx + uy * vy + uz * vz;
        const crx = uy * vz - uz * vy, cry = uz * vx - ux * vz, crz = ux * vy - uy * vx;
        const rx = vx * cosT + crx * sinT + ux * dot * omc;
        const ry = vy * cosT + cry * sinT + uy * dot * omc;
        const rz = vz * cosT + crz * sinT + uz * dot * omc;
        const scale = FOV / (FOV + rz);
        return { x: cx + rx * scale * s, y: cy + ry * scale * s };
      };

      gridLines.forEach((line, i) => {
        const el = lineRefs.current[i];
        if (!el) return;
        const p1 = project(line[0], line[1], line[2]);
        const p2 = project(line[3], line[4], line[5]);
        el.setAttribute("x1", String(p1.x));
        el.setAttribute("y1", String(p1.y));
        el.setAttribute("x2", String(p2.x));
        el.setAttribute("y2", String(p2.y));
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible, cx, cy, halfSize]);

  return (
    <g opacity={visible ? 1 : 0} style={{ transition: "opacity 0.6s ease 0.3s" }}>
      {gridLines.map((_, i) => (
        <line
          key={i}
          ref={(el) => { lineRefs.current[i] = el; }}
          stroke={ink}
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.2"
        />
      ))}
    </g>
  );
};

const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const getWinner = (b: (string|null)[]): string|null => {
  for (const [a,c,d] of LINES) if (b[a] && b[a]===b[c] && b[a]===b[d]) return b[a]!;
  return b.every(Boolean) ? 'draw' : null;
};
const aiMove = (b: (string|null)[]): number => {
  for (const who of ['O','X'])
    for (const [a,c,d] of LINES) {
      if (b[a]===who && b[c]===who && !b[d]) return d;
      if (b[a]===who && b[d]===who && !b[c]) return c;
      if (b[c]===who && b[d]===who && !b[a]) return a;
    }
  if (!b[4]) return 4;
  const corners = [0,2,6,8].filter(i=>!b[i]);
  if (corners.length) return corners[Math.floor(Math.random()*corners.length)];
  return [1,3,5,7].find(i=>!b[i]) ?? -1;
};

interface TicTacToeProps { left: number; top: number; visible: boolean; ink: string; accent: string; }
const TicTacToe = ({ left, top, visible, ink, accent }: TicTacToeProps) => {
  const [board, setBoard] = useState<(string|null)[]>(Array(9).fill(null));
  const [result, setResult] = useState<string|null>(null);
  const [busy, setBusy]     = useState(false);
  const C = 34, P = 6, W = C * 3 + P * 2;
  const reset = () => { setBoard(Array(9).fill(null)); setResult(null); setBusy(false); };
  const click = (i: number) => {
    if (board[i] || result || busy) return;
    const b1 = [...board]; b1[i] = 'X';
    const w1 = getWinner(b1); setBoard(b1);
    if (w1) { setResult(w1); return; }
    setBusy(true);
    setTimeout(() => {
      const oi = aiMove(b1);
      if (oi === -1) { setResult('draw'); setBusy(false); return; }
      const b2 = [...b1]; b2[oi] = 'O';
      setBoard(b2); if (getWinner(b2)) setResult(getWinner(b2)); setBusy(false);
    }, 400);
  };
  return (
    <div style={{ position:'absolute', left, top, opacity: visible?1:0,
      transition:'opacity 0.7s ease 0.4s', pointerEvents: visible?'auto':'none', userSelect:'none' }}>
      <svg width={W} height={W+22} style={{ overflow:'visible' }}>
        {/* Hand-drawn Grid */}
        {[1,2].map(n => (
          <g key={n}>
            {/* Vertical */}
            <path
              d={`M ${P+n*C+Math.random()*2-1} ${P} Q ${P+n*C+Math.random()*4-2} ${P+W/2} ${P+n*C+Math.random()*2-1} ${P+C*3}`}
              fill="none" stroke={ink} strokeWidth="1" strokeLinecap="round" opacity="0.25"
            />
            {/* Horizontal */}
            <path
              d={`M ${P} ${P+n*C+Math.random()*2-1} Q ${P+W/2} ${P+n*C+Math.random()*4-2} ${P+C*3} ${P+n*C+Math.random()*2-1}`}
              fill="none" stroke={ink} strokeWidth="1" strokeLinecap="round" opacity="0.25"
            />
          </g>
        ))}
        {board.map((cell, i) => {
          const col=i%3, row=Math.floor(i/3);
          const ox=P+col*C+C/2, oy=P+row*C+C/2, r=C/2-6;
          return (
            <g key={i} onClick={()=>click(i)} style={{ cursor: board[i]||result?'default':'pointer' }}>
              <rect x={P+col*C+1} y={P+row*C+1} width={C-2} height={C-2} fill="transparent" />
              {cell==='X' && (
                <g>
                  {/* First stroke \ */}
                  <path d={`M ${ox-r} ${oy-r} Q ${ox+Math.random()*4-2} ${oy+Math.random()*4-2} ${ox+r} ${oy+r}`}
                    fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" opacity="0.8"
                    strokeDasharray="80" style={{ animation: 'drawCircle 0.25s ease forwards' }} />
                  {/* Second stroke / */}
                  <path d={`M ${ox+r} ${oy-r} Q ${ox+Math.random()*4-2} ${oy+Math.random()*4-2} ${ox-r} ${oy+r}`}
                    fill="none" stroke={accent} strokeWidth="1.8" strokeLinecap="round" opacity="0.8"
                    strokeDasharray="80" style={{ animation: 'drawCircle 0.25s ease 0.1s forwards', strokeDashoffset: 80 }} />
                </g>
              )}
              {cell==='O' && (
                <path
                  d={`M ${ox+r} ${oy} 
                     C ${ox+r} ${oy-r*1.2} ${ox-r*1.2} ${oy-r*1.2} ${ox-r} ${oy}
                     C ${ox-r} ${oy+r*1.2} ${ox+r*1.2} ${oy+r*1.2} ${ox+r-2} ${oy+2}`}
                  fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.5"
                  strokeDasharray="150"
                  style={{ animation: 'drawCircle 0.45s ease forwards' }}
                />
              )}
            </g>
          );
        })}
        <text x={W/2} y={W+8} fontSize="9" fontFamily="'JetBrains Mono', monospace"
          textAnchor="middle" fill={result==='X'?accent:ink} opacity={result?0.7:0.28}
          onClick={result?reset:undefined} style={{ cursor: result?'pointer':'default' }}>
          {result ? (result==='draw'?'draw · again?':result==='X'?'you win · again?':'O wins · again?') : busy?'...':'you are X'}
        </text>
      </svg>
    </div>
  );
};

export const MarginSketches = () => {

  const [vw, setVw] = useState(() => window.innerWidth);
  const [yPos, setYPos] = useState<YMap>({ hero: 400, now: 1100, projects: 1800, experience: 2600 });
  const [vis, setVis] = useState<VisibleMap>({ hero: false, now: false, projects: false, experience: false });
  const triggered = useRef(new Set<GroupKey>());

  const colLeft = Math.max(0, (vw - MAX_W) / 2);
  const L = colLeft - GAP;
  const R = colLeft + MAX_W + GAP;
  const gutterW = colLeft;

  const measure = useCallback(() => {
    setVw(window.innerWidth);
    const next: Partial<YMap> = {};
    document.querySelectorAll<HTMLElement>("[data-sketch]").forEach((el) => {
      const key = el.dataset.sketch as GroupKey;
      next[key] = el.offsetTop + el.offsetHeight * 0.28;
    });
    setYPos((p) => ({ ...p, ...next }));
  }, []);

  useLayoutEffect(() => {
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", measure); };
  }, [measure]);

  const trigger = useCallback((key: GroupKey) => {
    if (triggered.current.has(key)) return;
    triggered.current.add(key);
    setVis((p) => ({ ...p, [key]: true }));
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) trigger((e.target as HTMLElement).dataset.sketch as GroupKey);
      }),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-sketch]").forEach((el) => obs.observe(el));
    });
    return () => { cancelAnimationFrame(raf); obs.disconnect(); };
  }, [trigger]);

  if (gutterW < 110) return null;

  const ink = "var(--color-muted)";
  const acc = "var(--color-accent)";

  return (
    <>
    <svg className={styles.canvas} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
{/* 
      <g transform={`translate(${L - 28}, ${yPos.hero - 170})`}>
        <path
          d="M 0 0 C 3 38 -3 76 1 115 C -2 153 4 191 0 228 C 2 255 -1 278 0 298"
          fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round"
          strokeDasharray="338" strokeDashoffset={vis.hero ? 0 : 338}
          opacity={vis.hero ? 0.32 : 0}
          style={{ transition: `${sd(vis.hero, "1.6s", "0.1s")}, ${op(vis.hero, "0.1s", "0.1s")}` }}
        />
        {[55, 115, 175, 235].map((y, i) => (
          <line key={y} x1="-10" y1={y} x2="10" y2={y}
            stroke={ink} strokeWidth="1" strokeLinecap="round"
            strokeDasharray="22" strokeDashoffset={vis.hero ? 0 : 22}
            opacity={vis.hero ? 0.28 : 0}
            style={{ transition: `${sd(vis.hero, "0.4s", `${0.85 + i * 0.2}s`)}, ${op(vis.hero, "0.1s", `${0.85 + i * 0.2}s`)}` }}
          />
        ))}
        <circle cx="0" cy="-5" r="3.5" fill="none" stroke={acc} strokeWidth="1.3"
          opacity={vis.hero ? 0.6 : 0}
          style={{ transition: op(vis.hero, "0.5s", "1.8s") }}
        />
      </g> */}

      <g transform={`translate(${R}, ${yPos.hero - 110})`}>
        <path
          d="M 22 0 C 12 0 8 5 8 15 C 8 23 5 29 0 33 C 5 37 8 43 8 51 C 8 61 12 66 22 66"
          fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round"
          strokeDasharray="185" strokeDashoffset={vis.hero ? 0 : 185}
          opacity={vis.hero ? 0.28 : 0}
          style={{ transition: `${sd(vis.hero, "1.1s", "0.3s")}, ${op(vis.hero, "0.1s", "0.3s")}` }}
        />
        <path
          d="M 0 104 C 10 104 14 109 14 119 C 14 127 17 133 22 137 C 17 141 14 147 14 155 C 14 165 10 170 0 170"
          fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round"
          strokeDasharray="185" strokeDashoffset={vis.hero ? 0 : 185}
          opacity={vis.hero ? 0.28 : 0}
          style={{ transition: `${sd(vis.hero, "1.1s", "0.9s")}, ${op(vis.hero, "0.1s", "0.9s")}` }}
        />
        <text x="5" y="192" fontSize="9.5" fontFamily="'JetBrains Mono', monospace"
          fill={acc} opacity={vis.hero ? 0.55 : 0}
          style={{ transition: op(vis.hero, "0.6s", "1.8s") }}>
          me()
        </text>
      </g>

      <g transform={`translate(${R + 40}, ${yPos.now - 120})`}>
        <line x1="0" y1="0" x2="0" y2="195"
          stroke={ink} strokeWidth="1.2" strokeDasharray="4 9" strokeLinecap="round"
          opacity={vis.now ? 0.42 : 0}
          style={{ transition: op(vis.now, "0.8s", "0.2s") }}
        />
        <path d="M -7 186 L 0 200 L 7 186"
          fill="none" stroke={ink} strokeWidth="1.2" strokeLinecap="round"
          strokeDasharray="30" strokeDashoffset={vis.now ? 0 : 30}
          opacity={vis.now ? 0.42 : 0}
          style={{ transition: `${sd(vis.now, "0.5s", "1.2s")}, ${op(vis.now, "0.1s", "1.2s")}` }}
        />
        {[38, 98, 158].map((y, i) => (
          <line key={y} x1="0" y1={y} x2="-12" y2={y}
            stroke={ink} strokeWidth="1" strokeLinecap="round"
            strokeDasharray="14" strokeDashoffset={vis.now ? 0 : 14}
            opacity={vis.now ? 0.36 : 0}
            style={{ transition: `${sd(vis.now, "0.35s", `${0.5 + i * 0.3}s`)}, ${op(vis.now, "0.1s", `${0.5 + i * 0.3}s`)}` }}
          />
        ))}
        <text x="16" y="98" fontSize="8" fontFamily="'JetBrains Mono', monospace"
          fill={ink} opacity={vis.now ? 0.28 : 0} textAnchor="middle"
          transform="rotate(90, 16, 98)"
          style={{ transition: op(vis.now, "0.8s", "1.5s") }}>
          timeline
        </text>
      </g>

      {/* <g transform={`translate(${R}, ${yPos.now - 60})`}>
        {(["2024", "2023", "2022"] as const).map((yr, i) => (
          <g key={yr}>
            <line x1="0" y1={i * 46 + 8} x2="16" y2={i * 46 + 8}
              stroke={i === 0 ? acc : ink} strokeWidth={i === 0 ? 1.4 : 0.9}
              strokeLinecap="round" strokeDasharray="18"
              strokeDashoffset={vis.now ? 0 : 18}
              opacity={vis.now ? (i === 0 ? 0.65 : 0.32) : 0}
              style={{ transition: `${sd(vis.now, "0.5s", `${0.3 + i * 0.35}s`)}, ${op(vis.now, "0.1s", `${0.3 + i * 0.35}s`)}` }}
            />
            <text x="22" y={i * 46 + 12} fontSize="8.5"
              fontFamily="'JetBrains Mono', monospace"
              fill={i === 0 ? acc : ink}
              opacity={vis.now ? (i === 0 ? 0.6 : 0.28) : 0}
              style={{ transition: op(vis.now, "0.5s", `${0.5 + i * 0.35}s`) }}>
              {yr}
            </text>
          </g>
        ))}
      </g> */}

      {/* <g transform={`translate(${L - 68}, ${yPos.projects - 62})`}>
        <path d="M 38 0 L 0 0 L 0 26"
          fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round"
          strokeDasharray="78" strokeDashoffset={vis.projects ? 0 : 78}
          opacity={vis.projects ? 0.32 : 0}
          style={{ transition: `${sd(vis.projects, "0.7s", "0.1s")}, ${op(vis.projects, "0.1s", "0.1s")}` }}
        />
        <path d="M 0 74 L 0 100 L 38 100"
          fill="none" stroke={ink} strokeWidth="1.4" strokeLinecap="round"
          strokeDasharray="78" strokeDashoffset={vis.projects ? 0 : 78}
          opacity={vis.projects ? 0.32 : 0}
          style={{ transition: `${sd(vis.projects, "0.7s", "0.3s")}, ${op(vis.projects, "0.1s", "0.3s")}` }}
        />
        {["01", "02", "03"].map((n, i) => (
          <text key={n} x="44" y={18 + i * 32} fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
            fill={i === 0 ? acc : ink}
            opacity={vis.projects ? (i === 0 ? 0.7 : 0.3) : 0}
            style={{ transition: op(vis.projects, "0.5s", `${0.6 + i * 0.3}s`) }}>
            {n}
          </text>
        ))}
      </g> */}

      {/* <SpinningCube
        cx={R + 22}
        cy={yPos.projects}
        halfSize={22}
        visible={vis.projects}
        ink={ink}
      /> */}


      <g transform={`translate(${R}, ${yPos.experience - 44})`}>
        {/* <path d="M 44 0 L 0 0 L 0 38"
          fill="none" stroke={ink} strokeWidth="1.3" strokeLinecap="round"
          strokeDasharray="92" strokeDashoffset={vis.experience ? 0 : 92}
          opacity={vis.experience ? 0.3 : 0}
          style={{ transition: `${sd(vis.experience, "1s", "0.2s")}, ${op(vis.experience, "0.1s", "0.2s")}` }}
        /> */}
        <text x="4" y="57" fontSize="10" fontFamily="'JetBrains Mono', monospace"
          fill={ink} opacity={vis.experience ? 0.42 : 0}
          style={{ transition: op(vis.experience, "1.2s", "0.9s") }}>
          // end
        </text>
        <line x1="4" y1="62" x2="50" y2="62"
          stroke={ink} strokeWidth="0.8" strokeLinecap="round"
          strokeDasharray="50" strokeDashoffset={vis.experience ? 0 : 50}
          opacity={vis.experience ? 0.28 : 0}
          style={{ transition: `${sd(vis.experience, "0.6s", "1.7s")}, ${op(vis.experience, "0.1s", "1.7s")}` }}
        />
      </g>

    </svg>

      <TicTacToe
        left={L - 100}
        top={(yPos.projects + yPos.experience) / 2 - 55}
        visible={vis.projects}
        ink={ink}
        accent={acc}
      />
    </>
  );
};
