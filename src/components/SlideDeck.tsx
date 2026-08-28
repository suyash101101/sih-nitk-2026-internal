"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import TricolorBar from "@/components/TricolorBar";
import LogoBar from "@/components/LogoBar";
import {
  contacts,
  dates,
  faqs,
  guidelines,
  hackathonCriteria,
  pptCriteria,
  rules,
} from "@/data/content";

const TOTAL_SLIDES = 9;

function AshokaChakra() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7 sm:h-9 sm:w-9 text-sih-navy shrink-0" aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={20 + 6 * Math.cos(angle)}
            y1={20 + 6 * Math.sin(angle)}
            x2={20 + 18 * Math.cos(angle)}
            y2={20 + 18 * Math.sin(angle)}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        );
      })}
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  );
}

function CircuitDecor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={`absolute opacity-[0.12] pointer-events-none ${className}`} aria-hidden="true">
      <path d="M0 60 H40 M80 60 H120 M60 0 V40 M60 80 V120" stroke="#e8751a" strokeWidth="1" fill="none" />
      <circle cx="40" cy="60" r="3" fill="#e8751a" />
      <circle cx="80" cy="60" r="3" fill="#1b3a6b" />
      <rect x="90" y="30" width="14" height="14" fill="none" stroke="#e8751a" strokeWidth="1" transform="rotate(45 97 37)" />
    </svg>
  );
}

function SlideTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="slide-title text-2xl sm:text-3xl font-extrabold text-sih-navy mb-4 sm:mb-6">
      {children}
    </h2>
  );
}

function SlideShell({
  children,
  showLogos = false,
  compactLogos = true,
}: {
  children: ReactNode;
  showLogos?: boolean;
  compactLogos?: boolean;
}) {
  return (
    <div className="slide-shell relative flex flex-col h-full bg-white circuit-pattern overflow-hidden">
      <CircuitDecor className="w-28 h-28 top-2 right-2" />
      <CircuitDecor className="w-24 h-24 bottom-16 left-2 rotate-180" />
      {showLogos && <LogoBar compact={compactLogos} />}
      <div className="flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-4 min-h-0 overflow-y-auto slide-scroll">
        {children}
      </div>
    </div>
  );
}

export default function SlideDeck() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)));
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
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
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  const slides: ReactNode[] = [
    /* Slide 1 — Title */
    <SlideShell key="title" showLogos>
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sih-orange font-semibold text-xs sm:text-sm mb-2">
            ✨ Greetings from WebClub, IET, IEEE ✨
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sih-navy leading-tight">
            SMART INDIA
            <br />
            HACKATHON
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
            <p className="text-lg sm:text-xl font-bold text-sih-orange">INTERNAL SCREENING ROUND</p>
            <AshokaChakra />
          </div>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
            Ready to build something meaningful? Form your team and get ready for the NITK Internal Hackathon.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-start">
            {["👥 6 members (min. 1 female)", "🎓 NITK only", "🔀 Cross-branch encouraged"].map((t) => (
              <span key={t} className="text-xs sm:text-sm bg-sih-navy/5 border border-sih-navy/15 rounded-full px-3 py-1.5 font-medium text-sih-navy">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="prize-badge w-36 h-36 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center border-4 border-yellow-600/30">
            <span className="text-[10px] font-bold text-gray-800 tracking-widest">PRIZE POOL</span>
            <span className="text-2xl sm:text-3xl font-black text-gray-900">₹40,000</span>
          </div>
          <div className="border-2 border-sih-navy/20 rounded-xl p-4 font-mono text-xs sm:text-sm w-56 sm:w-64">
            <p className="mb-2">
              <span className="text-sih-orange font-bold">PPT:</span> 28 Aug 4 PM – 29 Aug 4 PM
            </p>
            <p>
              <span className="text-sih-orange font-bold">Hackathon:</span> 30 Aug 9 AM – 9 PM @ CCC
            </p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-sm sm:text-base font-bold text-sih-navy">
        TOP PERFORMERS ADVANCE TO SIH 2026 — <span className="text-sih-orange">₹2 CRORE</span> PRIZE POOL
      </p>
    </SlideShell>,

    /* Slide 2 — Guidelines */
    <SlideShell key="guidelines">
      <SlideTitle>GUIDELINES</SlideTitle>
      <ol className="space-y-3 sm:space-y-4">
        {guidelines.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-sih-orange to-sih-green text-white font-bold flex items-center justify-center text-xs">
              {i + 1}
            </span>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed pt-0.5">{item}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 flex items-center gap-3">
        <Image src="/logos/sih.png" alt="SIH" width={80} height={80} className="h-16 w-auto object-contain" />
        <p className="text-xs text-gray-500">Innovation · Technology · Solutions</p>
      </div>
    </SlideShell>,

    /* Slide 3 — Dates */
    <SlideShell key="dates">
      <SlideTitle>IMPORTANT DATES</SlideTitle>
      <div className="space-y-1">
        {dates.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2.5 border-b border-gray-100 last:border-0 ${
              item.highlight ? "bg-sih-orange/5 -mx-2 px-2 rounded-lg" : ""
            }`}
          >
            <time className="font-mono text-xs sm:text-sm font-semibold text-sih-orange sm:w-52 shrink-0">
              {item.date}
            </time>
            <span className={`text-sm sm:text-base ${item.highlight ? "font-bold text-sih-navy" : "text-gray-700"}`}>
              {item.activity}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center">
        ⏱️ Register early to get your problem statements allocated sooner.
      </p>
    </SlideShell>,

    /* Slide 4 — PPT Evaluation */
    <SlideShell key="eval-ppt">
      <SlideTitle>EVALUATION — PPT SCREENING</SlideTitle>
      <p className="text-gray-600 text-sm mb-4">
        Top <strong>100 teams</strong> selected based on official SIH principles:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {pptCriteria.map((c) => (
          <div key={c.title} className="border border-gray-200 rounded-lg p-3 bg-white/80">
            <div className="flex items-center justify-between mb-1">
              <span className="text-lg">{c.icon}</span>
              <span className="bg-sih-navy text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{c.weight}</span>
            </div>
            <p className="font-bold text-sih-navy text-xs sm:text-sm leading-tight">{c.title}</p>
          </div>
        ))}
      </div>
    </SlideShell>,

    /* Slide 5 — Hackathon Evaluation */
    <SlideShell key="eval-hack">
      <SlideTitle>EVALUATION — HACKATHON ROUNDS</SlideTitle>
      <div className="space-y-3">
        {hackathonCriteria.map((r) => (
          <div key={r.round} className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-100">
            <h4 className="font-bold text-sih-navy text-sm sm:text-base mb-2">{r.round}</h4>
            <ul className="space-y-1">
              {r.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="text-sih-green font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-3 p-3 bg-sih-navy/5 border-l-4 border-sih-navy rounded-r-lg">
        <p className="text-xs sm:text-sm text-gray-700">
          <strong className="text-sih-navy">Code Freeze:</strong> No code changes after freeze — only README updates. Violations = disqualification.
        </p>
      </div>
    </SlideShell>,

    /* Slide 6 — Rules */
    <SlideShell key="rules">
      <SlideTitle>HACKATHON RULES</SlideTitle>
      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
        {rules.map((rule, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white/80">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-sih-navy text-white text-[10px] flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </span>
              <h4 className="font-bold text-sih-navy text-xs sm:text-sm">{rule.title}</h4>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">{rule.content}</p>
          </div>
        ))}
      </div>
    </SlideShell>,

    /* Slide 7 — Q&A Part 1 */
    <SlideShell key="qna1">
      <SlideTitle>Q &amp; A</SlideTitle>
      <div className="space-y-2 sm:space-y-3">
        {faqs.slice(0, 6).map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white/80">
            <div className="flex gap-2 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-sih-orange text-white text-[10px] font-bold flex items-center justify-center">Q</span>
              <div>
                <p className="font-semibold text-sih-navy text-xs sm:text-sm">{faq.q}</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>,

    /* Slide 8 — Q&A Part 2 */
    <SlideShell key="qna2">
      <SlideTitle>Q &amp; A (contd.)</SlideTitle>
      <div className="space-y-2 sm:space-y-3">
        {faqs.slice(6).map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white/80">
            <div className="flex gap-2 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-sih-orange text-white text-[10px] font-bold flex items-center justify-center">Q</span>
              <div>
                <p className="font-semibold text-sih-navy text-xs sm:text-sm">{faq.q}</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideShell>,

    /* Slide 9 — Contact / Closing */
    <SlideShell key="contact">
      <div className="text-center">
        <Image src="/logos/sih.png" alt="Smart India Hackathon" width={120} height={120} className="h-24 sm:h-28 w-auto mx-auto object-contain mb-4" />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-sih-navy mb-2">Build. Innovate. Represent NITK.</h2>
        <p className="text-sih-orange font-bold text-lg mb-6">See you at SIH! 🇮🇳</p>
        <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {contacts.map((c) => (
            <div key={c.name} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <p className="font-bold text-sih-navy text-xs sm:text-sm">{c.name}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{c.role}</p>
              <a href={`tel:${c.phone}`} className="text-sih-orange font-semibold text-xs sm:text-sm mt-1 inline-block hover:underline">
                {c.phone}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[10px] sm:text-xs text-gray-400">
          © 2026 SIH — NITK Internal Screening Round · WebClub · IET · IEEE
        </p>
      </div>
    </SlideShell>,
  ];

  return (
    <div
      className="ppt-deck h-dvh flex flex-col bg-white select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <TricolorBar />

      <div className="flex-1 relative overflow-hidden min-h-0">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full h-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* PPT Navigation */}
      <div className="shrink-0 bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button
            type="button"
            onClick={prev}
            disabled={current === 0}
            className="text-sih-navy font-bold text-sm disabled:opacity-30 hover:text-sih-orange transition-colors px-2"
            aria-label="Previous slide"
          >
            ◀ PREV
          </button>

          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={next}
              disabled={current === TOTAL_SLIDES - 1}
              className="swipe-btn border-2 border-gray-300 rounded-full px-6 py-1.5 text-sm font-semibold text-gray-600 hover:border-sih-orange hover:text-sih-orange transition-colors disabled:opacity-40"
            >
              SWIPE &gt;&gt;&gt;
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-sih-orange w-5" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-gray-400 font-mono">
              {current + 1} / {TOTAL_SLIDES}
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            disabled={current === TOTAL_SLIDES - 1}
            className="text-sih-navy font-bold text-sm disabled:opacity-30 hover:text-sih-orange transition-colors px-2"
            aria-label="Next slide"
          >
            NEXT ▶
          </button>
        </div>
      </div>

      <TricolorBar />
    </div>
  );
}
