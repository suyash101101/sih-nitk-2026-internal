export const guidelines = [
  "All team members must be from NITK Surathkal.",
  "Students from different branches are encouraged to form teams.",
  "Each team must consist of exactly 6 members, including at least 1 female member.",
  "Each team will be allotted 3 problem statements and may choose 1 to develop.",
  "Only 1 member per team needs to fill the registration form.",
  "The solution PPT must be submitted by 29 August, 4:00 PM.",
];

export const dates = [
  { date: "28 August, 4:00 PM", activity: "PPT Submission Form Opens", highlight: false },
  { date: "29 August, 4:00 PM", activity: "PPT Submission Form Closes", highlight: true },
  { date: "30 August, 9:00 AM – 9:00 PM", activity: "Offline Hackathon Sprint @ CCC, NITK", highlight: false },
  { date: "30 August, 9:00 PM – 12:00 AM", activity: "Online Presentation (Top 100 Teams)", highlight: false },
  { date: "31 August", activity: "Final Presentation Round (Venue TBA)", highlight: false },
  { date: "31 August onwards", activity: "Selection of Top 10 Teams for National SIH", highlight: true },
];

export const pptCriteria = [
  { title: "Problem Understanding & Relevance", weight: "20%", icon: "🎯" },
  { title: "Innovation & Uniqueness", weight: "20%", icon: "💡" },
  { title: "Technical Feasibility", weight: "20%", icon: "⚙️" },
  { title: "Implementation Approach", weight: "15%", icon: "📐" },
  { title: "Impact & Scalability", weight: "15%", icon: "📈" },
  { title: "Presentation Quality", weight: "10%", icon: "📊" },
];

export const hackathonCriteria = [
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

export const rules = [
  {
    title: "About Smart India Hackathon",
    content:
      "SIH is India's largest student innovation initiative. NITK Internal Hackathon selects teams to represent NITK at National SIH 2026 (₹2 Cr prize pool).",
  },
  {
    title: "Team Formation",
    content:
      "Exactly 6 members, min. 1 female. All from NITK Surathkal. Cross-branch encouraged. One member registers for the team.",
  },
  {
    title: "Registration & PPT",
    content:
      "Form: 28 Aug 4 PM – 29 Aug 4 PM. Submit PPT before deadline or your team won't proceed.",
  },
  {
    title: "Problem Statements",
    content:
      "3 statements per team: Campus, Ministry, General. Choose one for your hackathon solution.",
  },
  {
    title: "Hackathon Process",
    content:
      "R1: Offline sprint (30 Aug, CCC). R2: Online presentations. R3: Final presentations (31 Aug). Top 10 → National SIH.",
  },
  {
    title: "Certificates",
    content:
      "100 teams: Participation. Top 25: Finalist. Top 10: Winner + National SIH representation.",
  },
];

export const faqs = [
  {
    q: "Who can participate?",
    a: "Only NITK Surathkal students. All 6 members must be from NITK.",
  },
  {
    q: "Team size and composition?",
    a: "Exactly 6 members, including at least 1 female. Cross-branch teams encouraged.",
  },
  {
    q: "How do I register?",
    a: "One member fills the form for the whole team. Register early for faster problem statement allocation.",
  },
  {
    q: "PPT submission deadline?",
    a: "28 Aug 4 PM – 29 Aug 4 PM. No extensions.",
  },
  {
    q: "What problem statements?",
    a: "Campus-related, Ministry-related, and General — choose one of three allotted to your team.",
  },
  {
    q: "How are Top 100 selected?",
    a: "PPTs evaluated on problem understanding, innovation, feasibility, approach, impact, and presentation.",
  },
  {
    q: "Where is the hackathon?",
    a: "30 Aug, 9 AM–9 PM at CCC, NITK. Free pizza, meal, mentorship & SWAG!",
  },
  {
    q: "What happens after?",
    a: "R2 online (30 Aug 9 PM), R3 finals (31 Aug), Top 10 → National SIH 2026.",
  },
  {
    q: "Prize pool?",
    a: "₹40,000 internal. Top 10 advance to National SIH with ₹2 crore prize pool.",
  },
  {
    q: "Code freeze rule?",
    a: "No code changes after freeze — only README updates. Violations = disqualification.",
  },
  {
    q: "How to get updates?",
    a: "Join the official WhatsApp group for all announcements.",
  },
  {
    q: "Contact for queries?",
    a: "Suyash (7892799071), Samved (8050131880), Vishruth (8660753633).",
  },
];

export const contacts = [
  { name: "Suyash D Nahar", role: "Convenor, Web Enthusiasts Club NITK", phone: "7892799071" },
  { name: "Samved Sajankila", role: "Convenor, IET NITK", phone: "8050131880" },
  { name: "Vishruth V Srivatsa", role: "Convenor, IEEE NITK", phone: "8660753633" },
];

export const logos = [
  { src: "/logos/nitk.png", alt: "NITK Surathkal", h: "h-14 sm:h-16" },
  { src: "/logos/iic.png", alt: "Institution's Innovation Council", h: "h-10 sm:h-12" },
  { src: "/logos/ieee.png", alt: "IEEE NITK Student Branch", h: "h-10 sm:h-12" },
  { src: "/logos/iet.png", alt: "IET NITK", h: "h-12 sm:h-14" },
  { src: "/logos/webclub.png", alt: "Web Enthusiasts Club NITK", h: "h-10 sm:h-12" },
];
