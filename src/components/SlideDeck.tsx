"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import TricolorBar from "@/components/TricolorBar";
import LogoBar from "@/components/LogoBar";
import {
  buildBlocks,
  contacts,
  evaluationCriteria,
  faqs,
  resources,
  submitItems,
  tools,
} from "@/data/content";

function Slide({
  kicker,
  heading,
  children,
  center = false,
  bare = false,
}: {
  kicker?: string;
  heading?: string;
  children: ReactNode;
  center?: boolean;
  bare?: boolean;
}) {
  return (
    <div className="slide-frame flex flex-col h-full">
      {!bare && <LogoBar />}
      <div
        className={`flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-5 min-h-0 overflow-y-auto ${
          center ? "items-center text-center" : ""
        }`}
      >
        {kicker && <p className="slide-kicker mb-3">{kicker}</p>}
        {heading && <h2 className="slide-heading mb-6 max-w-5xl">{heading}</h2>}
        <div className={`w-full max-w-5xl ${center ? "flex flex-col items-center" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-4 items-start">
      <span className="mt-3 w-3.5 h-3.5 rounded-full bg-sih-orange shrink-0" />
      <span className="slide-body">{children}</span>
    </li>
  );
}

export default function SlideDeck() {
  const slides: ReactNode[] = [
    /* 1 Title */
    <Slide key="title" center bare>
      <div className="w-full">
        <LogoBar />
        <div className="flex flex-col items-center justify-center pt-8 sm:pt-12 px-4">
          <Image
            src="/logos/sih.png"
            alt="Smart India Hackathon"
            width={180}
            height={180}
            className="h-28 sm:h-36 w-auto object-contain mb-6"
            priority
          />
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-sih-navy tracking-tight leading-[0.95]">
            SMART INDIA
            <br />
            HACKATHON
          </h1>
          <p className="text-3xl sm:text-4xl font-extrabold text-sih-orange mt-5 tracking-wide">
            INTERNAL SCREENING ROUND
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-sih-charcoal/70 mt-4">
            NITK Surathkal · 2026
          </p>
          <div className="mt-8 prize-seal w-40 h-40 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center border-4 border-yellow-600/25">
            <span className="text-sm font-bold tracking-widest text-sih-charcoal">PRIZES UP TO</span>
            <span className="text-3xl sm:text-4xl font-black text-sih-charcoal">₹40,000</span>
          </div>
          <p className="mt-6 text-lg sm:text-xl font-bold text-sih-navy">
            This is an <span className="text-sih-orange">internal screening</span>, not the national SIH.
          </p>
        </div>
      </div>
    </Slide>,

    /* 2 Clarifier */
    <Slide key="not-sih" kicker="Important" heading="Internal screening only">
      <p className="slide-body">
        This event selects NITK teams for national SIH 2026. It is <strong>not</strong> the national hackathon itself.
      </p>
    </Slide>,

    /* 3 Problem statements */
    <Slide key="ps" kicker="Problem Statements" heading="You get 3 options. Pick 1.">
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {["Campus", "Ministry", "General"].map((t) => (
          <div key={t} className="stat-card text-center py-8">
            <p className="text-3xl sm:text-4xl font-black text-sih-navy">{t}</p>
          </div>
        ))}
      </div>
      <p className="slide-body">
        Based on the option you choose, you will be evaluated under the metrics that follow.
      </p>
    </Slide>,

    /* 4 PS for internal only */
    <Slide key="ps-note" kicker="Problem Statements" heading="For screening only">
      <p className="slide-body">
        These problem statements are purely for the internal screening round.
      </p>
      <p className="slide-body mt-5">
        For the actual national SIH, you are welcome to choose a separate problem statement.
      </p>
    </Slide>,

    /* 5 Screening today */
    <Slide key="screen" kicker="Today" heading="PPT screening by 8:30 PM">
      <p className="slide-body">
        First screening of the Top 100 teams happens through the PPT round by <strong>today, 8:30 PM</strong>.
      </p>
      <p className="slide-body mt-5">
        Selected teams then start building their MVP.
      </p>
    </Slide>,

    /* 6 Coding window */
    <Slide key="coding" kicker="Build Window" heading="Coding starts tonight">
      <div className="stat-card accent mb-5">
        <p className="text-3xl sm:text-4xl font-black text-sih-navy">
          29 Aug, 9 PM → 30 Aug, 9 AM
        </p>
        <p className="text-2xl font-bold text-sih-orange mt-2">24 hours to build</p>
      </div>
      <p className="slide-body">Start only after 9 PM on 29 August.</p>
    </Slide>,

    /* 7 Offline sprint */
    <Slide key="offline" kicker="Offline Sprint" heading="12 hours at LHC-D">
      <div className="stat-card accent mb-5">
        <p className="text-3xl sm:text-4xl font-black text-sih-navy">30 Aug · 9 AM to 9 PM</p>
        <p className="text-2xl font-bold text-sih-orange mt-2">Venue: LHC-D</p>
      </div>
      <p className="slide-body">Mandatory for all selected teams to be present.</p>
    </Slide>,

    /* 8 Mentorship */
    <Slide key="mentor" kicker="Mentorship" heading="Final year mentors on site">
      <p className="slide-body">
        Offline mentorship and guidance will be provided by final year students during the 12 hour sprint.
      </p>
    </Slide>,

    /* 9 Online judging */
    <Slide key="online" kicker="Round 2" heading="Online MVP pitching">
      <div className="stat-card accent mb-5">
        <p className="text-3xl sm:text-4xl font-black text-sih-navy">30 Aug · 9 PM to 12 AM</p>
      </div>
      <ul className="space-y-4">
        <Bullet>
          <strong>4 min</strong> pitch + <strong>2 min</strong> QnA per team
        </Bullet>
        <Bullet>
          Working demo of about <strong>3 minutes</strong>
        </Bullet>
      </ul>
    </Slide>,

    /* 10 Finals */
    <Slide key="finals" kicker="Round 3" heading="Offline finals">
      <p className="slide-body mb-5">
        Top <strong>20 to 40</strong> teams (based on project quality) pitch again offline.
      </p>
      <ul className="space-y-4">
        <Bullet>Industry experts and faculty</Bullet>
        <Bullet>Venue: Digital Library</Bullet>
        <Bullet>Top 10 teams are awarded</Bullet>
      </ul>
    </Slide>,

    /* 11 Outcomes */
    <Slide key="outcomes" kicker="Outcomes" heading="What you can earn">
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { n: "100", l: "Participation certificates" },
          { n: "20–40", l: "Finalist certificates" },
          { n: "10", l: "Winner certificates" },
        ].map((x) => (
          <div key={x.l} className="stat-card text-center">
            <p className="text-5xl font-black text-sih-orange">{x.n}</p>
            <p className="text-xl font-bold text-sih-navy mt-2">{x.l}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* 12 Prizes */
    <Slide key="prizes" kicker="Prizes" heading="Top 10 winners">
      <p className="slide-body">Consumable prizes worth up to</p>
      <p className="text-6xl sm:text-7xl font-black text-sih-orange mt-3">₹40,000</p>
      <p className="slide-body mt-5">Plus a shot at National SIH 2026 (₹2 crore prize pool).</p>
    </Slide>,

    /* 13 Evaluation intro */
    <Slide key="eval" kicker="Evaluation" heading="How you are scored">
      <p className="slide-body mb-6">
        You are judged on the problem option you chose. MVP and demo carry the most weight.
      </p>
      <div className="space-y-4">
        {evaluationCriteria.map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-xl sm:text-2xl font-bold mb-1.5">
              <span className="text-sih-navy">{c.label}</span>
              <span className="text-sih-orange">{c.marks}%</span>
            </div>
            <div className="mark-bar">
              <div className="mark-fill" style={{ width: `${c.marks * 3}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Slide>,

    /* 14 MVP weight */
    <Slide key="mvp" kicker="Evaluation" heading="Working MVP is 30%">
      <p className="text-7xl sm:text-8xl font-black text-sih-orange mb-4">30%</p>
      <p className="slide-body">A demo that runs beats a perfect slide deck.</p>
      <p className="slide-body mt-4">Hardware and software projects both count.</p>
    </Slide>,

    /* 15 Hardware */
    <Slide key="hw" kicker="Builds" heading="Hardware is welcome">
      <p className="slide-body">
        IoT and hardware projects are allowed. Bring your kit to LHC-D and demo live.
      </p>
    </Slide>,

    /* 16 Build guide intro */
    <Slide key="build-intro" kicker="Build Guide" heading="Plan your 24 hours">
      <p className="slide-body">Ship early. Iterate fast. Freeze on time.</p>
    </Slide>,

    /* 17-21 Build blocks */
    ...buildBlocks.map((b, i) => (
      <Slide key={`build-${i}`} kicker="Build Guide" heading={b.hours}>
        <p className="slide-body">{b.task}</p>
      </Slide>
    )),

    /* 22 Tools */
    <Slide key="tools" kicker="Tools" heading="Suggested stack">
      <div className="grid sm:grid-cols-2 gap-4">
        {tools.map((t) => (
          <div key={t.category} className="stat-card">
            <p className="text-2xl font-black text-sih-navy mb-1">{t.category}</p>
            <p className="text-xl font-semibold text-sih-charcoal">{t.items}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* 23 Repo rules */
    <Slide key="repo" kicker="Repository Rules" heading="Repo timeline">
      <ul className="space-y-5">
        <Bullet>
          Create the repository <strong>after 29 Aug, 9 PM</strong>
        </Bullet>
        <Bullet>
          Push nothing after <strong>30 Aug, 9 PM</strong>
        </Bullet>
        <Bullet>Unauthorized late pushes risk disqualification</Bullet>
      </ul>
    </Slide>,

    /* 24 Submit */
    <Slide key="submit" kicker="Submission" heading="What to submit">
      <ul className="space-y-4">
        {submitItems.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </ul>
    </Slide>,

    /* 25-26 Resources */
    <Slide key="res1" kicker="Resources" heading="Ideas & approaches">
      <div className="grid sm:grid-cols-2 gap-4">
        {resources.slice(0, 3).map((r) => (
          <div key={r.title} className="stat-card">
            <p className="text-2xl font-black text-sih-navy">{r.title}</p>
            <p className="text-xl font-semibold text-sih-charcoal mt-2">{r.desc}</p>
          </div>
        ))}
      </div>
    </Slide>,

    <Slide key="res2" kicker="Resources" heading="Pro tips">
      <div className="grid sm:grid-cols-2 gap-4">
        {resources.slice(3).map((r) => (
          <div key={r.title} className="stat-card">
            <p className="text-2xl font-black text-sih-navy">{r.title}</p>
            <p className="text-xl font-semibold text-sih-charcoal mt-2">{r.desc}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* 27 Timeline recap */
    <Slide key="timeline" kicker="Timeline" heading="Key moments">
      <div className="space-y-3">
        {[
          ["Today 8:30 PM", "Top 100 PPT screening results"],
          ["29 Aug 9 PM", "Coding / repo start"],
          ["30 Aug 9 AM–9 PM", "Offline sprint @ LHC-D"],
          ["30 Aug 9 PM", "Repo freeze"],
          ["30 Aug 9 PM–12 AM", "Online pitch + QnA"],
          ["Finals", "Top 20–40 offline at Digital Library"],
        ].map(([when, what]) => (
          <div key={when} className="stat-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-4">
            <span className="text-2xl font-black text-sih-orange">{when}</span>
            <span className="text-2xl font-bold text-sih-navy">{what}</span>
          </div>
        ))}
      </div>
    </Slide>,

    /* 28-30 Q&A */
    ...[0, 4, 8].map((start, idx) => (
      <Slide key={`faq-${idx}`} kicker="Q & A" heading={idx === 0 ? "Common questions" : "More questions"}>
        <div className="space-y-3">
          {faqs.slice(start, start + (idx === 2 ? 2 : 4)).map((f) => (
            <div key={f.q} className="stat-card py-4">
              <p className="text-2xl font-black text-sih-navy">{f.q}</p>
              <p className="text-xl font-semibold text-sih-charcoal mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </Slide>
    )),

    /* 31 Contact */
    <Slide key="contact" center>
      <Image src="/logos/sih.png" alt="SIH" width={140} height={140} className="h-24 w-auto mb-5 object-contain" />
      <h2 className="text-4xl sm:text-5xl font-black text-sih-navy mb-2">
        Build. Innovate. Represent NITK.
      </h2>
      <p className="text-2xl font-bold text-sih-orange mb-8">See you at the internal screening</p>
      <div className="grid sm:grid-cols-3 gap-4 w-full max-w-4xl">
        {contacts.map((c) => (
          <div key={c.name} className="stat-card text-center">
            <p className="text-xl font-black text-sih-navy">{c.name}</p>
            <p className="text-lg font-semibold text-sih-charcoal mt-1">{c.role}</p>
            <a href={`tel:${c.phone}`} className="text-xl font-bold text-sih-orange mt-2 inline-block">
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
    if (Math.abs(diff) > 50) (diff > 0 ? next : prev)();
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div
      className="ppt-deck h-dvh flex flex-col bg-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <TricolorBar />

      <div className="flex-1 relative overflow-hidden min-h-0">
        <div className="slide-track flex h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="w-full h-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 bg-white border-t border-slate-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="text-sih-navy text-lg font-extrabold disabled:opacity-30 hover:text-sih-orange px-3"
          >
            Prev
          </button>

          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={next}
              disabled={current === total - 1}
              className="border-2 border-sih-navy/30 rounded-full px-8 py-2 text-base font-bold text-sih-navy hover:border-sih-orange hover:text-sih-orange disabled:opacity-40"
            >
              SWIPE &gt;&gt;&gt;
            </button>
            <div className="flex items-center gap-1.5 max-w-[260px] overflow-hidden">
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
            <span className="text-sm font-mono font-semibold text-sih-charcoal/50">
              {current + 1} / {total}
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current === total - 1}
            className="text-sih-navy text-lg font-extrabold disabled:opacity-30 hover:text-sih-orange px-3"
          >
            Next
          </button>
        </div>
      </div>

      <TricolorBar />
    </div>
  );
}
