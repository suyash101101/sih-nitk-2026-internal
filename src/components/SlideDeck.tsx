"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import TricolorBar from "@/components/TricolorBar";
import LogoBar from "@/components/LogoBar";
import {
  beginnerGuide,
  contacts,
  evaluationCriteria,
  faqs,
  proTips,
  submitItems,
  tools,
} from "@/data/content";

function Slide({
  kicker,
  heading,
  children,
  center = false,
  bare = false,
  dense = false,
}: {
  kicker?: string;
  heading?: string;
  children: ReactNode;
  center?: boolean;
  bare?: boolean;
  dense?: boolean;
}) {
  return (
    <div className="slide-frame flex flex-col h-full overflow-hidden">
      {!bare && <LogoBar />}
      <div
        className={`flex-1 flex flex-col min-h-0 overflow-y-auto overscroll-contain px-6 sm:px-12 lg:px-16 pt-4 pb-8 ${
          dense || center ? "justify-start" : "justify-center"
        } ${center ? "items-center text-center" : ""}`}
      >
        {kicker && <p className="slide-kicker mb-2 shrink-0">{kicker}</p>}
        {heading && (
          <h2 className={`slide-heading max-w-5xl shrink-0 ${dense ? "mb-4 text-[clamp(1.8rem,4vw,2.8rem)]" : "mb-6"}`}>
            {heading}
          </h2>
        )}
        <div className={`w-full max-w-5xl pb-4 ${center ? "flex flex-col items-center" : ""}`}>
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

    /* 5 Submit PPT */
    <Slide key="ppt-deadline" kicker="Today" heading="Submit your PPT by 5 PM">
      <div className="stat-card accent mb-5">
        <p className="text-4xl sm:text-5xl font-black text-sih-orange">5:00 PM Today</p>
      </div>
      <p className="slide-body">PPT submission is mandatory to be considered for the Top 100 shortlist.</p>
    </Slide>,

    /* 6 Shortlist */
    <Slide key="shortlist" kicker="Today" heading="Top 100 shortlist by 8:30 PM">
      <p className="slide-body">
        The PPT shortlist of the <strong>Top 100 teams</strong> will be released by <strong>8:30 PM today</strong>.
      </p>
      <p className="slide-body mt-5">Only shortlisted teams move on to build their MVP.</p>
    </Slide>,

    /* 7 Coding window */
    <Slide key="coding" kicker="Build Window" heading="Coding window">
      <div className="stat-card accent mb-5">
        <p className="text-3xl sm:text-4xl font-black text-sih-navy">
          29 Aug, 9 PM → 30 Aug, 9 PM
        </p>
        <p className="text-2xl font-bold text-sih-orange mt-2">Build until repo freeze</p>
      </div>
      <p className="slide-body">Create the repo only after 9 PM on 29 August. Push nothing after 9 PM on 30 August.</p>
    </Slide>,

    /* 8 Offline sprint */
    <Slide key="offline" kicker="Offline Sprint" heading="12 hours at LHC-D">
      <div className="stat-card accent mb-5">
        <p className="text-3xl sm:text-4xl font-black text-sih-navy">30 Aug · 9 AM to 9 PM</p>
        <p className="text-2xl font-bold text-sih-orange mt-2">Venue: LHC-D</p>
      </div>
      <p className="slide-body">Mandatory for all shortlisted teams to be present.</p>
    </Slide>,

    /* 9 Mentorship */
    <Slide key="mentor" kicker="Mentorship" heading="Final year mentors on site">
      <p className="slide-body">
        Offline mentorship and guidance will be provided by final year students during the 12 hour sprint.
      </p>
    </Slide>,

    /* 10 Online judging */
    <Slide key="online" kicker="Online Judging" heading="4 min demo + 2 min QnA">
      <div className="stat-card accent mb-5">
        <p className="text-3xl sm:text-4xl font-black text-sih-navy">30 Aug · 9 PM to 12 AM</p>
      </div>
      <ul className="space-y-4">
        <Bullet>
          <strong>4 minutes</strong> of demo per team
        </Bullet>
        <Bullet>
          <strong>2 minutes</strong> of QnA per team
        </Bullet>
      </ul>
    </Slide>,

    /* 11 Path forward */
    <Slide key="path" kicker="Selection Path" heading="How teams advance" dense>
      <div className="space-y-4">
        <div className="stat-card flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <p className="text-5xl sm:text-6xl font-black text-sih-orange shrink-0 sm:w-36 text-center leading-none">
            100
          </p>
          <div>
            <p className="text-2xl font-black text-sih-navy">Shortlisted for the hackathon</p>
            <p className="text-xl font-semibold text-sih-charcoal mt-1">From the PPT round</p>
          </div>
        </div>
        <div className="stat-card accent flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="sm:w-36 text-center shrink-0">
            <p className="text-4xl sm:text-5xl font-black text-sih-orange leading-none">20</p>
            <p className="text-xl font-black text-sih-navy my-0.5">to</p>
            <p className="text-4xl sm:text-5xl font-black text-sih-orange leading-none">40</p>
          </div>
          <div>
            <p className="text-2xl font-black text-sih-navy">Advance to offline finals</p>
            <p className="text-xl font-semibold text-sih-charcoal mt-1">
              Exact count depends on project quality after online judging
            </p>
          </div>
        </div>
        <div className="stat-card flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <p className="text-5xl sm:text-6xl font-black text-sih-orange shrink-0 sm:w-36 text-center leading-none">
            10
          </p>
          <div>
            <p className="text-2xl font-black text-sih-navy">Winners of internal screening</p>
            <p className="text-xl font-semibold text-sih-charcoal mt-1">Path toward national SIH</p>
          </div>
        </div>
      </div>
    </Slide>,

    /* 12 Certificates */
    <Slide key="certs" kicker="Certificates" heading="Recognition at each stage">
      <ul className="space-y-4">
        <Bullet>
          All <strong>100</strong> hackathon teams get participation certificates
        </Bullet>
        <Bullet>
          Finalist teams (up to <strong>40</strong>) get finalist certificates
        </Bullet>
        <Bullet>
          Top <strong>10</strong> get winner certificates
        </Bullet>
      </ul>
    </Slide>,

    /* 13 Finals */
    <Slide key="finals" kicker="Offline Finals" heading="Pitch to experts">
      <p className="slide-body mb-5">
        Up to <strong>40</strong> teams pitch again offline, based on project quality.
      </p>
      <ul className="space-y-4">
        <Bullet>Industry experts and faculty</Bullet>
        <Bullet>Venue: Digital Library</Bullet>
        <Bullet>Top 10 teams are awarded</Bullet>
      </ul>
    </Slide>,

    /* 14 Prizes */
    <Slide key="prizes" kicker="Prizes" heading="Top 10 winners">
      <p className="slide-body">Consumable prizes worth up to</p>
      <p className="text-6xl sm:text-7xl font-black text-sih-orange mt-3">₹40,000</p>
      <p className="slide-body mt-5">Plus a path to National SIH 2026 (₹2 crore prize pool).</p>
    </Slide>,

    /* 15 Evaluation */
    <Slide key="eval" kicker="Evaluation" heading="How you are scored" dense>
      <p className="text-xl sm:text-2xl font-semibold text-sih-charcoal mb-4">
        Judged on the problem option you chose. Working demo carries the most weight.
      </p>
      <div className="space-y-3">
        {evaluationCriteria.map((c) => (
          <div key={c.label}>
            <div className="flex justify-between text-lg sm:text-xl font-bold mb-1">
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

    /* 16 MVP weight */
    <Slide key="mvp" kicker="Evaluation" heading="Working MVP is 30%">
      <p className="text-7xl sm:text-8xl font-black text-sih-orange mb-4">30%</p>
      <p className="slide-body">A demo that runs beats a perfect slide deck.</p>
      <p className="slide-body mt-4">Hardware and software projects both count.</p>
    </Slide>,

    /* Beginner build guide */
    ...beginnerGuide.map((g, i) => (
      <Slide key={`guide-${i}`} kicker={g.kicker} heading={g.heading}>
        <p className="slide-body">{g.body}</p>
      </Slide>
    )),

    /* Tools */
    <Slide key="tools" kicker="Tools" heading="Start with these" dense>
      <div className="grid sm:grid-cols-2 gap-3">
        {tools.map((t) => (
          <div key={t.category} className="stat-card py-4">
            <p className="text-xl sm:text-2xl font-black text-sih-navy mb-1">{t.category}</p>
            <p className="text-lg sm:text-xl font-semibold text-sih-charcoal">{t.items}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* Repo rules */
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

    /* Submit checklist */
    <Slide key="submit" kicker="Submission" heading="What to submit">
      <ul className="space-y-4">
        {submitItems.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </ul>
    </Slide>,

    /* Pro tips - 2 per slide to avoid cutoff */
    ...proTips.map((t, idx) => (
      <Slide key={`tip-${idx}`} kicker="Pro Tips" heading={t.title}>
        <p className="slide-body">{t.desc}</p>
      </Slide>
    )),

    /* Timeline split */
    <Slide key="timeline-1" kicker="Timeline" heading="Before the sprint" dense>
      <div className="space-y-3">
        {[
          ["Today 5 PM", "PPT submission deadline"],
          ["Today 8:30 PM", "Top 100 shortlist released"],
          ["29 Aug 9 PM", "Coding and repo start"],
        ].map(([when, what]) => (
          <div key={when} className="stat-card py-4">
            <p className="text-2xl font-black text-sih-orange">{when}</p>
            <p className="text-2xl font-bold text-sih-navy mt-1">{what}</p>
          </div>
        ))}
      </div>
    </Slide>,

    <Slide key="timeline-2" kicker="Timeline" heading="Hackathon day" dense>
      <div className="space-y-3">
        {[
          ["30 Aug 9 AM to 9 PM", "Offline sprint at LHC-D"],
          ["30 Aug 9 PM", "Repo freeze. No more pushes."],
          ["30 Aug 9 PM to 12 AM", "Online: 4 min demo + 2 min QnA"],
          ["Finals", "Up to 40 teams offline at Digital Library"],
        ].map(([when, what]) => (
          <div key={when} className="stat-card py-4">
            <p className="text-2xl font-black text-sih-orange">{when}</p>
            <p className="text-2xl font-bold text-sih-navy mt-1">{what}</p>
          </div>
        ))}
      </div>
    </Slide>,

    /* Q&A - 2 per slide */
    ...Array.from({ length: Math.ceil(faqs.length / 2) }, (_, idx) => {
      const start = idx * 2;
      return (
        <Slide key={`faq-${idx}`} kicker="Q & A" heading={idx === 0 ? "Common questions" : "More questions"} dense>
          <div className="space-y-3">
            {faqs.slice(start, start + 2).map((f) => (
              <div key={f.q} className="stat-card py-4">
                <p className="text-xl sm:text-2xl font-black text-sih-navy">{f.q}</p>
                <p className="text-lg sm:text-xl font-semibold text-sih-charcoal mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </Slide>
      );
    }),

    /* Contact */
    <Slide key="contact" center dense>
      <Image src="/logos/sih.png" alt="SIH" width={120} height={120} className="h-20 w-auto mb-4 object-contain" />
      <h2 className="text-3xl sm:text-4xl font-black text-sih-navy mb-2">
        Build. Innovate. Represent NITK.
      </h2>
      <p className="text-xl sm:text-2xl font-bold text-sih-orange mb-6">See you at the internal screening</p>
      <div className="grid sm:grid-cols-3 gap-3 w-full max-w-4xl">
        {contacts.map((c) => (
          <div key={c.name} className="stat-card text-center py-4">
            <p className="text-lg sm:text-xl font-black text-sih-navy">{c.name}</p>
            <p className="text-base font-semibold text-sih-charcoal mt-1">{c.role}</p>
            <a href={`tel:${c.phone}`} className="text-lg font-bold text-sih-orange mt-2 inline-block">
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
