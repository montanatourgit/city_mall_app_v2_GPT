import { useMemo, useState } from "react";

const stores = [
  { id: "zara", name: "Zara", type: "Fashion", floor: "G Floor", hours: "10:00 - 22:00", offer: "30% summer edit", color: "#ff5004" },
  { id: "lcw", name: "LC Waikiki", type: "Family", floor: "1 Floor", hours: "10:00 - 22:00", offer: "Kids bundle deals", color: "#5c34f6" },
  { id: "adidas", name: "Adidas", type: "Sport", floor: "1 Floor", hours: "10:00 - 22:00", offer: "Members get 15%", color: "#2d3335" },
  { id: "sushi", name: "Sushi Lab", type: "Dining", floor: "Food Court", hours: "11:00 - 23:00", offer: "Lunch set 89,000 so'm", color: "#00bfff" },
  { id: "starbucks", name: "Starbucks", type: "Coffee", floor: "G Floor", hours: "08:30 - 23:00", offer: "2x points today", color: "#841111" },
  { id: "cinema", name: "Premier Cinema", type: "Entertainment", floor: "3 Floor", hours: "10:00 - 01:00", offer: "Redeem 1,900 pts", color: "#4e1ce9" },
];

const products = [
  { name: "Linen blazer", store: "Zara", price: "899,000 so'm", match: "98%", color: "#e5deff" },
  { name: "Ultraboost Light", store: "Adidas", price: "1,790,000 so'm", match: "94%", color: "#dbeafe" },
  { name: "Cotton cargo pants", store: "LC Waikiki", price: "349,000 so'm", match: "91%", color: "#fde68a" },
  { name: "Ceramic tumbler", store: "Starbucks", price: "189,000 so'm", match: "88%", color: "#d1fae5" },
];

const rewards = [
  { title: "Free parking", points: "600 pts", detail: "Up to 3 hours", tone: "#00bfff" },
  { title: "Food court voucher", points: "1,200 pts", detail: "100,000 so'm", tone: "#ff5004" },
  { title: "Cinema ticket", points: "1,900 pts", detail: "Premier Cinema", tone: "#5c34f6" },
  { title: "Store discount", points: "2,500 pts", detail: "10% mall-wide", tone: "#841111" },
];

const notifications = [
  { title: "Receipt approved", detail: "Zara purchase added 899 points.", time: "2 min" },
  { title: "Parking perk unlocked", detail: "Redeem before 23:00 today.", time: "1 hr" },
  { title: "Sushi Lab promo", detail: "Lunch set is now 89,000 so'm.", time: "Today" },
];

const tabs = [
  { id: "home", label: "Home", icon: "home" },
  { id: "search", label: "Search", icon: "search" },
  { id: "loyalty", label: "Loyalty", icon: "ticket" },
  { id: "map", label: "Map", icon: "map" },
  { id: "profile", label: "Profile", icon: "user" },
];

const allScreens = [
  "login",
  "phone",
  "otp",
  "home",
  "search",
  "category",
  "store",
  "product",
  "offer",
  "map",
  "parking",
  "loyalty",
  "scan",
  "receipt",
  "rewards",
  "redeem",
  "tier",
  "ai",
  "profile",
  "favorites",
  "notifications",
  "empty",
];

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    home: <><path d="M3.5 10.5 12 3l8.5 7.5V20a1 1 0 0 1-1 1h-5v-6h-5v6h-5a1 1 0 0 1-1-1v-9.5Z" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
    ticket: <><path d="M4 8a2 2 0 0 0 0 4v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a2 2 0 0 0 0-4V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2Z" /><path d="M9 7.5v9" /></>,
    map: <><path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z" /><path d="M9 4v14M15 6v14" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1.3-4 4-6 8-6s6.7 2 8 6" /></>,
    phone: <><rect x="6.5" y="3.5" width="11" height="17" rx="2" /><path d="M10 6h4M11 18h2" /></>,
    telegram: <><path d="M21.5 4.5 3.7 11c-1 .4-.9 1.8.2 2.1l4.1 1.1 1.6 5c.3 1 1.7 1.2 2.3.4l2.2-3.1 4.5 3.1c.9.6 2.1.1 2.3-.9l2.2-12.8c.2-1-.7-1.8-1.6-1.4Z" /><path d="m8.1 14.2 9.7-6.3-7.2 8.7" /></>,
    camera: <><rect x="3" y="6.5" width="18" height="13" rx="3" /><circle cx="12" cy="13" r="3.5" /><path d="m8.5 6.5 1-2h5l1 2" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-2 7-2 7h16s-2 0-2-7" /><path d="M10 20a2.2 2.2 0 0 0 4 0" /></>,
    heart: <><path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1Z" /></>,
    car: <><path d="M5 12 7 6h10l2 6" /><path d="M5 12h14v6H5z" /><path d="M7 18v2M17 18v2M7.5 15h.1M16.5 15h.1" /></>,
    spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" /></>,
    scan: <><path d="M7 3H5a2 2 0 0 0-2 2v2M17 3h2a2 2 0 0 1 2 2v2M7 21H5a2 2 0 0 1-2-2v-2M17 21h2a2 2 0 0 0 2-2v-2" /><path d="M7 12h10" /></>,
    chevron: <><path d="m9 18 6-6-6-6" /></>,
    back: <><path d="m15 18-6-6 6-6" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  };

  return <svg {...common}>{paths[name] || paths.spark}</svg>;
}

function GlobalStyles() {
  return (
    <style>{`
      * { box-sizing: border-box; }
      body { margin: 0; background: #e5e5ea; }
      button, input { font: inherit; }
      .stage {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        font-family: Inter, "Plus Jakarta Sans", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #2d3335;
        background:
          radial-gradient(circle at 50% 18%, rgba(255,255,255,.85), transparent 30%),
          linear-gradient(145deg, #d9d5d1 0%, #f8f9fa 52%, #cfc8c1 100%);
      }
      .phone {
        width: 390px;
        height: 844px;
        position: relative;
        overflow: hidden;
        border-radius: 44px;
        background: #ffffff;
        box-shadow: 0 26px 90px rgba(32,14,50,.25), 0 0 0 8px #18181b, 0 0 0 10px rgba(255,255,255,.28);
      }
      .notch {
        position: absolute;
        z-index: 50;
        top: 0;
        left: 50%;
        width: 124px;
        height: 31px;
        transform: translateX(-50%);
        border-radius: 0 0 18px 18px;
        background: #18181b;
      }
      .status {
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px 24px 0;
        font-size: 12px;
        font-weight: 750;
      }
      .screen {
        height: calc(100% - 44px);
        overflow: hidden;
        position: relative;
      }
      .scroll {
        height: 100%;
        overflow-y: auto;
        scrollbar-width: none;
        padding: 0 18px 104px;
      }
      .scroll::-webkit-scrollbar { display: none; }
      .auth-screen {
        height: 100%;
        padding: 0 20px 30px;
        display: flex;
        flex-direction: column;
        gap: 18px;
      }
      .glass {
        background: linear-gradient(135deg, rgba(255,255,255,.82), rgba(255,255,255,.26)), rgba(242,242,242,.72);
        border: 1px solid rgba(255,255,255,.76);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.86), inset 0 -18px 42px rgba(45,51,53,.05), 0 10px 28px rgba(32,14,50,.10);
        backdrop-filter: blur(24px) saturate(1.35);
        -webkit-backdrop-filter: blur(24px) saturate(1.35);
      }
      .glass-dark {
        background:
          linear-gradient(145deg, rgba(38,38,38,.93), rgba(38,38,38,.76)),
          linear-gradient(135deg, rgba(250,250,250,.09), rgba(255,255,255,0));
        border: 1px solid rgba(255,255,255,.26);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.28), inset 0 -20px 46px rgba(0,0,0,.2), 0 4px 4px rgba(0,0,0,.25);
        color: #fff;
        backdrop-filter: blur(40px) saturate(1.45);
        -webkit-backdrop-filter: blur(40px) saturate(1.45);
      }
      .tap {
        border: 0;
        cursor: pointer;
        transition: transform .14s ease, box-shadow .18s ease, background .18s ease;
      }
      .tap:active { transform: scale(.97); }
      .topbar {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin: 0 -18px 16px;
        padding: 0 24px;
        background: rgba(248,250,252,.8);
        border-bottom: 1px solid rgba(255,255,255,.5);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
      }
      .brand {
        text-align: center;
        font-size: 18px;
        font-weight: 650;
        color: #59618c;
        letter-spacing: 2.5px;
        line-height: 1;
        text-transform: uppercase;
      }
      .icon-button, .pill {
        min-width: 38px;
        height: 38px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        color: #59618c;
        padding: 0 12px;
        font-size: 12px;
        font-weight: 800;
      }
      h1, h2, h3, p { margin: 0; }
      h1 { color: #2d3335; font-size: 30px; line-height: 1.05; font-weight: 820; letter-spacing: 0; }
      h2 { color: #2d3335; font-size: 24px; line-height: 1.12; font-weight: 820; letter-spacing: -0.6px; }
      h3 { color: #2d3335; font-size: 17px; line-height: 1.2; font-weight: 800; letter-spacing: 0; }
      p { color: #5a6062; font-size: 13px; line-height: 1.45; }
      .section { display: grid; gap: 12px; margin-top: 18px; }
      .row { display: flex; align-items: center; gap: 12px; }
      .between { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      .stack { display: grid; gap: 12px; }
      .primary {
        width: 100%;
        min-height: 54px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #fff;
        background: linear-gradient(135deg, #2d3335, #200e32);
        box-shadow: 0 14px 28px rgba(32,14,50,.22);
        font-size: 15px;
        font-weight: 820;
      }
      .secondary {
        width: 100%;
        min-height: 52px;
        border-radius: 999px;
        color: #2d3335;
        font-size: 15px;
        font-weight: 820;
      }
      .field {
        height: 58px;
        border-radius: 999px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .field input {
        width: 100%;
        border: 0;
        outline: 0;
        background: transparent;
        color: #2d3335;
        font-size: 17px;
        font-weight: 760;
      }
      .login-mark {
        height: 178px;
        border-radius: 28px;
        display: grid;
        place-items: center;
        position: relative;
        overflow: hidden;
      }
      .login-mark::before {
        content: "";
        position: absolute;
        inset: 16px;
        border-radius: 24px;
        background:
          linear-gradient(135deg, rgba(255,80,4,.28), rgba(92,52,246,.18)),
          rgba(255,255,255,.18);
        filter: blur(.2px);
      }
      .login-lock {
        width: 86px;
        height: 86px;
        border-radius: 30px;
        display: grid;
        place-items: center;
        color: #fff;
        background: linear-gradient(145deg, #2d3335, #59618c);
        position: relative;
        z-index: 1;
      }
      .mini-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
      .mini {
        min-height: 86px;
        border-radius: 18px;
        padding: 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .mini svg { color: #5c34f6; }
      .mini span { color: #2d3335; font-size: 12px; font-weight: 820; line-height: 1.2; }
      .hero-offer {
        min-height: 445px;
        border-radius: 24px;
        padding: 20px;
        position: relative;
        overflow: hidden;
      }
      .hero-offer::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 82% 22%, rgba(255,80,4,.55), transparent 28%),
          radial-gradient(circle at 22% 78%, rgba(0,191,255,.34), transparent 30%),
          linear-gradient(135deg, rgba(250,250,250,.08), rgba(255,255,255,0));
      }
      .offer-content { position: relative; z-index: 1; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
      .offer-title { color: #fff; font-size: 32px; line-height: 1; font-weight: 860; text-transform: uppercase; }
      .discount { color: #fff; font-size: 32px; line-height: 1; font-style: italic; font-weight: 860; text-align: right; }
      .chip {
        min-height: 34px;
        border-radius: 999px;
        padding: 8px 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        color: #59618c;
        font-size: 12px;
        font-weight: 780;
        white-space: nowrap;
      }
      .card {
        border-radius: 18px;
        padding: 15px;
      }
      .store-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .store-card { min-height: 172px; border-radius: 16px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; }
      .store-card::after {
        content: "";
        position: absolute;
        right: -28px;
        bottom: -34px;
        width: 96px;
        height: 96px;
        border-radius: 34px;
        background: var(--tone);
        opacity: .18;
        transform: rotate(18deg);
      }
      .store-logo { width: 46px; height: 46px; border-radius: 16px; display: grid; place-items: center; color: #fff; background: var(--tone); font-weight: 860; }
      .product-row { min-height: 94px; border-radius: 18px; padding: 12px; display: grid; grid-template-columns: 64px 1fr auto; gap: 12px; align-items: center; }
      .product-img { width: 64px; height: 64px; border-radius: 18px; background: var(--tone); box-shadow: inset 0 1px 0 rgba(255,255,255,.45); }
      .progress { height: 11px; border-radius: 13px; overflow: hidden; background: #841111; }
      .progress span { display: block; height: 100%; border-radius: inherit; background: #fff; }
      .reward-card { min-height: 118px; border-radius: 20px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; }
      .reward-card::after { content: ""; position: absolute; inset: auto -28px -34px auto; width: 110px; height: 110px; border-radius: 34px; background: var(--tone); opacity: .2; }
      .tabbar {
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        width: 240px;
        height: 56px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 30;
        padding: 6px 10px;
        background: rgba(242, 242, 242, .92);
        border: 1px solid rgba(255,255,255,.72);
        box-shadow:
          inset 0 10px 40px rgba(45,51,53,.06),
          inset 0 1px 0 rgba(255,255,255,.25),
          0 16px 38px rgba(32,14,50,.16);
        backdrop-filter: blur(40px) saturate(1.45);
        -webkit-backdrop-filter: blur(40px) saturate(1.45);
      }
      .tab {
        width: 36px;
        height: 36px;
        border-radius: 999px;
        color: #a1a1aa;
        background: transparent;
        border: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 0;
      }
      .tab svg { width: 23px; height: 23px; stroke-width: 1.9; }
      .tab.active {
        color: #2d3335;
        background: rgba(255,255,255,.78);
        box-shadow: inset 0 1px 0 rgba(255,255,255,.9), 0 6px 18px rgba(45,51,53,.1);
      }
      .tab.active::before {
        content: "";
        position: absolute;
        top: -7px;
        left: 50%;
        width: 16px;
        height: 2px;
        border-radius: 999px;
        transform: translateX(-50%);
        background: #2d3335;
        opacity: .86;
      }
      .tab span {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        white-space: nowrap;
      }
      .map-canvas {
        height: 420px;
        border-radius: 26px;
        position: relative;
        overflow: hidden;
        background:
          linear-gradient(90deg, transparent 31%, rgba(45,51,53,.08) 31% 33%, transparent 33%),
          linear-gradient(0deg, transparent 38%, rgba(45,51,53,.08) 38% 40%, transparent 40%),
          linear-gradient(135deg, #fafafa, #f1f4f5);
      }
      .map-zone { position: absolute; border-radius: 18px; padding: 10px; color: #2d3335; font-size: 12px; font-weight: 820; }
      .pin { position: absolute; width: 30px; height: 30px; border-radius: 999px; display: grid; place-items: center; color: #fff; background: #5c34f6; box-shadow: 0 8px 18px rgba(92,52,246,.28); }
      .scan-box { height: 330px; border-radius: 28px; display: grid; place-items: center; position: relative; overflow: hidden; }
      .scan-frame { width: 210px; height: 210px; border-radius: 30px; border: 2px solid rgba(45,51,53,.4); position: relative; }
      .scan-line { position: absolute; left: 20px; right: 20px; top: 50%; height: 2px; background: #ff5004; box-shadow: 0 0 18px rgba(255,80,4,.8); }
      .screen-rail {
        position: fixed;
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%);
        max-width: min(980px, calc(100vw - 32px));
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding: 7px;
        border-radius: 999px;
        background: rgba(24,24,27,.86);
        backdrop-filter: blur(16px);
        box-shadow: 0 12px 30px rgba(0,0,0,.2);
        scrollbar-width: none;
      }
      .screen-rail::-webkit-scrollbar { display: none; }
      .screen-rail button {
        border: 0;
        border-radius: 999px;
        padding: 8px 11px;
        background: transparent;
        color: rgba(255,255,255,.58);
        font-size: 12px;
        font-weight: 760;
        cursor: pointer;
        white-space: nowrap;
      }
      .screen-rail button.active { color: #18181b; background: #fff; }
      @media (max-width: 460px) {
        .stage { padding: 0; }
        .phone { width: 100vw; height: 100vh; border-radius: 0; box-shadow: none; }
        .screen-rail { display: none; }
      }
    `}</style>
  );
}

function StatusBar() {
  return (
    <div className="status">
      <span>16:00</span>
      <span className="row" style={{ gap: 5 }}>
        <span style={{ width: 17, height: 10, borderRadius: 3, border: "1.5px solid #2d3335", display: "inline-flex", padding: 1 }}>
          <span style={{ width: "68%", borderRadius: 2, background: "#2d3335" }} />
        </span>
        5G
      </span>
    </div>
  );
}

function TopBar({ title = "Tashkent City Mall", back, go, action = "bell" }) {
  return (
    <div className="topbar">
      <button className="tap icon-button glass" onClick={back ? () => go(back) : undefined}>
        <Icon name={back ? "back" : "map"} size={18} />
      </button>
      <div className="brand">{title}</div>
      <button className="tap icon-button glass" onClick={() => go(action === "bell" ? "notifications" : "favorites")}>
        <Icon name={action} size={18} />
      </button>
    </div>
  );
}

function BottomTabs({ screen, go }) {
  return (
    <nav className="tabbar" aria-label="Bottom navigation">
      {tabs.map((tab) => (
        <button key={tab.id} className={`tap tab ${screen === tab.id ? "active" : ""}`} onClick={() => go(tab.id)} aria-label={tab.label} title={tab.label}>
          <Icon name={tab.icon} size={23} />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

function AppShell({ screen, go, title, back, action, children }) {
  return (
    <>
      <div className="scroll">
        <TopBar title={title} back={back} go={go} action={action} />
        {children}
      </div>
      <BottomTabs screen={screen} go={go} />
    </>
  );
}

function Login({ go }) {
  return (
    <div className="auth-screen">
      <TopBar title="Mall AI" go={go} action="heart" />
      <div className="login-mark glass">
        <div className="login-lock"><Icon name="shield" size={42} /></div>
      </div>
      <div className="stack">
        <h1>Welcome to Tashkent City Mall</h1>
        <p>Sign in to save rewards, scan fiscal receipt QR codes, find stores and use the AI shopping assistant.</p>
      </div>
      <div className="mini-grid">
        <div className="mini glass"><Icon name="ticket" /><span>Earn points</span></div>
        <div className="mini glass"><Icon name="car" /><span>Free parking</span></div>
        <div className="mini glass"><Icon name="spark" /><span>AI search</span></div>
      </div>
      <div className="stack" style={{ marginTop: "auto" }}>
        <button className="tap primary" onClick={() => go("home")}><Icon name="telegram" />Continue with Telegram</button>
        <button className="tap secondary glass" onClick={() => go("phone")}><Icon name="phone" />Use phone number</button>
      </div>
    </div>
  );
}

function Phone({ go }) {
  return (
    <div className="auth-screen">
      <TopBar title="Verify" back="login" go={go} action="heart" />
      <div className="stack" style={{ marginTop: 24 }}>
        <h1>Enter your phone</h1>
        <p>Telegram is fastest. SMS OTP works as a fallback for Uzbekistan numbers.</p>
      </div>
      <div className="field glass">
        <span style={{ color: "#59618c", fontWeight: 850 }}>+998</span>
        <input value="90 123 45 67" readOnly aria-label="Phone number" />
      </div>
      <div className="card glass row">
        <div className="store-logo" style={{ "--tone": "#5c34f6" }}><Icon name="telegram" /></div>
        <div>
          <h3>Telegram-first login</h3>
          <p>Opens Telegram deep link first, then returns here for SMS OTP if needed.</p>
        </div>
      </div>
      <button className="tap primary" style={{ marginTop: "auto" }} onClick={() => go("otp")}>Send code</button>
    </div>
  );
}

function Otp({ go }) {
  return (
    <div className="auth-screen">
      <TopBar title="Verify" back="phone" go={go} action="heart" />
      <div className="stack" style={{ marginTop: 24 }}>
        <h1>Verify code</h1>
        <p>We sent a one-time code to +998 90 123 45 67.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {["2", "4", "0", "6"].map((digit) => <div key={digit} className="glass" style={{ height: 62, borderRadius: 18, display: "grid", placeItems: "center", fontSize: 26, fontWeight: 860 }}>{digit}</div>)}
      </div>
      <div className="card glass">
        <div className="between">
          <div>
            <h3>Silver Tier preview</h3>
            <p>4,240 points - 760 to Gold</p>
          </div>
          <div className="store-logo" style={{ "--tone": "#841111" }}><Icon name="shield" /></div>
        </div>
        <div className="progress" style={{ marginTop: 18 }}><span style={{ width: "62%" }} /></div>
      </div>
      <button className="tap primary" style={{ marginTop: "auto" }} onClick={() => go("home")}>Verify and continue</button>
    </div>
  );
}

function Home({ go }) {
  return (
    <AppShell screen="home" go={go}>
      <div className="field glass tap" onClick={() => go("search")}>
        <Icon name="search" size={19} />
        <input value="" placeholder="Search stores, products, offers" readOnly />
        <Icon name="camera" size={19} />
      </div>
      <section className="hero-offer glass-dark tap" onClick={() => go("offer")}>
        <div className="offer-content">
          <div className="between" style={{ alignItems: "start" }}>
            <span style={{ color: "rgba(255,255,255,.78)", fontSize: 10, fontWeight: 820, letterSpacing: 1, textTransform: "uppercase" }}>Exclusive event</span>
            <div className="discount">30%<br />OFF</div>
          </div>
          <div>
            <h2 className="offer-title">Exclusive<br />Summer<br />Offer</h2>
            <p style={{ color: "rgba(255,255,255,.78)", marginTop: 14 }}>Zara, Adidas, LC Waikiki and food court perks all week.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="between"><h2>Featured Stores</h2><button className="tap chip glass" onClick={() => go("category")}>Browse</button></div>
        <div className="store-grid">
          {stores.slice(0, 4).map((store) => <StoreTile key={store.id} store={store} go={go} />)}
        </div>
      </section>
      <section className="section">
        <div className="between"><h2>Loyalty</h2><button className="tap chip glass" onClick={() => go("scan")}>Scan receipt</button></div>
        <LoyaltyCard go={go} />
      </section>
    </AppShell>
  );
}

function StoreTile({ store, go }) {
  return (
    <button className="tap store-card glass" style={{ "--tone": store.color, textAlign: "left" }} onClick={() => go("store")}>
      <div className="store-logo" style={{ "--tone": store.color }}>{store.name.slice(0, 1)}</div>
      <div>
        <h3>{store.name}</h3>
        <p>{store.type} - {store.floor}</p>
      </div>
    </button>
  );
}

function LoyaltyCard({ go }) {
  return (
    <button className="tap card glass-dark" onClick={() => go("loyalty")} style={{ textAlign: "left", width: "100%" }}>
      <div className="between">
        <div>
          <p style={{ color: "rgba(255,255,255,.7)" }}>Members Card</p>
          <h2 style={{ color: "#fff" }}>Silver Tier</h2>
        </div>
        <div className="pill glass" style={{ color: "#fff" }}>4,240 pts</div>
      </div>
      <div className="progress" style={{ marginTop: 20 }}><span style={{ width: "62%" }} /></div>
      <p style={{ color: "rgba(255,255,255,.72)", marginTop: 10 }}>760 more points to Gold</p>
    </button>
  );
}

function Search({ go }) {
  return (
    <AppShell screen="search" go={go} title="Search" action="heart">
      <div className="field glass">
        <Icon name="search" size={19} />
        <input value="white sneakers under 500k" readOnly />
        <Icon name="camera" size={19} />
      </div>
      <div className="section">
        <div className="row" style={{ overflowX: "auto" }}>
          {["All", "Fashion", "Dining", "Sport", "Beauty"].map((item, index) => <button key={item} className="tap chip glass" style={index === 0 ? { background: "#2d3335", color: "#fff" } : null}>{item}</button>)}
        </div>
        {products.map((product) => <ProductRow key={product.name} product={product} go={go} />)}
      </div>
      <button className="tap secondary glass" onClick={() => go("ai")}><Icon name="spark" />Ask AI Assistant</button>
    </AppShell>
  );
}

function ProductRow({ product, go }) {
  return (
    <button className="tap product-row glass" style={{ "--tone": product.color, width: "100%", textAlign: "left" }} onClick={() => go("product")}>
      <div className="product-img" style={{ "--tone": product.color }} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.store} - {product.price}</p>
      </div>
      <span className="chip glass">{product.match}</span>
    </button>
  );
}

function Category({ go }) {
  const cats = ["Women", "Men", "Food and drinks", "Kids", "Beauty", "Activities", "Jewellery", "Electronics"];
  return (
    <AppShell screen="category" go={go} title="Categories" back="home">
      <div className="store-grid">
        {cats.map((cat, index) => (
          <button key={cat} className="tap store-card glass" style={{ "--tone": stores[index % stores.length].color, textAlign: "left" }} onClick={() => go("search")}>
            <div className="store-logo" style={{ "--tone": stores[index % stores.length].color }}>{cat.slice(0, 1)}</div>
            <h3>{cat}</h3>
            <p>{12 + index * 3} stores</p>
          </button>
        ))}
      </div>
    </AppShell>
  );
}

function StoreProfile({ go }) {
  const store = stores[0];
  return (
    <AppShell screen="store" go={go} title={store.name} back="home" action="heart">
      <div className="hero-offer glass-dark" style={{ minHeight: 260 }}>
        <div className="offer-content">
          <div className="store-logo" style={{ "--tone": store.color }}>Z</div>
          <div>
            <h1 style={{ color: "#fff" }}>Zara</h1>
            <p style={{ color: "rgba(255,255,255,.72)" }}>Fashion - G Floor - Open until 22:00</p>
          </div>
          <button className="tap secondary glass" onClick={() => go("map")}>Navigate to store</button>
        </div>
      </div>
      <div className="section">
        <div className="card glass"><h3>Current promo</h3><p>30% off summer collection. Earn 2x Mall AI points on receipts today.</p></div>
        <h2>Popular products</h2>
        {products.slice(0, 3).map((product) => <ProductRow key={product.name} product={product} go={go} />)}
      </div>
    </AppShell>
  );
}

function ProductDetail({ go }) {
  return (
    <AppShell screen="product" go={go} title="Product" back="search" action="heart">
      <div className="glass" style={{ height: 300, borderRadius: 28, background: "linear-gradient(135deg,#f8f9fa,#e5deff)" }} />
      <section className="section">
        <div>
          <h1>Linen blazer</h1>
          <p>Zara - G Floor - In stock</p>
        </div>
        <h2>899,000 so'm</h2>
        <div className="card glass"><h3>AI match notes</h3><p>Light beige blazer, relaxed fit, closest match to your uploaded reference.</p></div>
        <button className="tap primary" onClick={() => go("map")}>Navigate to Zara</button>
      </section>
    </AppShell>
  );
}

function OfferDetail({ go }) {
  return (
    <AppShell screen="offer" go={go} title="Offer" back="home">
      <section className="hero-offer glass-dark" style={{ minHeight: 360 }}>
        <div className="offer-content">
          <div className="between" style={{ color: "rgba(255,255,255,.76)", fontWeight: 820 }}>
            <span>Exclusive Summer</span><span>30% OFF</span>
          </div>
          <h2 className="offer-title">Exclusive<br />Summer<br />Offer</h2>
          <p style={{ color: "rgba(255,255,255,.78)" }}>Valid at Zara, Adidas, LC Waikiki and selected food court tenants through Sunday.</p>
        </div>
      </section>
      <section className="section">
        <div className="card glass"><h3>How to use</h3><p>Shop at participating stores, scan your fiscal receipt QR, then redeem the offer in Loyalty.</p></div>
        <button className="tap primary" onClick={() => go("scan")}>Scan receipt</button>
      </section>
    </AppShell>
  );
}

function MapScreen({ go }) {
  return (
    <AppShell screen="map" go={go} title="Floor Map">
      <div className="map-canvas glass">
        <div className="map-zone glass" style={{ left: 20, top: 32, width: 128, height: 92 }}>Zara</div>
        <div className="map-zone glass" style={{ right: 22, top: 44, width: 132, height: 120 }}>Adidas</div>
        <div className="map-zone glass" style={{ left: 34, bottom: 80, width: 142, height: 106 }}>Food Court</div>
        <div className="map-zone glass" style={{ right: 30, bottom: 52, width: 116, height: 88 }}>Cinema</div>
        <div className="pin" style={{ left: 178, top: 190 }}><Icon name="user" size={16} /></div>
        <div className="pin" style={{ left: 85, top: 82, background: "#ff5004" }}><Icon name="map" size={16} /></div>
      </div>
      <div className="row">
        <button className="tap chip glass">G Floor</button>
        <button className="tap chip glass">1 Floor</button>
        <button className="tap chip glass">Food</button>
        <button className="tap chip glass" onClick={() => go("parking")}>Parking</button>
      </div>
    </AppShell>
  );
}

function Parking({ go }) {
  return (
    <AppShell screen="parking" go={go} title="Parking" back="map">
      <div className="card glass-dark">
        <p style={{ color: "rgba(255,255,255,.72)" }}>Saved car location</p>
        <h1 style={{ color: "#fff" }}>B2 - Section C17</h1>
        <p style={{ color: "rgba(255,255,255,.72)" }}>14 min walk from current entrance</p>
      </div>
      <div className="mini-grid">
        <div className="mini glass"><Icon name="car" /><span>428 free spots</span></div>
        <div className="mini glass"><Icon name="ticket" /><span>Free 3h perk</span></div>
        <div className="mini glass"><Icon name="map" /><span>Section nav</span></div>
      </div>
      <button className="tap primary">Start navigation</button>
    </AppShell>
  );
}

function Loyalty({ go }) {
  return (
    <AppShell screen="loyalty" go={go} title="TCM Rewards">
      <LoyaltyCard go={go} />
      <div className="mini-grid">
        <button className="tap mini glass" onClick={() => go("scan")}><Icon name="scan" /><span>Scan receipt</span></button>
        <button className="tap mini glass" onClick={() => go("rewards")}><Icon name="ticket" /><span>Rewards</span></button>
        <button className="tap mini glass" onClick={() => go("tier")}><Icon name="shield" /><span>Tier progress</span></button>
      </div>
      <section className="section">
        <h2>Your rewards</h2>
        {rewards.slice(0, 3).map((reward) => <RewardCard key={reward.title} reward={reward} go={go} />)}
      </section>
    </AppShell>
  );
}

function Scan({ go }) {
  return (
    <AppShell screen="scan" go={go} title="Scan Receipt" back="loyalty">
      <div className="scan-box glass">
        <div className="scan-frame"><div className="scan-line" /></div>
      </div>
      <div className="card glass"><h3>Fiscal QR receipt</h3><p>Point the camera at the QR code from a mall tenant receipt. Sample scan adds 899 points.</p></div>
      <button className="tap primary" onClick={() => go("receipt")}>Use sample receipt</button>
    </AppShell>
  );
}

function Receipt({ go }) {
  return (
    <AppShell screen="receipt" go={go} title="Receipt Analysis" back="scan">
      <div className="card glass-dark">
        <p style={{ color: "rgba(255,255,255,.72)" }}>Zara receipt</p>
        <h1 style={{ color: "#fff" }}>899 points earned</h1>
        <p style={{ color: "rgba(255,255,255,.72)" }}>Purchase total: 899,000 so'm</p>
      </div>
      <div className="section">
        {["Fiscal QR verified", "Tenant matched: Zara", "Points added to Silver Tier"].map((item) => (
          <div className="card glass row" key={item}><div className="store-logo" style={{ "--tone": "#5c34f6" }}><Icon name="check" /></div><h3>{item}</h3></div>
        ))}
      </div>
      <button className="tap primary" onClick={() => go("rewards")}>View rewards</button>
    </AppShell>
  );
}

function Rewards({ go }) {
  return (
    <AppShell screen="rewards" go={go} title="Rewards" back="loyalty">
      <div className="store-grid">
        {rewards.map((reward) => <RewardCard key={reward.title} reward={reward} go={go} />)}
      </div>
    </AppShell>
  );
}

function RewardCard({ reward, go }) {
  return (
    <button className="tap reward-card glass" style={{ "--tone": reward.tone, textAlign: "left" }} onClick={() => go("redeem")}>
      <div className="store-logo" style={{ "--tone": reward.tone }}><Icon name="ticket" /></div>
      <div>
        <h3>{reward.title}</h3>
        <p>{reward.detail}</p>
      </div>
      <strong style={{ color: reward.tone }}>{reward.points}</strong>
    </button>
  );
}

function Redeem({ go }) {
  return (
    <AppShell screen="redeem" go={go} title="Redeem" back="rewards">
      <div className="card glass-dark">
        <p style={{ color: "rgba(255,255,255,.72)" }}>Confirm redemption</p>
        <h1 style={{ color: "#fff" }}>Free parking</h1>
        <p style={{ color: "rgba(255,255,255,.72)" }}>600 points - valid today until 23:59</p>
      </div>
      <button className="tap primary" onClick={() => go("parking")}>Redeem and open parking</button>
    </AppShell>
  );
}

function Tier({ go }) {
  return (
    <AppShell screen="tier" go={go} title="Tier Progress" back="loyalty">
      <div className="card glass-dark">
        <p style={{ color: "rgba(255,255,255,.72)" }}>Current tier</p>
        <h1 style={{ color: "#fff" }}>Silver Tier</h1>
        <div className="progress" style={{ marginTop: 22 }}><span style={{ width: "62%" }} /></div>
        <p style={{ color: "rgba(255,255,255,.72)", marginTop: 10 }}>760 more points to Gold</p>
      </div>
      <div className="section">
        {["2x points at dining", "Free parking every month", "Early access to mall events"].map((item) => <div className="card glass row" key={item}><Icon name="check" /><h3>{item}</h3></div>)}
      </div>
    </AppShell>
  );
}

function AiSearch({ go }) {
  return (
    <AppShell screen="ai" go={go} title="AI Assistant" back="search">
      <div className="card glass-dark">
        <h2 style={{ color: "#fff" }}>Image search</h2>
        <p style={{ color: "rgba(255,255,255,.72)" }}>Upload or take a photo. Mall AI analyzes color, style and category.</p>
      </div>
      <div className="scan-box glass" style={{ height: 220 }}>
        <div className="store-logo" style={{ "--tone": "#5c34f6", width: 78, height: 78, borderRadius: 26 }}><Icon name="camera" size={34} /></div>
      </div>
      <section className="section">
        <h2>Results</h2>
        {products.slice(0, 3).map((product) => <ProductRow key={product.name} product={product} go={go} />)}
      </section>
    </AppShell>
  );
}

function Profile({ go }) {
  return (
    <AppShell screen="profile" go={go} title="Profile">
      <div className="card glass row">
        <div className="store-logo" style={{ "--tone": "#5c34f6", width: 58, height: 58, borderRadius: 20 }}>A</div>
        <div>
          <h2>Abdullo</h2>
          <p>Telegram connected - English</p>
        </div>
      </div>
      <div className="section">
        {[
          ["favorites", "Saved items", "12 stores and products"],
          ["notifications", "Notifications", "3 unread"],
          ["parking", "My car", "B2 - Section C17"],
          ["login", "Sign out", "Return to auth"],
        ].map(([target, title, detail]) => (
          <button key={title} className="tap card glass between" onClick={() => go(target)}>
            <span style={{ textAlign: "left" }}><h3>{title}</h3><p>{detail}</p></span>
            <Icon name="chevron" />
          </button>
        ))}
      </div>
    </AppShell>
  );
}

function Favorites({ go }) {
  return (
    <AppShell screen="favorites" go={go} title="Favorites" back="profile">
      <div className="store-grid">
        {stores.slice(0, 4).map((store) => <StoreTile key={store.id} store={store} go={go} />)}
      </div>
    </AppShell>
  );
}

function Notifications({ go }) {
  return (
    <AppShell screen="notifications" go={go} title="Notifications" back="profile">
      <div className="section">
        {notifications.map((item) => (
          <div className="card glass" key={item.title}>
            <div className="between"><h3>{item.title}</h3><span className="chip glass">{item.time}</span></div>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

function EmptyState({ go }) {
  return (
    <AppShell screen="empty" go={go} title="Empty State" back="home">
      <div className="scan-box glass" style={{ height: 260 }}>
        <div className="store-logo" style={{ "--tone": "#d4d4d8", width: 74, height: 74, borderRadius: 26 }}><Icon name="heart" size={34} /></div>
      </div>
      <div className="stack" style={{ textAlign: "center" }}>
        <h1>Nothing saved yet</h1>
        <p>Save products, offers and stores to see them here.</p>
      </div>
      <button className="tap primary" onClick={() => go("search")}>Browse stores</button>
    </AppShell>
  );
}

export default function MallAIApp() {
  const [screen, setScreen] = useState("login");
  const go = (next) => setScreen(next);

  const current = useMemo(() => {
    const props = { go };
    const routes = {
      login: <Login {...props} />,
      phone: <Phone {...props} />,
      otp: <Otp {...props} />,
      home: <Home {...props} />,
      search: <Search {...props} />,
      category: <Category {...props} />,
      store: <StoreProfile {...props} />,
      product: <ProductDetail {...props} />,
      offer: <OfferDetail {...props} />,
      map: <MapScreen {...props} />,
      parking: <Parking {...props} />,
      loyalty: <Loyalty {...props} />,
      scan: <Scan {...props} />,
      receipt: <Receipt {...props} />,
      rewards: <Rewards {...props} />,
      redeem: <Redeem {...props} />,
      tier: <Tier {...props} />,
      ai: <AiSearch {...props} />,
      profile: <Profile {...props} />,
      favorites: <Favorites {...props} />,
      notifications: <Notifications {...props} />,
      empty: <EmptyState {...props} />,
    };
    return routes[screen] || routes.home;
  }, [screen]);

  return (
    <div className="stage">
      <GlobalStyles />
      <main className="phone" aria-label="Mall AI mobile prototype">
        <div className="notch" />
        <StatusBar />
        <section className="screen">{current}</section>
      </main>
      <nav className="screen-rail" aria-label="Prototype screen switcher">
        {allScreens.map((item) => (
          <button key={item} className={screen === item ? "active" : ""} onClick={() => go(item)}>
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
}
