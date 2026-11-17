'use client';
import { useState } from 'react';
import Link from 'next/link';

const css = `
.bc-root{
  --bg:#ffffff;--ink:#000921;--mut:#5b647d;--line:#e4e8f2;--panel:#f5f7fc;
  --blue:#0055FF;--soft:#e8f0ff;--ok:#12b76a;--warn:#f5622d;--cyan:#00D2FF;
  background:var(--bg);color:var(--ink);
  font-family:var(--font-body, "DM Sans", system-ui, sans-serif);
  border-top:1px solid rgba(0,9,33,0.06);
}
.bc-root,.bc-root *,.bc-root *:before,.bc-root *:after{box-sizing:border-box}
.bc-wrap{max-width:1200px;margin:0 auto;padding:88px 24px 96px}
.bc-eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;background:rgba(0,9,33,0.04);border:1px solid rgba(0,9,33,0.08);font-family:var(--font-mono, monospace);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink);margin-bottom:20px}
.bc-eyebrow i{width:6px;height:6px;border-radius:50%;background:var(--blue);display:block}
.bc-h1{font-family:var(--font-display, "Space Grotesk", system-ui, sans-serif);font-size:clamp(34px,5vw,58px);font-weight:800;line-height:1.04;letter-spacing:-.04em;margin:0 0 14px;max-width:780px}
.bc-sub{color:var(--mut);font-size:17px;line-height:1.65;margin:0 0 44px;max-width:600px}
.bc-hero{position:relative;padding:0 0 0 74px}

.bc-paper{position:absolute;left:0;top:88px;width:148px;height:186px;background:#fffdf4;border:1px solid #e9e2c8;border-radius:10px;transform:rotate(-7deg);padding:16px 14px;box-shadow:0 12px 26px rgba(0,9,33,.1);z-index:2}
.bc-paper i{display:block;height:3px;border-radius:3px;background:#b7b19a;margin:0 0 14px;opacity:.7}
.bc-tag{position:absolute;left:6px;top:56px;font-size:12px;font-weight:700;background:var(--ink);color:#fff;padding:6px 12px;border-radius:99px;white-space:nowrap;z-index:3}
.bc-arrow{position:absolute;left:102px;top:188px;z-index:3}

.bc-win{background:var(--panel);border:1px solid var(--line);border-radius:22px;overflow:hidden;box-shadow:0 32px 64px -22px rgba(0,9,33,.2)}
.bc-top{display:flex;gap:7px;align-items:center;padding:12px 18px;border-bottom:1px solid var(--line);background:#fff}
.bc-top b{width:10px;height:10px;border-radius:50%;background:var(--line)}
.bc-top span{margin-left:10px;font-size:12px;color:var(--mut);font-family:var(--font-mono, monospace)}
.bc-top-badge{margin-left:auto !important;font-size:11px;font-weight:700;color:#027a48 !important;background:rgba(18,183,106,.12);padding:3px 10px;border-radius:99px}
.bc-body{display:grid;grid-template-columns:215px 1fr;min-height:370px}
.bc-side{padding:14px 12px;border-right:1px solid var(--line);background:#fff;display:flex;flex-direction:column;gap:4px}
.bc-side button{width:100%;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;font-size:14px;color:var(--mut);font-weight:600;text-align:left;border:none;background:transparent;cursor:pointer;transition:background .18s ease,color .18s ease}
.bc-side button:hover{background:#f3f6fc;color:var(--ink)}
.bc-side button.bc-on{background:var(--soft);color:var(--blue)}
.bc-ico{width:19px;height:19px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;flex:none}

.bc-main{padding:22px;display:grid;gap:16px;align-content:start}
.bc-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.bc-k{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px}
.bc-k small{color:var(--mut);font-size:12.5px;display:block}
.bc-k strong{display:block;font-family:var(--font-display, sans-serif);font-size:23px;letter-spacing:-.02em;margin:3px 0 2px;color:var(--ink)}
.bc-k em{font-style:normal;font-size:12px;font-weight:700}
.bc-up{color:var(--ok)}.bc-dn{color:var(--warn)}.bc-bl{color:var(--blue)}
.bc-two{display:grid;grid-template-columns:1.15fr 1fr;gap:16px}
.bc-box{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px}
.bc-box h4{margin:0 0 12px;font-size:13px;color:var(--mut);font-weight:600;display:flex;align-items:center;justify-content:space-between}
.bc-bars{display:flex;align-items:flex-end;gap:10px;height:132px;padding-top:10px}
.bc-bars i{flex:1;background:var(--soft);border-radius:7px 7px 3px 3px;position:relative;display:block}
.bc-bars i:after{content:"";position:absolute;left:0;right:0;bottom:0;height:62%;background:var(--blue);border-radius:7px 7px 3px 3px}
.bc-bars i:last-child:after{height:88%}
.bc-ord{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line);font-size:13.5px}
.bc-ord:last-child{border:0;padding-bottom:0}
.bc-ord u{width:24px;height:24px;border-radius:50%;background:var(--soft);color:var(--blue);flex:none;text-decoration:none;display:grid;place-items:center;font-size:11px;font-weight:700}
.bc-ord span{flex:1;color:var(--ink);font-weight:500}
.bc-ord small{display:block;font-size:11.5px;color:var(--mut);font-weight:400}
.bc-pill{font-size:11px;font-weight:700;padding:3px 10px;border-radius:99px;white-space:nowrap}
.bc-p1{background:rgba(18,183,106,.14);color:#027a48}
.bc-p2{background:var(--soft);color:var(--blue)}
.bc-p3{background:rgba(245,98,45,.14);color:#c43e10}

.bc-float{position:absolute;right:-10px;bottom:-24px;background:var(--ink);color:#fff;border-radius:16px;padding:14px 18px;font-size:13px;z-index:3;box-shadow:0 14px 30px rgba(0,9,33,.28)}
.bc-float b{display:block;font-size:18px;color:var(--cyan)}

.bc-mods{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:64px}
.bc-mod-card{padding:18px 16px;border-radius:16px;border:1px solid var(--line);background:#fff;text-align:left;display:flex;align-items:flex-start;gap:13px;cursor:pointer;transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease}
.bc-mod-card:hover{border-color:var(--blue);box-shadow:0 14px 30px -18px rgba(0,9,33,.2);transform:translateY(-2px)}
.bc-mod-card.is-selected{border-color:var(--blue);background:#f7faff}
.bc-mod-card span{display:grid;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--soft);color:var(--blue);flex:none}
.bc-mod-card .bc-ico{width:20px;height:20px}
.bc-mod-card strong{display:block;font-size:14.5px;font-weight:700;color:var(--ink);margin-bottom:2px}
.bc-mod-card small{display:block;color:var(--mut);font-size:12.5px;line-height:1.4}

.bc-cta-row{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:40px}
.bc-cta{display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:#fff;padding:14px 26px;border-radius:99px;text-decoration:none;font-weight:700;font-size:14px;transition:background .2s ease,transform .2s ease}
.bc-cta:hover{background:var(--blue);transform:translateY(-1px)}
.bc-cta-wa{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--ink);border:1px solid rgba(0,9,33,0.18);padding:14px 22px;border-radius:99px;text-decoration:none;font-weight:700;font-size:14px;transition:border-color .2s ease,background .2s ease}
.bc-cta-wa:hover{border-color:var(--blue);background:#f7faff}

@media (max-width:960px){
  .bc-hero{padding-left:0}
  .bc-paper,.bc-tag,.bc-arrow{display:none}
  .bc-body{grid-template-columns:1fr}
  .bc-side{flex-direction:row;overflow-x:auto;border-right:0;border-bottom:1px solid var(--line);padding:10px 12px}
  .bc-side button{width:auto;white-space:nowrap}
  .bc-two{grid-template-columns:1fr}
  .bc-mods{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:640px){
  .bc-wrap{padding:56px 16px}
  .bc-kpis{grid-template-columns:1fr}
  .bc-mods{grid-template-columns:1fr}
  .bc-float{position:static;margin-top:14px;display:inline-block}
  .bc-cta-row{flex-direction:column;align-items:stretch}
  .bc-cta,.bc-cta-wa{justify-content:center}
}
`;

const PATHS = {
    home: <path d="M3 11l9-8 9 8v10H3z" />,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    truck: (<><rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>),
    alert: (<><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>),
    share: (<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></>),
    staff: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6" /></>),
    bill: (<><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" /></>),
    box: (<><path d="M3 8l9-5 9 5v8l-9 5-9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>),
    chart: <path d="M3 20h18M5 15l4-5 4 3 6-8" />,
    doc: (<><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></>),
};

function Icon({ name }) {
    return (
        <svg className="bc-ico" viewBox="0 0 24 24" aria-hidden="true">
            {PATHS[name]}
        </svg>
    );
}

const VIEWS = {
    dashboard: {
        icon: "home",
        label: "Overview",
        kpis: [
            { label: "Sales today", value: "Rs 84,500", note: "+12% vs yesterday", tone: "bc-up" },
            { label: "Items in stock", value: "1,284", note: "6 running low", tone: "bc-dn" },
            { label: "Dues to collect", value: "Rs 32,000", note: "9 customers", tone: "bc-bl" },
        ],
        leftTitle: "Sales this week",
        bars: [45, 62, 50, 78, 66, 90, 100],
        rightTitle: "Latest orders",
        rows: [
            { badge: "1", title: "Order #1042", sub: "Al-Noor Store · Rs 6,400", status: "Done", cls: "bc-p1" },
            { badge: "2", title: "Order #1043", sub: "Bilal Hardware · Rs 14,200", status: "Packing", cls: "bc-p2" },
            { badge: "3", title: "Order #1044", sub: "Sana Boutique · Rs 4,800", status: "Waiting", cls: "bc-p3" },
        ],
    },
    automation: {
        icon: "zap",
        label: "Automation",
        kpis: [
            { label: "Auto-replies today", value: "148", note: "Instant WhatsApp", tone: "bc-up" },
            { label: "Reminders sent", value: "34 bills", note: "0 manual typing", tone: "bc-bl" },
            { label: "Time saved today", value: "3.5 hrs", note: "Staff free for sales", tone: "bc-up" },
        ],
        leftTitle: "Active auto-rules",
        rowsLeft: [
            { badge: "⚡", title: "Bill Saved → Send WhatsApp PDF", sub: "Runs automatically on every sale", status: "Active", cls: "bc-p1" },
            { badge: "⚡", title: "Stock < 5 → Alert Owner", sub: "Sends reorder list at 8 PM", status: "Active", cls: "bc-p1" },
            { badge: "⚡", title: "Due > 7 Days → Polite Reminder", sub: "Auto follow-up with Pay link", status: "Active", cls: "bc-p2" },
        ],
        rightTitle: "Recent auto-actions",
        rows: [
            { badge: "✓", title: "Invoice #884 sent to Hamza", sub: "Delivered on WhatsApp · 11:20 AM", status: "Sent", cls: "bc-p1" },
            { badge: "✓", title: "Low-stock alert: Cooking Oil 5L", sub: "Only 3 left in Shelf A", status: "Alerted", cls: "bc-p3" },
            { badge: "✓", title: "Payment thank-you to Tariq", sub: "Rs 18,000 received", status: "Done", cls: "bc-p1" },
        ],
    },
    tracking: {
        icon: "truck",
        label: "Tracking",
        kpis: [
            { label: "Out for delivery", value: "19 parcels", note: "4 riders active", tone: "bc-bl" },
            { label: "Delivered today", value: "42", note: "96% on time", tone: "bc-up" },
            { label: "Delayed / stuck", value: "1 parcel", note: "Flagged to fix", tone: "bc-dn" },
        ],
        leftTitle: "Live order pipeline",
        rowsLeft: [
            { badge: "→", title: "Confirmed & Packed", sub: "11 orders ready for rider pickup", status: "11", cls: "bc-p2" },
            { badge: "→", title: "On the Road", sub: "19 parcels with Karachi riders", status: "19", cls: "bc-p1" },
            { badge: "!", title: "Needs Call Confirmation", sub: "1 COD address incomplete", status: "1", cls: "bc-p3" },
        ],
        rightTitle: "Rider & parcel status",
        rows: [
            { badge: "R1", title: "#1042 · Gulshan Block 13", sub: "Rider: Usman · COD Rs 4,500", status: "Delivered", cls: "bc-p1" },
            { badge: "R2", title: "#1043 · Clifton Block 5", sub: "Rider: Kamran · ETA 20 min", status: "On Way", cls: "bc-p2" },
            { badge: "R3", title: "#1044 · Saddar Market", sub: "Customer phone switched off", status: "Hold", cls: "bc-p3" },
        ],
    },
    clash: {
        icon: "alert",
        label: "Clash Finder",
        kpis: [
            { label: "Cash mismatch caught", value: "Rs 4,200", note: "Counter 2 shift", tone: "bc-dn" },
            { label: "Duplicate bills blocked", value: "2 entries", note: "Saved double loss", tone: "bc-up" },
            { label: "Overdue udhaar (>30d)", value: "Rs 48,000", note: "3 accounts flagged", tone: "bc-dn" },
        ],
        leftTitle: "Business leaks & clashes found",
        rowsLeft: [
            { badge: "!", title: "Counter Cash vs Bill Total", sub: "Evening shift short by Rs 4,200", status: "Flagged", cls: "bc-p3" },
            { badge: "!", title: "Supplier Rate Jump (+12%)", sub: "New purchase bill higher than last", status: "Review", cls: "bc-p3" },
            { badge: "✓", title: "Duplicate Invoice #881", sub: "Blocked before stock deducted twice", status: "Fixed", cls: "bc-p1" },
        ],
        rightTitle: "Daily audit checks",
        rows: [
            { badge: "1", title: "Stock vs Sales Match", sub: "1,284 items verified", status: "Clean", cls: "bc-p1" },
            { badge: "2", title: "Discount Limit Guard", sub: "1 bill >10% needs owner OK", status: "Pending", cls: "bc-p2" },
            { badge: "3", title: "Dead Stock (60+ days)", sub: "Rs 21,500 tied in slow items", status: "Action", cls: "bc-p3" },
        ],
    },
    distribution: {
        icon: "share",
        label: "Distribution",
        kpis: [
            { label: "Active dealers", value: "18", note: "Karachi & Hyderabad", tone: "bc-bl" },
            { label: "Dispatched today", value: "310 cartons", note: "3 vans loaded", tone: "bc-up" },
            { label: "Branch stock sync", value: "100%", note: "Live across 3 shops", tone: "bc-up" },
        ],
        leftTitle: "Branch & warehouse stock",
        rowsLeft: [
            { badge: "B1", title: "Main Godown (SITE)", sub: "840 cartons · Ready to dispatch", status: "Healthy", cls: "bc-p1" },
            { badge: "B2", title: "Saddar Wholesale Shop", sub: "190 cartons · Restock needed", status: "Low", cls: "bc-p3" },
            { badge: "B3", title: "Gulshan Retail Counter", sub: "254 cartons · Synced live", status: "Synced", cls: "bc-p2" },
        ],
        rightTitle: "Today's dealer dispatches",
        rows: [
            { badge: "D1", title: "Tariq Distributors", sub: "80 cartons · Rs 125,000", status: "Cleared", cls: "bc-p1" },
            { badge: "D2", title: "Al-Madina Mart", sub: "45 cartons · 15-day credit", status: "In Van", cls: "bc-p2" },
            { badge: "D3", title: "Hyderabad Hub", sub: "120 cartons · Bilty #442", status: "Dispatched", cls: "bc-p1" },
        ],
    },
    staff: {
        icon: "staff",
        label: "Management",
        kpis: [
            { label: "Staff active today", value: "8 / 9", note: "1 on leave", tone: "bc-bl" },
            { label: "Tasks completed", value: "27 / 31", note: "87% on schedule", tone: "bc-up" },
            { label: "Owner approvals", value: "2 waiting", note: "1-tap approve", tone: "bc-dn" },
        ],
        leftTitle: "Staff performance today",
        rowsLeft: [
            { badge: "B", title: "Bilal · Counter Cashier", sub: "48 bills made · 0 cash errors", status: "Top", cls: "bc-p1" },
            { badge: "S", title: "Sana · Order Packing", sub: "19 parcels packed & labeled", status: "Active", cls: "bc-p2" },
            { badge: "U", title: "Usman · Delivery Rider", sub: "12 / 14 drops completed", status: "On Route", cls: "bc-p2" },
        ],
        rightTitle: "Role & permission guard",
        rows: [
            { badge: "🔒", title: "Hide Cost & Profit Margin", sub: "Cashier sees selling price only", status: "Locked", cls: "bc-p1" },
            { badge: "🔒", title: "Delete Bill Protection", sub: "Needs owner PIN on WhatsApp", status: "Active", cls: "bc-p1" },
            { badge: "!", title: "2 Return Requests", sub: "Waiting for your approval", status: "Review", cls: "bc-p3" },
        ],
    },
};

const SIDEBAR_KEYS = ["dashboard", "automation", "tracking", "clash", "distribution", "staff"];

const modules = [
    { icon: "doc", title: "Digital Records", sub: "Registers, bills, cloud backup", view: "dashboard" },
    { icon: "zap", title: "WhatsApp Automation", sub: "Auto bills, replies & alerts", view: "automation" },
    { icon: "truck", title: "Order & Rider Tracking", sub: "Counter to doorstep status", view: "tracking" },
    { icon: "alert", title: "Clash & Leak Finder", sub: "Catch cash gaps & double bills", view: "clash" },
    { icon: "share", title: "Distribution & Branches", sub: "Dealers, vans & multi-shop sync", view: "distribution" },
    { icon: "staff", title: "Staff & Task Control", sub: "Roles, shifts & owner PINs", view: "staff" },
    { icon: "box", title: "Stock & Reorder Alerts", sub: "Low-item & slow-stock warnings", view: "dashboard" },
    { icon: "chart", title: "Daily Profit Reports", sub: "Clear Rs margins in 1 click", view: "dashboard" },
];

const paperLines = ["70%", "100%", "85%", "100%", "55%", "90%", "65%"];

export default function WhatWeDo() {
    const [activeView, setActiveView] = useState("dashboard");
    const view = VIEWS[activeView];

    return (
        <section className="bc-root" id="what-we-do">
            <style dangerouslySetInnerHTML={{ __html: css }} />
            <div className="bc-wrap">
                <div className="bc-eyebrow">
                    <i />
                    <span>All-In-One Business OS</span>
                </div>
                <h2 className="bc-h1">We move your work from paper to digital</h2>
                <p className="bc-sub">
                    Tap any tab inside the screen below to see how BossCode automates billing,
                    tracks deliveries, catches cash clashes, and manages distribution.
                </p>

                <div className="bc-hero">
                    <div className="bc-paper" aria-hidden="true">
                        {paperLines.map((w, i) => (
                            <i key={i} style={{ width: w }} />
                        ))}
                    </div>
                    <span className="bc-tag">Paper registers</span>
                    <svg className="bc-arrow" width="90" height="40" viewBox="0 0 90 40" fill="none" stroke="var(--blue)" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                        <path d="M4 20h72M62 8l14 12-14 12" />
                    </svg>

                    <div className="bc-win">
                        <div className="bc-top">
                            <b /><b /><b />
                            <span>yourbusiness.bosscode.app</span>
                            <span className="bc-top-badge">Live Sync · {view.label}</span>
                        </div>
                        <div className="bc-body">
                            <div className="bc-side" role="tablist" aria-label="System modules">
                                {SIDEBAR_KEYS.map((key) => {
                                    const s = VIEWS[key];
                                    return (
                                        <button
                                            key={key}
                                            type="button"
                                            role="tab"
                                            aria-selected={activeView === key}
                                            className={activeView === key ? "bc-on" : undefined}
                                            onClick={() => setActiveView(key)}
                                        >
                                            <Icon name={s.icon} />
                                            {s.label}
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="bc-main" role="tabpanel">
                                <div className="bc-kpis">
                                    {view.kpis.map((k) => (
                                        <div className="bc-k" key={k.label}>
                                            <small>{k.label}</small>
                                            <strong>{k.value}</strong>
                                            <em className={k.tone}>{k.note}</em>
                                        </div>
                                    ))}
                                </div>
                                <div className="bc-two">
                                    <div className="bc-box">
                                        <h4>{view.leftTitle}</h4>
                                        {view.bars ? (
                                            <div className="bc-bars">
                                                {view.bars.map((h, i) => (
                                                    <i key={i} style={{ height: h + "%" }} />
                                                ))}
                                            </div>
                                        ) : (
                                            view.rowsLeft.map((r) => (
                                                <div className="bc-ord" key={r.title}>
                                                    <u>{r.badge}</u>
                                                    <span>
                                                        {r.title}
                                                        <small>{r.sub}</small>
                                                    </span>
                                                    <b className={"bc-pill " + r.cls}>{r.status}</b>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className="bc-box">
                                        <h4>{view.rightTitle}</h4>
                                        {view.rows.map((o) => (
                                            <div className="bc-ord" key={o.title}>
                                                <u>{o.badge}</u>
                                                <span>
                                                    {o.title}
                                                    <small>{o.sub}</small>
                                                </span>
                                                <b className={"bc-pill " + o.cls}>{o.status}</b>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bc-float">
                        Every record, backed up<b>and clash-checked</b>
                    </div>
                </div>

                <div className="bc-mods">
                    {modules.map((m) => (
                        <button
                            type="button"
                            key={m.title}
                            className={`bc-mod-card${activeView === m.view ? " is-selected" : ""}`}
                            onClick={() => setActiveView(m.view)}
                        >
                            <span><Icon name={m.icon} /></span>
                            <div>
                                <strong>{m.title}</strong>
                                <small>{m.sub}</small>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="bc-cta-row">
                    <Link className="bc-cta" href="/contact">Book a free system check-up →</Link>
                    <a
                        className="bc-cta-wa"
                        href="https://wa.me/923197542768"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
