const pptCriteria = [
  {
    title: "Problem Understanding & Relevance",
    weight: "20%",
    description:
      "How well does your team understand the allotted problem statement? Does your solution address a real, meaningful challenge aligned with SIH themes (campus, ministry, or general)?",
    icon: "🎯",
  },
  {
    title: "Innovation & Uniqueness",
    weight: "20%",
    description:
      "Is your approach novel? Evaluators look for creative thinking, differentiation from existing solutions, and fresh perspectives — not just replicating known tools.",
    icon: "💡",
  },
  {
    title: "Technical Feasibility",
    weight: "20%",
    description:
      "Can this solution realistically be built within the hackathon timeline? Is the tech stack appropriate? Are the proposed APIs, frameworks, and architecture sound?",
    icon: "⚙️",
  },
  {
    title: "Implementation Approach",
    weight: "15%",
    description:
      "Do you have a clear plan — system design, data flow, modules, and milestones? National SIH expects structured thinking even at the ideation stage.",
    icon: "📐",
  },
  {
    title: "Impact & Scalability",
    weight: "15%",
    description:
      "Who benefits and how many? Evaluators assess social/economic impact, sustainability, and whether the solution can scale beyond a prototype.",
    icon: "📈",
  },
  {
    title: "Presentation Quality",
    weight: "10%",
    description:
      "Is the PPT clear, concise, and well-structured? Follow official SIH PPT format: problem statement, proposed solution, tech stack, timeline, team roles, and expected outcomes.",
    icon: "📊",
  },
];

const hackathonCriteria = [
  {
    round: "Round 1 — Offline Sprint",
    items: [
      "Working prototype / MVP progress during the 12-hour sprint",
      "Effective use of mentorship and iterative development",
      "Code quality, architecture, and adherence to chosen problem statement",
    ],
  },
  {
    round: "Round 2 — Online Presentation",
    items: [
      "Clarity in explaining problem, solution, and demo",
      "Technical depth and ability to answer evaluator questions",
      "Alignment with PPT proposal and visible progress since submission",
    ],
  },
  {
    round: "Round 3 — Final Presentation",
    items: [
      "Complete, polished solution with measurable impact",
      "Live demo reliability and user experience",
      "Overall innovation, feasibility, and national SIH readiness",
    ],
  },
];

export default function Evaluation() {
  return (
    <section id="evaluation" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl font-extrabold text-sih-navy mb-4">
          EVALUATION CRITERIA
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          Your PPT will be screened to select the <strong>Top 100 teams</strong>. Evaluation follows
          official Smart India Hackathon principles — here&apos;s exactly what judges look for.
        </p>

        <h3 className="text-xl font-bold text-sih-orange mb-6">
          PPT Screening (Top 100 Selection)
        </h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {pptCriteria.map((c) => (
            <div
              key={c.title}
              className="border border-gray-200 rounded-xl p-5 hover:border-sih-navy/30 hover:shadow-md transition-all bg-white"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{c.icon}</span>
                <span className="bg-sih-navy text-white text-xs font-bold px-3 py-1 rounded-full">
                  {c.weight}
                </span>
              </div>
              <h4 className="font-bold text-sih-navy mb-2">{c.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-sih-orange mb-6">
          Hackathon Rounds (After Selection)
        </h3>
        <div className="space-y-4">
          {hackathonCriteria.map((r) => (
            <div key={r.round} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h4 className="font-bold text-sih-navy mb-3">{r.round}</h4>
              <ul className="space-y-2">
                {r.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-sih-green font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 bg-sih-navy/5 border-l-4 border-sih-navy rounded-r-xl">
          <p className="text-sm text-gray-700">
            <strong className="text-sih-navy">Code Freeze:</strong> After the announced code freeze,
            no code changes are permitted — only README updates. Unauthorized changes result in
            immediate disqualification, as per official SIH rules.
          </p>
        </div>
      </div>
    </section>
  );
}
