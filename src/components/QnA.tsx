"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can participate in the NITK Internal Hackathon?",
    a: "Only students of NITK Surathkal. All 6 team members must be from NITK — inter-college teams are not allowed.",
  },
  {
    q: "What is the team size and composition?",
    a: "Each team must have exactly 6 members, including at least 1 female member. Cross-branch teams are encouraged.",
  },
  {
    q: "How do I register?",
    a: "Only one member per team needs to fill the registration form. Register early to get your problem statements allocated sooner.",
  },
  {
    q: "When is the PPT submission deadline?",
    a: "The PPT submission form is open from 28 August, 4:00 PM to 29 August, 4:00 PM. Submit before 4 PM on 29 August — no extensions.",
  },
  {
    q: "What problem statements will we receive?",
    a: "Each team gets 3 problem statements: one Campus-related, one Ministry-related, and one General. You choose one to develop.",
  },
  {
    q: "How are the Top 100 teams selected?",
    a: "Submitted PPTs are evaluated on problem understanding, innovation, technical feasibility, implementation approach, impact, and presentation quality. Only the Top 100 proceed to the offline hackathon.",
  },
  {
    q: "Where is the offline hackathon?",
    a: "30 August, 9:00 AM to 9:00 PM at CCC, NITK. One meal, mentorship, and SWAG will be provided. Free pizza for all offline participants!",
  },
  {
    q: "What happens after the hackathon?",
    a: "Round 2 online presentations (30 Aug, 9 PM–12 AM), Round 3 final presentations (31 Aug), then Top 10 teams are selected to represent NITK at National SIH 2026.",
  },
  {
    q: "What is the prize pool?",
    a: "₹40,000 for the internal hackathon. Top 10 teams advance to National SIH 2026 with a ₹2 crore prize pool.",
  },
  {
    q: "What is the code freeze rule?",
    a: "After the announced code freeze, no code changes are allowed — only README updates. Unauthorized changes lead to immediate disqualification.",
  },
  {
    q: "How will I receive updates?",
    a: "Join the official WhatsApp group for all announcements. Check this page and the group regularly for updates.",
  },
  {
    q: "Whom do I contact for queries?",
    a: "Suyash D Nahar (WebClub) — 7892799071, Samved Sajankila (IET) — 8050131880, Vishruth V Srivatsa (IEEE) — 8660753633.",
  },
];

export default function QnA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="qna" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-3xl font-extrabold text-sih-navy mb-4">
          Q &amp; A
        </h2>
        <p className="text-gray-600 mb-10">
          Frequently asked questions about the SIH 2026 Internal Screening Round.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sih-orange text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  Q
                </span>
                <span className="font-semibold text-sih-navy flex-1">{faq.q}</span>
                <span
                  className={`text-sih-orange transition-transform flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 flex gap-3 border-t border-gray-100">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sih-green text-white text-sm font-bold flex items-center justify-center mt-3">
                    A
                  </span>
                  <p className="text-gray-700 leading-relaxed pt-3 text-sm sm:text-base">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
