"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import LogoBar from "@/components/LogoBar";
import {
  buildTimeline,
  contacts,
  dates,
  evaluationCriteria,
  faqs,
  resources,
  submissionChecklist,
  tools,
} from "@/data/content";

function Slide({
  kicker,
  heading,
  children,
  dark = false,
  center = false,
}: {
  kicker?: string;
  heading?: string;
  children: ReactNode;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`slide-frame flex flex-col h-full ${dark ? "dark" : ""}`}>
      <LogoBar />
      <div
        className={`flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-6 min-h-0 overflow-y-auto ${
          center ? "items-center text-center" : ""
        }`}
      >
        {kicker && <p className="slide-kicker mb-2">{kicker}</p>}
        {heading && <h2 className="slide-heading mb-6 max-w-3xl">{heading}</h2>}
        <div className={`w-full max-w-3xl ${center ? "flex flex-col items-center" : ""}`}>{children}</div>
      </div>
    </div>
  );
}

function BigNumber({ n, label }: { n: string; label: string }) {
  return (
    <div className="stat-card text-center flex-1 min-w-[120px]">
      <p className="text-4xl sm:text-5xl font-black text-accent">{n}</p>
      <p className="text-sm text-slate-500 mt-1 font-medium">{label}</p>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 items-start text-base sm:text-lg text-slate-600">
      <span className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function SlideDeck() {
  const slides: ReactNode[] = [
    /* 1 Title */
    <Slide key="1" center dark>
      <Image src="/logos/sih.png" alt="SIH" width={100} height={100} className="h-20 sm:h-24 w-auto mb-6 opacity-90" />
      <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
        Smart India
        <br />
        Hackathon
      </h1>
      <p className="text-accent-light text-lg sm:text-xl font-semibold mt-4">Internal Screening Round</p>
      <p className="text-slate-400 mt-3 text-sm sm:text-base">NITK Surathkal · 2026</p>
    </Slide>,

    /* 2 What */
    <Slide key="2" kicker="Overview" heading="What is this?">
      <p className="slide-body text-xl sm:text-2xl font-medium text-slate-700 leading-snug">
        NITK&apos;s institute-level hackathon to find teams that will represent the college at National SIH 2026.
      </p>
    </Slide>,

    /* 3 Team */
    <Slide key="3" kicker="Teams" heading="Who can join?">
      <ul className="space-y-4">
        <Bullet>Exactly <strong>6 members</strong> per team</Bullet>
        <Bullet>At least <strong>1 female</strong> member</Bullet>
        <Bullet>All members must be <strong>NITK students</strong></Bullet>
      </ul>
    </Slide>,

    /* 4 Team contd */
    <Slide key="4" kicker="Teams" heading="Good to know">
      <ul className="space-y-4">
        <Bullet>Cross-branch teams are <strong>encouraged</strong></Bullet>
        <Bullet>Only <strong>1 member</strong> fills the registration form</Bullet>
        <Bullet>Register early for faster problem statement allocation</Bullet>
      </ul>
    </Slide>,

    /* 5 Problem statements */
    <Slide key="5" kicker="Problem Statements" heading="You get 3. Pick 1.">
      <div className="grid gap-3 sm:grid-cols-3">
        {["Campus", "Ministry", "General"].map((type) => (
          <div key={type} className="stat-card text-center py-6">
            <p className="text-2xl font-bold text-slate-800">{type}</p>
          </div>
        ))}
      </div>
      <p className="text-slate-500 mt-5 text-sm">Build your solution around the one you choose.</p>
    </Slide>,

    /* 6 PPT deadline */
    <Slide key="6" kicker="Deadline" heading="Submit your PPT">
      <div className="stat-card border-accent/30 bg-indigo-50/50">
        <p className="text-3xl sm:text-4xl font-black text-accent">29 Aug, 4 PM</p>
        <p className="text-slate-600 mt-2">Form open from 28 Aug, 4 PM</p>
      </div>
      <p className="text-slate-500 mt-4 text-sm">Mandatory to qualify for the hackathon.</p>
    </Slide>,

    /* 7 Hackathon day */
    <Slide key="7" kicker="Hackathon" heading="30 August @ CCC">
      <div className="stat-card">
        <p className="text-2xl sm:text-3xl font-bold text-slate-800">9 AM to 9 PM</p>
        <p className="text-slate-500 mt-2">24-hour offline sprint with mentorship</p>
      </div>
      <p className="text-slate-500 mt-4 text-sm">Meals, SWAG, and free pizza for participants.</p>
    </Slide>,

    /* 8 Outcomes numbers */
    <Slide key="8" kicker="Outcomes" heading="What you can win">
      <div className="flex flex-wrap gap-3 justify-center">
        <BigNumber n="100" label="Teams at hackathon" />
        <BigNumber n="10" label="Internal winners" />
        <BigNumber n="20-40" label="Advance to National SIH" />
      </div>
    </Slide>,

    /* 9 Prizes */
    <Slide key="9" kicker="Prizes" heading="Top 10 teams">
      <p className="slide-body text-xl sm:text-2xl font-semibold text-slate-700">
        Consumable prizes worth up to
      </p>
      <p className="text-5xl sm:text-6xl font-black text-accent mt-3">₹40,000</p>
      <p className="text-slate-500 mt-4 text-sm">Split among the 10 winning teams.</p>
    </Slide>,

    /* 10 Certificates */
    <Slide key="10" kicker="Recognition" heading="Certificates for all">
      <div className="stat-card py-8 text-center">
        <p className="text-5xl font-black text-accent">100</p>
        <p className="text-lg text-slate-600 mt-2">participating teams receive certificates</p>
      </div>
      <p className="text-slate-500 mt-4 text-sm">National SIH has a ₹2 crore prize pool for advancing teams.</p>
    </Slide>,

    /* 11 Evaluation intro */
    <Slide key="11" kicker="Evaluation" heading="How you are scored">
      <p className="slide-body mb-6">PPT screening selects Top 100. Hackathon judges your MVP heavily.</p>
      <div className="space-y-3">
        {evaluationCriteria.map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-semibold text-slate-700">{c.label}</span>
              <span className="font-bold text-accent">{c.marks}%</span>
            </div>
            <div className="mark-bar">
              <div className={`mark-fill ${c.color}`} style={{ width: `${c.marks * 3}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Slide>,

    /* 12 MVP focus */
    <Slide key="12" kicker="Evaluation" heading="MVP matters most">
      <p className="text-6xl sm:text-7xl font-black text-accent mb-4">30%</p>
      <p className="slide-body text-xl">of your score comes from a working build.</p>
      <p className="text-slate-500 mt-4 text-sm">A demo that runs beats a perfect slide deck every time.</p>
    </Slide>,

    /* 13 24h plan intro */
    <Slide key="13" kicker="Build Guide" heading="Your 24 hours">
      <p className="slide-body">Plan your sprint. Ship early. Iterate fast.</p>
    </Slide>,

    /* 14-18 Build timeline (one per slide) */
    ...buildTimeline.map((block, i) => (
      <Slide key={`build-${i}`} kicker="Build Guide" heading={block.hours}>
        <p className="slide-body text-xl sm:text-2xl font-medium text-slate-700">{block.task}</p>
      </Slide>
    )),

    /* 19 Tools */
    <Slide key="19" kicker="Tools" heading="Pick your stack">
      <div className="grid sm:grid-cols-2 gap-3">
        {tools.map((t) => (
          <div key={t.category} className="stat-card">
            <p className="font-bold text-slate-800 text-sm mb-2">{t.category}</p>
            <p className="text-slate-600 text-sm">{t.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* 20 Submission */
    <Slide key="20" kicker="Submission" heading="What to submit">
      <ul className="space-y-3">
        {submissionChecklist.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </ul>
    </Slide>,

    /* 21-22 Resources */
    <Slide key="21" kicker="Resources" heading="Ideas & approaches">
      <div className="grid sm:grid-cols-2 gap-3">
        {resources.slice(0, 3).map((r) => (
          <div key={r.title} className="stat-card">
            <p className="font-bold text-slate-800 text-sm">{r.title}</p>
            <p className="text-slate-500 text-xs mt-1">{r.desc}</p>
          </div>
        ))}
      </div>
    </Slide>,

    <Slide key="22" kicker="Resources" heading="Pro tips">
      <div className="grid sm:grid-cols-2 gap-3">
        {resources.slice(3).map((r) => (
          <div key={r.title} className="stat-card">
            <p className="font-bold text-slate-800 text-sm">{r.title}</p>
            <p className="text-slate-500 text-xs mt-1">{r.desc}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* 23 Dates recap */
    <Slide key="23" kicker="Timeline" heading="Key dates">
      <div className="space-y-2">
        {dates.map((d) => (
          <div
            key={d.when}
            className={`flex justify-between items-center stat-card py-3 px-4 ${
              d.urgent ? "border-accent/40 bg-indigo-50/50" : ""
            }`}
          >
            <span className="font-mono text-sm font-semibold text-accent">{d.when}</span>
            <span className="text-sm text-slate-600">{d.what}</span>
          </div>
        ))}
      </div>
    </Slide>,

    /* 24-26 Q&A (3 slides, ~4 each) */
    ...[0, 4, 8].map((start, idx) => (
      <Slide key={`faq-${idx}`} kicker="Q & A" heading={idx === 0 ? "Common questions" : "More questions"}>
        <div className="space-y-3">
          {faqs.slice(start, start + 4).map((f) => (
            <div key={f.q} className="stat-card py-3 px-4">
              <p className="font-semibold text-slate-800 text-sm">{f.q}</p>
              <p className="text-slate-500 text-xs mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </Slide>
    )),

    /* 27 Contact */
    <Slide key="27" center dark>
      <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">Build. Innovate. Represent NITK.</h2>
      <p className="text-accent-light font-semibold mb-8">See you at SIH</p>
      <div className="grid sm:grid-cols-3 gap-3 w-full max-w-2xl">
        {contacts.map((c) => (
          <div key={c.name} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <p className="font-bold text-white text-sm">{c.name}</p>
            <p className="text-slate-400 text-xs mt-1">{c.role}</p>
            <a href={`tel:${c.phone}`} className="text-accent-light text-sm font-semibold mt-2 inline-block">
              {c.phone}
            </a>
          </div>
        ))}
      </div>
    </Slide>,
  ];

  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const goTo = useCallback((i: number) => setCurrent(Math.max(0, Math.min(total - 1, i))), [total]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div
      className="ppt-deck h-dvh flex flex-col bg-slate-900"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex-1 relative overflow-hidden min-h-0">
        <div className="slide-track flex h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="w-full h-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 bg-slate-900 px-4 py-3 border-t border-slate-800">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="text-slate-400 text-xs font-semibold disabled:opacity-30 hover:text-white px-2"
          >
            Prev
          </button>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1 max-w-[200px] overflow-hidden">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`nav-dot shrink-0 ${i === current ? "active" : ""}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">
              {current + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current === total - 1}
            className="text-slate-400 text-xs font-semibold disabled:opacity-30 hover:text-white px-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
