const rules = [
  {
    title: "About Smart India Hackathon",
    content:
      "Smart India Hackathon (SIH) is one of India's largest national-level student innovation initiatives. The NITK Internal Hackathon is the institute-level selection process — teams compete for the opportunity to represent NITK at National SIH 2026 with a ₹2 crore prize pool.",
  },
  {
    title: "Team Formation",
    content:
      "Exactly 6 members per team with at least 1 female member. All members must be NITK Surathkal students — inter-college teams are not permitted. Cross-branch teams are encouraged. Only one member fills the registration form.",
  },
  {
    title: "Registration & PPT Submission",
    content:
      "Form opens 28 August, 4:00 PM and closes 29 August, 4:00 PM. Submit the form along with your solution PPT before the deadline. Teams that miss the deadline will not proceed to the hackathon.",
  },
  {
    title: "Problem Statements",
    content:
      "Each team receives 3 problem statements: Campus-related, Ministry-related, and General. Choose one to develop. Your selected problem statement must be the basis of your hackathon solution.",
  },
  {
    title: "Hackathon Process",
    content:
      "Round 1: Offline sprint (30 Aug, 9 AM–9 PM @ CCC) with mentorship, meals, and SWAG. Round 2: Online presentations (30 Aug, 9 PM–12 AM). Round 3: Final presentations (31 Aug, venue TBA). Top 10 teams represent NITK nationally.",
  },
  {
    title: "Certificates & Recognition",
    content:
      "All 100 selected teams receive Participation Certificates. Top 25 get Finalist Certificates. Top 10 receive Winner Certificates and advance to National SIH 2026.",
  },
];

export default function Rules() {
  return (
    <section id="rules" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-3xl font-extrabold text-sih-navy mb-12">
          HACKATHON RULES
        </h2>
        <div className="space-y-4">
          {rules.map((rule, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              open={i < 2}
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-bold text-sih-navy hover:bg-gray-50 transition-colors list-none">
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-sih-navy text-white text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  {rule.title}
                </span>
                <span className="text-sih-orange group-open:rotate-180 transition-transform text-xl">
                  ▼
                </span>
              </summary>
              <div className="px-5 pb-4 pt-0 text-gray-700 leading-relaxed text-sm sm:text-base border-t border-gray-100">
                <p className="pt-3">{rule.content}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
