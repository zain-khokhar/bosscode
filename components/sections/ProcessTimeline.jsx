'use client';

/* ====================================================================
   BossCode "How it works": pinned phone, scroll-driven chat.
   ONE FILE, NO TAILWIND, NO CSS IMPORT.
   All styles are inside this file (scoped with the "bcp-" prefix), so
   nothing depends on your project's CSS setup.
   BRAND COLORS: edit the variables at the top of the CSS string below.
   Load the "Caveat" font once in your layout for the handwritten register.
==================================================================== */

import { useCallback, useEffect, useRef, useState } from 'react';

const CSS = `
/* ==================================================================
   BossCode "How it works" (pinned phone)
   BRAND COLORS: change only these variables to match your site.
   (I matched them by eye from your screenshots, so replace with your
   exact values or point them at your own CSS variables.)
================================================================== */
.bcp {
  --bcp-ink: #070b24;        /* main dark / headline color */
  --bcp-brand: #0a4bff;      /* main blue */
  --bcp-muted: #5b6275;      /* secondary text */
  --bcp-line: #e3e6ee;       /* borders */
  --bcp-app: #ffffff;        /* phone screen background */
  --bcp-app2: #f1f3f8;       /* agency bubbles, soft panels */
  --bcp-bezel: #0b1020;      /* phone frame */
  --bcp-paper: #fffdf6;      /* the handwritten register */
  --bcp-pen: #1d2a8f;        /* handwriting ink */
  --bcp-warn: #f2622a;       /* "due" pills and the crossed-out line */
  --bcp-ok: #1a8a4a;         /* "paid" pills and ticks */
  position: relative;
  color: var(--bcp-ink);
}
.bcp *, .bcp *::before, .bcp *::after { box-sizing: border-box; }

/* header */
.bcp-hd { text-align: center; padding: clamp(72px, 14vh, 140px) 6vw 6vh; }
.bcp-eyebrow { font-size: 14px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--bcp-brand); }
.bcp-hd h2 { font-size: clamp(38px, 5.4vw, 80px); font-weight: 800; line-height: 1; letter-spacing: -.035em; margin: 14px auto 16px; max-width: 12em; }
.bcp-hd p { font-size: 20px; color: var(--bcp-muted); margin: 0; }

/* scroll track + pinned stage */
.bcp-track { position: relative; height: 420vh; }
.bcp-pin {
  position: sticky; top: 0; height: 100vh; height: 100svh;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4vw; align-items: center;
  max-width: 1240px; margin: 0 auto; padding: clamp(96px, 14vh, 130px) 5vw 4vh;
}

/* left text */
.bcp-txt { transition: opacity .22s, transform .22s; }
.bcp-txt.sw { opacity: 0; transform: translateY(10px); }
.bcp-ph { font-size: 14px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--bcp-brand); }
.bcp-txt h3 { font-size: clamp(34px, 4.2vw, 64px); font-weight: 800; letter-spacing: -.035em; line-height: 1; margin: 10px 0 14px; }
.bcp-when { display: inline-block; font-size: 13px; font-weight: 700; border: 1.5px solid var(--bcp-line); border-radius: 999px; padding: 6px 12px; color: var(--bcp-muted); margin-bottom: 16px; }
.bcp-cp { font-size: 20px; line-height: 1.45; color: var(--bcp-muted); margin: 0 0 18px; max-width: 22em; }
.bcp-gets { list-style: none; margin: 0 0 30px; padding: 0; display: flex; flex-direction: column; gap: 8px; font-weight: 600; }
.bcp-gets li::before { content: ""; display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: var(--bcp-brand); margin-right: 12px; }

/* timeline */
.bcp-tl { position: relative; display: flex; flex-direction: column; gap: 14px; padding-left: 24px; }
.bcp-tl::before { content: ""; position: absolute; left: 5px; top: 8px; bottom: 8px; width: 2px; background: var(--bcp-line); }
.bcp-fill { position: absolute; left: 5px; top: 8px; width: 2px; background: var(--bcp-brand); height: calc((100% - 16px) * var(--p, 0)); }
.bcp-tl button { position: relative; text-align: left; font-weight: 600; font-size: 15px; line-height: 1.3; font-family: inherit; color: var(--bcp-muted); background: none; border: 0; padding: 2px 0; cursor: pointer; }
.bcp-tl button::before { content: ""; position: absolute; left: -24px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: #fff; border: 2px solid var(--bcp-line); transition: .3s; }
.bcp-tl button.on { color: var(--bcp-ink); font-weight: 800; }
.bcp-tl button.on::before, .bcp-tl button.past::before { background: var(--bcp-brand); border-color: var(--bcp-brand); }
.bcp button:focus-visible { outline: 3px solid var(--bcp-brand); outline-offset: 3px; }

/* phone */
.bcp-phone { justify-self: center; width: min(330px, 82vw); height: min(70vh, 620px); background: var(--bcp-bezel); border-radius: 46px; padding: 10px; box-shadow: 0 40px 70px -30px rgba(7, 11, 36, .55); display: flex; }
.bcp-scr { flex: 1; background: var(--bcp-app); border-radius: 36px; overflow: hidden; display: flex; flex-direction: column; position: relative; min-height: 0; }
.bcp-scr::before { content: ""; position: absolute; top: 8px; left: 50%; width: 78px; height: 20px; margin-left: -39px; background: var(--bcp-bezel); border-radius: 12px; z-index: 3; }
.bcp-chh { padding: 38px 16px 12px; border-bottom: 1.5px solid var(--bcp-line); display: flex; align-items: center; gap: 10px; background: var(--bcp-app); }
.bcp-chh i { width: 34px; height: 34px; border-radius: 50%; background: var(--bcp-ink); color: #fff; display: grid; place-items: center; font-style: normal; font-weight: 800; font-size: 12px; }
.bcp-chh b { display: block; font-size: 14px; }
.bcp-chh small { color: var(--bcp-ok); font-size: 11px; font-weight: 700; }
.bcp-thread { flex: 1; min-height: 0; overflow-y: auto; scrollbar-width: none; padding: 12px 12px 18px; display: flex; flex-direction: column; gap: 7px; }
.bcp-thread::-webkit-scrollbar { display: none; }
.bcp-sep { align-self: center; font-size: 11px; font-weight: 700; color: var(--bcp-muted); background: var(--bcp-app2); border-radius: 999px; padding: 4px 12px; margin: 8px 0 2px; }

/* bubbles */
.bcp-m { max-width: 88%; padding: 9px 12px; border-radius: 16px; font-size: 13.5px; line-height: 1.35; animation: bcp-pop .35s ease both; min-width: 0; }
.bcp-m.a { align-self: flex-start; background: var(--bcp-app2); border-bottom-left-radius: 5px; color: var(--bcp-ink); }
.bcp-m.c { align-self: flex-end; background: var(--bcp-brand); color: #fff; border-bottom-right-radius: 5px; }
@keyframes bcp-pop { from { opacity: 0; transform: translateY(8px) scale(.97); } }
.bcp-typing { display: flex; gap: 4px; padding: 12px 14px; }
.bcp-typing span { width: 6px; height: 6px; border-radius: 50%; background: var(--bcp-muted); animation: bcp-dot 1s infinite; }
.bcp-typing span:nth-child(2) { animation-delay: .15s; }
.bcp-typing span:nth-child(3) { animation-delay: .3s; }
@keyframes bcp-dot { 50% { transform: translateY(-4px); opacity: .4; } }

/* cards */
.bcp-card { width: 88%; }
.bcp-card b { display: block; font-size: 14px; margin-bottom: 6px; }
.bcp-card ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 5px; }
.bcp-card small { color: var(--bcp-muted); font-size: 12px; }
.bcp-fx { display: inline-block; margin-top: 8px; font-style: normal; font-size: 11px; font-weight: 800; background: var(--bcp-brand); color: #fff; border-radius: 999px; padding: 3px 10px; }
.bcp-img { padding: 8px; }
.bcp-img > span { display: block; padding: 6px 4px 0; font-size: 13px; }
.bcp-reg { background: var(--bcp-paper); border-radius: 10px; padding: 6px 10px 6px 26px; position: relative; background-image: repeating-linear-gradient(transparent 0 25px, #dad5c3 25px 26px); transform: rotate(-1.5deg); width: 190px; max-width: 100%; }
.bcp-reg::before { content: ""; position: absolute; left: 18px; top: 0; bottom: 0; width: 1.5px; background: var(--bcp-warn); opacity: .6; }
.bcp-reg p { margin: 0; font-family: 'Caveat', cursive; font-weight: 600; font-size: 20px; line-height: 26px; color: var(--bcp-pen); }
.bcp-reg p.x { text-decoration: line-through; text-decoration-color: var(--bcp-warn); text-decoration-thickness: 2px; opacity: .7; }

/* design preview card */
.bcp-mu { background: var(--bcp-app); border: 1.5px solid var(--bcp-line); border-radius: 12px; padding: 8px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 8px; color: var(--bcp-ink); }
.bcp-mt { display: flex; justify-content: space-between; align-items: center; }
.bcp-mt b { margin: 0; font-size: 13px; }
.bcp-pbt { background: var(--bcp-brand); color: #fff; border-radius: 999px; padding: 3px 9px; font-size: 10px; font-weight: 700; }
.bcp-mr { display: flex; align-items: center; gap: 7px; border: 1.5px solid var(--bcp-line); border-radius: 9px; padding: 6px 8px; font-size: 12px; font-weight: 700; }
.bcp-mr > span { flex: 1; min-width: 0; }
.bcp-mr small { display: block; font-weight: 500; }
.bcp-av { width: 22px; height: 22px; border-radius: 50%; background: var(--bcp-app2); display: grid; place-items: center; font-style: normal; font-size: 9px; font-weight: 800; flex: none; }
.bcp-pl { font-style: normal; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 999px; background: rgba(242, 98, 42, .16); color: var(--bcp-warn); white-space: nowrap; }
.bcp-pl.ok { background: rgba(26, 138, 74, .16); color: var(--bcp-ok); }
.bcp-btns { display: flex; gap: 6px; }
.bcp-btns button { flex: 1; font-weight: 700; font-size: 12px; line-height: 1.2; font-family: inherit; border-radius: 999px; padding: 9px 6px; cursor: pointer; border: 1.5px solid var(--bcp-line); background: var(--bcp-app); color: var(--bcp-ink); }
.bcp-btns button:first-child { background: var(--bcp-brand); border-color: var(--bcp-brand); color: #fff; }
.bcp-card.done .bcp-btns { opacity: .45; pointer-events: none; }

/* build update card */
.bcp-pb { height: 7px; border-radius: 7px; background: var(--bcp-line); overflow: hidden; margin: 2px 0 9px; }
.bcp-pb i { display: block; height: 100%; width: 0; background: var(--bcp-brand); border-radius: 7px; transition: width 1.2s ease; }
.bcp-card li { display: flex; align-items: center; gap: 8px; font-size: 12.5px; }
.bcp-tk { width: 15px; height: 15px; border-radius: 50%; border: 2px solid var(--bcp-line); flex: none; position: relative; transition: .3s; }
.bcp-card li.on .bcp-tk { background: var(--bcp-ok); border-color: var(--bcp-ok); }
.bcp-card li.on .bcp-tk::after { content: ""; position: absolute; left: 3.5px; top: 1px; width: 3px; height: 6px; border: solid #fff; border-width: 0 2px 2px 0; transform: rotate(45deg); }

/* mobile: text on top, phone under it, timeline becomes a row */
@media (max-width: 860px) {
  .bcp-pin { grid-template-columns: 1fr; align-content: start; gap: 12px; padding-top: clamp(84px, 13vh, 110px); }
  .bcp-txt h3 { font-size: 30px; margin: 6px 0 8px; }
  .bcp-cp { font-size: 16px; margin-bottom: 8px; }
  .bcp-gets { display: none; }
  .bcp-when { margin-bottom: 8px; }
  .bcp-tl { flex-direction: row; padding: 0; justify-content: space-between; gap: 6px; }
  .bcp-tl::before, .bcp-fill { display: none; }
  .bcp-tl button { font-size: 12px; }
  .bcp-tl button::before { display: none; }
  .bcp-tl button.on { color: var(--bcp-brand); }
  .bcp-tl-t { display: none; }
  .bcp-phone { height: min(44vh, 400px); }
}

`;

/* ------------------------------------------------------------------
   All copy lives here. Edit this object, nothing else, to change text.
   message types: a = agency text, c = client text, img = client photo,
   plan, info, prev (design preview with buttons), upd (progress update)
------------------------------------------------------------------- */
const PHASES = [
  {
    title: 'Let’s Talk',
    timing: 'Day 1 · Free',
    stop: 'Day 1',
    sep: 'Day 1',
    copy: 'Tell us how you work today.',
    gets: ['Clear plan', 'Fixed price'],
    msgs: [
      { t: 'img', x: 'Here’s a photo of our register' },
      { t: 'a', x: 'Got it. Here’s what we’ll build for you.' },
      { t: 'plan', h: 'Your plan', l: ['Orders and customers', 'Balance tracking', 'Staff logins'], f: 'Fixed price, agreed upfront' },
    ],
  },
  {
    title: 'See the Design',
    timing: 'Week 1',
    stop: 'Week 1',
    sep: 'Week 1',
    copy: 'Preview the screens before we build.',
    gets: ['Visual preview', 'Your approval'],
    msgs: [
      { t: 'a', x: 'Here’s your main screen. Take a look before we build.' },
      { t: 'prev' },
    ],
  },
  {
    title: 'We Build It',
    timing: 'Weeks 2–4',
    stop: 'Weeks 2–4',
    sep: 'Week 2',
    copy: 'We build and share weekly updates.',
    gets: ['Weekly updates', 'Tested system'],
    msgs: [
      { t: 'upd', h: 'Week 2 update', p: 40, l: ['Orders screen', 'Customer list', 'Balance tracking'] },
      { t: 'upd', h: 'Week 4 update', p: 95, l: ['Staff logins', 'Testing with your data'] },
    ],
  },
  {
    title: 'Go Live & Support',
    timing: 'After launch',
    stop: 'After launch',
    sep: 'Launch',
    copy: 'We launch, train your staff, and stay.',
    gets: ['Staff training', 'Ongoing support'],
    msgs: [
      { t: 'a', x: 'You’re live. 🎉' },
      { t: 'info', h: 'Staff training booked', s: 'Saturday, 10:00 am' },
      { t: 'c', x: 'Need help with the fees report' },
      { t: 'a', x: 'On it. Sending a short video now.' },
    ],
  },
];

const HEADER = {
  tag: 'How it works',
  title: 'You always know what’s happening',
  sub: 'No surprises. We check with you at every step.',
};

let uid = 0;
const nid = () => {
  uid += 1;
  return uid;
};

/* ---------------------------- chat pieces ---------------------------- */

function Register() {
  return (
    <div className="bcp-reg">
      <p>Sana, 3-piece suit</p>
      <p>Advance 3000</p>
      <p className="x">Delivery Friday?</p>
    </div>
  );
}

function PreviewCard({ instant, onReply }) {
  const [done, setDone] = useState(instant);
  const pick = (items) => {
    if (done) return;
    setDone(true);
    onReply(items);
  };
  return (
    <div className={`bcp-m a bcp-card${done ? ' done' : ''}`}>
      <div className="bcp-mu">
        <div className="bcp-mt">
          <b>Orders</b>
          <span className="bcp-pbt">+ New order</span>
        </div>
        <div className="bcp-mr">
          <i className="bcp-av">SM</i>
          <span>Sana Malik<small>3-piece suit</small></span>
          <em className="bcp-pl">Rs 4,500 due</em>
        </div>
        <div className="bcp-mr">
          <i className="bcp-av">RF</i>
          <span>Rida Farooq<small>Kurta set</small></span>
          <em className="bcp-pl ok">Paid</em>
        </div>
      </div>
      <div className="bcp-btns">
        <button
          type="button"
          disabled={done}
          onClick={() => pick([{ t: 'c', x: 'Approved ✓' }, { t: 'a', x: 'Great. We’re starting to build now.' }])}
        >
          Approve
        </button>
        <button
          type="button"
          disabled={done}
          onClick={() => pick([{ t: 'c', x: 'Can the balance sit at the top?' }, { t: 'a', x: 'Done. A new preview will be in this chat tomorrow.' }])}
        >
          Change something
        </button>
      </div>
    </div>
  );
}

function UpdateCard({ m, instant }) {
  const [pct, setPct] = useState(instant ? m.p : 0);
  const [ticks, setTicks] = useState(instant ? m.l.length : 0);

  useEffect(() => {
    if (instant) return undefined;
    const ids = [setTimeout(() => setPct(m.p), 80)];
    m.l.forEach((_, k) => ids.push(setTimeout(() => setTicks(k + 1), 500 + k * 600)));
    return () => ids.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bcp-m a bcp-card">
      <b>{m.h}</b>
      <div className="bcp-pb"><i style={{ width: `${pct}%` }} /></div>
      <ul>
        {m.l.map((x, k) => (
          <li key={x} className={k < ticks ? 'on' : ''}><span className="bcp-tk" />{x}</li>
        ))}
      </ul>
    </div>
  );
}

function Message({ m, instant, onReply }) {
  switch (m.t) {
    case 'a':
      return <div className="bcp-m a">{m.x}</div>;
    case 'c':
      return <div className="bcp-m c">{m.x}</div>;
    case 'img':
      return (
        <div className="bcp-m c bcp-img">
          <Register />
          <span>{m.x}</span>
        </div>
      );
    case 'plan':
      return (
        <div className="bcp-m a bcp-card">
          <b>{m.h}</b>
          <ul>{m.l.map((x) => <li key={x}>• {x}</li>)}</ul>
          <em className="bcp-fx">{m.f}</em>
        </div>
      );
    case 'info':
      return (
        <div className="bcp-m a bcp-card">
          <b>{m.h}</b>
          <small>{m.s}</small>
        </div>
      );
    case 'upd':
      return <UpdateCard m={m} instant={instant} />;
    case 'prev':
      return <PreviewCard instant={instant} onReply={onReply} />;
    default:
      return null;
  }
}

/* ------------------------------ section ------------------------------ */

export default function ProcessTimeline() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const threadRef = useRef(null);
  const timers = useRef([]);

  const [active, setActive] = useState(-1); // -1 = section not reached yet
  const [txtIdx, setTxtIdx] = useState(0);
  const [swap, setSwap] = useState(false);
  const [thread, setThread] = useState([]);
  const [typing, setTyping] = useState(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  /* play a list of messages one after another, with typing dots */
  const play = useCallback((items) => {
    let at = 0;
    items.forEach((m) => {
      const agency = m.t !== 'c' && m.t !== 'img';
      if (agency) timers.current.push(setTimeout(() => setTyping(true), at));
      at += agency ? 850 : 450;
      timers.current.push(
        setTimeout(() => {
          setTyping(false);
          setThread((t) => [...t, { id: nid(), m, instant: false }]);
        }, at),
      );
    });
  }, []);

  /* scroll progress -> active phase + timeline fill (page scroll stays native) */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let ticking = false;

    const calc = () => {
      ticking = false;
      const r = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      const pr = Math.min(1, Math.max(0, -r.top / total));
      if (fillRef.current) fillRef.current.style.setProperty('--p', pr);
      setActive((prev) => {
        if (prev < 0) {
          if (r.top >= window.innerHeight * 0.5) return -1;
          return Math.min(PHASES.length - 1, Math.floor(pr * PHASES.length));
        }
        const n = Math.min(PHASES.length - 1, Math.floor(pr * PHASES.length));
        return n === prev ? prev : n;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(calc);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    calc();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  /* when the phase changes: rebuild earlier phases instantly, play the new one */
  useEffect(() => {
    if (active < 0) return undefined;
    clearTimers();
    setTyping(false);
    const base = [];
    for (let k = 0; k < active; k += 1) {
      base.push({ id: nid(), sep: PHASES[k].sep });
      PHASES[k].msgs.forEach((m) => base.push({ id: nid(), m, instant: true }));
    }
    base.push({ id: nid(), sep: PHASES[active].sep });
    setThread(base);
    play(PHASES[active].msgs);
    return clearTimers;
  }, [active, play]);

  /* fade the text block when the phase changes */
  useEffect(() => {
    if (active < 0) return undefined;
    setSwap(true);
    const id = setTimeout(() => {
      setTxtIdx(active);
      setSwap(false);
    }, 200);
    return () => clearTimeout(id);
  }, [active]);

  /* keep the newest message in view inside the phone */
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [thread, typing]);

  const goTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const r = track.getBoundingClientRect();
    const total = track.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: window.scrollY + r.top + ((i + 0.5) / PHASES.length) * total,
      behavior: 'smooth',
    });
  };

  const T = PHASES[txtIdx];
  const on = Math.max(active, 0);

  return (
    <section id="bc-process" className="bcp" data-section="process">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div id="process" aria-hidden="true" />
      <div className="bcp-hd">
        <span className="bcp-eyebrow">{HEADER.tag}</span>
        <h2>{HEADER.title}</h2>
        <p>{HEADER.sub}</p>
      </div>

      <div className="bcp-track" ref={trackRef}>
        <div className="bcp-pin">
          <div>
            <div className={`bcp-txt${swap ? ' sw' : ''}`} aria-live="polite">
              <span className="bcp-ph">Phase 0{txtIdx + 1}</span>
              <h3>{T.title}</h3>
              <span className="bcp-when">{T.timing}</span>
              <p className="bcp-cp">{T.copy}</p>
              <ul className="bcp-gets">
                {T.gets.map((g) => <li key={g}>{g}</li>)}
              </ul>
            </div>

            <div className="bcp-tl" role="group" aria-label="Project phases">
              <i className="bcp-fill" ref={fillRef} />
              {PHASES.map((p, i) => (
                <button
                  type="button"
                  key={p.title}
                  className={i === on ? 'on' : i < on ? 'past' : ''}
                  onClick={() => goTo(i)}
                >
                  {p.stop}<span className="bcp-tl-t"> · {p.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bcp-phone" role="group" aria-label="A chat showing what the client receives at each phase">
            <div className="bcp-scr">
              <div className="bcp-chh">
                <i>BC</i>
                <div><b>BossCode · Your project</b><small>online</small></div>
              </div>
              <div className="bcp-thread" ref={threadRef}>
                {thread.map((it) =>
                  it.sep ? (
                    <div key={it.id} className="bcp-sep">{it.sep}</div>
                  ) : (
                    <Message key={it.id} m={it.m} instant={it.instant} onReply={play} />
                  ),
                )}
                {typing && (
                  <div className="bcp-m a bcp-typing" aria-label="Typing">
                    <span /><span /><span />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
