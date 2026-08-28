"use client";

import { useEffect, useState } from "react";

const PPT_DEADLINE = new Date("2026-08-29T16:00:00+05:30");

function AshokaChakra() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8 sm:h-10 sm:w-10 text-sih-navy" aria-hidden="true">
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

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = PPT_DEADLINE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        expired: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (timeLeft.expired) {
    return (
      <p className="text-red-600 font-bold text-sm sm:text-base">
        PPT submission deadline has passed
      </p>
    );
  }

  return (
    <div className="flex items-center gap-3 font-mono text-sm sm:text-base">
      <span className="text-gray-600">Time left to submit PPT:</span>
      <div className="flex gap-2">
        {[
          { val: timeLeft.hours, label: "h" },
          { val: timeLeft.minutes, label: "m" },
          { val: timeLeft.seconds, label: "s" },
        ].map(({ val, label }) => (
          <span
            key={label}
            className="bg-sih-navy text-white px-2 py-1 rounded font-bold tabular-nums"
          >
            {String(val).padStart(2, "0")}
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative circuit-pattern overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M0 100 H80 M120 100 H200 M100 0 V80 M100 120 V200" stroke="#e8751a" strokeWidth="1" fill="none" />
          <circle cx="80" cy="100" r="4" fill="#e8751a" />
          <circle cx="120" cy="100" r="4" fill="#1b3a6b" />
          <rect x="160" y="60" width="20" height="20" fill="none" stroke="#e8751a" strokeWidth="1" transform="rotate(45 170 70)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sih-orange font-semibold text-sm sm:text-base mb-2 tracking-wide">
              ✨ Greetings from WebClub, IET, IEEE ✨
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sih-navy leading-tight tracking-tight">
              SMART INDIA
              <br />
              HACKATHON
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-3">
              <h2 className="text-xl sm:text-2xl font-bold text-sih-orange tracking-wide">
                INTERNAL SCREENING ROUND
              </h2>
              <AshokaChakra />
            </div>
            <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Ready to build something meaningful? Form your team and get ready for the NITK Internal Hackathon.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-sih-navy/5 border border-sih-navy/20 rounded-full px-4 py-2 text-sm font-medium text-sih-navy">
                👥 6 members (min. 1 female)
              </span>
              <span className="inline-flex items-center gap-2 bg-sih-green/5 border border-sih-green/20 rounded-full px-4 py-2 text-sm font-medium text-sih-green">
                🎓 NITK students only
              </span>
              <span className="inline-flex items-center gap-2 bg-sih-orange/5 border border-sih-orange/20 rounded-full px-4 py-2 text-sm font-medium text-sih-orange">
                🔀 Cross-branch encouraged
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="prize-badge w-44 h-44 sm:w-52 sm:h-52 rounded-full flex flex-col items-center justify-center border-4 border-yellow-600/30 relative">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-yellow-700/20 m-2" />
              <span className="text-xs font-bold text-gray-800 tracking-widest">PRIZE POOL</span>
              <span className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">₹40,000</span>
            </div>

            <div className="bg-white border-2 border-sih-navy/20 rounded-xl p-5 font-mono text-sm w-full max-w-xs shadow-sm">
              <div className="space-y-2">
                <p>
                  <span className="text-sih-orange font-bold">PPT Submission:</span>
                  <br />
                  <span className="text-gray-800">28 Aug, 4 PM – 29 Aug, 4 PM</span>
                </p>
                <p>
                  <span className="text-sih-orange font-bold">Hackathon:</span>
                  <br />
                  <span className="text-gray-800">30 Aug, 9 AM – 9 PM @ CCC</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-sih-orange/10 via-white to-sih-green/10 border border-sih-orange/30 rounded-2xl p-6 text-center">
          <p className="text-lg sm:text-xl font-bold text-sih-navy mb-2">
            TOP PERFORMERS ADVANCE TO SIH 2026 FOR A{" "}
            <span className="text-sih-orange">₹2 CRORE</span> PRIZE POOL
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Top 10 teams represent NITK · Free pizza for all offline participants 🍕
          </p>
          <Countdown />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#guidelines"
            className="inline-flex items-center justify-center gap-2 bg-sih-orange hover:bg-sih-saffron text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            View Guidelines →
          </a>
        </div>
      </div>
    </section>
  );
}
