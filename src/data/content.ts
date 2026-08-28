export const evaluationCriteria = [
  { label: "Working MVP / Demo", marks: 30 },
  { label: "Problem Understanding", marks: 15 },
  { label: "Innovation", marks: 15 },
  { label: "Technical Feasibility", marks: 15 },
  { label: "Impact & Scalability", marks: 15 },
  { label: "Presentation", marks: 10 },
];

export const beginnerGuide = [
  {
    kicker: "For Beginners",
    heading: "New to coding? That is okay.",
    body: "Most teams here are 1st and 2nd years. You do not need to know everything. You need one small thing that works.",
  },
  {
    kicker: "For Beginners",
    heading: "What is an MVP?",
    body: "Minimum Viable Product = the smallest version of your idea that actually runs. One problem. One solution. One demo path.",
  },
  {
    kicker: "For Beginners",
    heading: "Example MVP",
    body: "Campus lost-and-found: a form to report an item + a list to search items. That alone is a valid demo.",
  },
  {
    kicker: "Team Roles",
    heading: "Split work early",
    body: "Do not all sit on one laptop. Assign UI, data, demo script, and PPT. Play to what each person already knows.",
  },
  {
    kicker: "How to Start",
    heading: "Do not build from zero",
    body: "Copy a free template. Use Firebase, Glitch, or a Next.js starter. Starting blank wastes hours.",
  },
  {
    kicker: "How to Start",
    heading: "Ask AI to teach you",
    body: "Use ChatGPT or Cursor. Paste your error. Ask: explain like I am a first year. Change one line at a time.",
  },
  {
    kicker: "How to Start",
    heading: "Follow one tutorial",
    body: "Pick one YouTube path (Firebase auth, Flutter todo, Arduino sensor). Finish it, then bend it into your problem.",
  },
  {
    kicker: "Simple Stacks",
    heading: "Easiest web path",
    body: "HTML/CSS + Firebase, or React + Firebase, or FlutterFlow / Glide for low-code. Deploy on Vercel if needed.",
  },
  {
    kicker: "Simple Stacks",
    heading: "App or data path",
    body: "Flutter + Firebase for apps. Streamlit for data dashboards. Keep it to 2 or 3 screens only.",
  },
  {
    kicker: "Simple Stacks",
    heading: "Hardware path",
    body: "Arduino / ESP32 + one sensor + live readings on serial or a phone. Hardware builds are welcome.",
  },
  {
    kicker: "Build Order",
    heading: "Plan on paper first",
    body: "Who has the problem? What do they click? What do they see? If it takes more than 30 seconds to explain, simplify.",
  },
  {
    kicker: "Build Order",
    heading: "Build one end-to-end path",
    body: "Home → main action → result. That single happy path is your demo. Extra features come only after it works.",
  },
  {
    kicker: "Timeline",
    heading: "Tonight after 9 PM",
    body: "Create the GitHub repo. Pick the stack. Run Hello World. Sketch the 3 screens on paper.",
  },
  {
    kicker: "Timeline",
    heading: "Morning at LHC-D",
    body: "9 AM to 1 PM: finish the core happy path. Stuck for 20 minutes? Call a mentor immediately.",
  },
  {
    kicker: "Timeline",
    heading: "Afternoon at LHC-D",
    body: "1 PM to 6 PM: polish the UI a little. Add at most 1 or 2 extras. Test on another laptop or phone.",
  },
  {
    kicker: "Timeline",
    heading: "Evening before freeze",
    body: "6 PM to 9 PM: rehearse the 4 min demo, write the README, freeze the repo at 9 PM sharp.",
  },
  {
    kicker: "Demo Prep",
    heading: "Script your 4 minutes",
    body: "30s problem · 60s idea · 2 min live demo · 30s impact. Leave buffer. Rehearse twice out loud.",
  },
  {
    kicker: "Demo Prep",
    heading: "Record a backup video",
    body: "Screen-record the happy path. If WiFi dies in online judging, play the video instead.",
  },
];

export const tools = [
  { category: "Beginner friendly", items: "Firebase, Glitch, Streamlit, FlutterFlow" },
  { category: "Web", items: "React, Next.js, Tailwind, Vercel" },
  { category: "App", items: "Flutter, React Native" },
  { category: "Backend", items: "Node, Express, FastAPI, Supabase" },
  { category: "AI help", items: "ChatGPT, Gemini, Cursor" },
  { category: "Hardware", items: "Arduino, ESP32, Raspberry Pi" },
];

export const submitItems = [
  "GitHub repo created after 29 Aug, 9 PM",
  "No pushes after 30 Aug, 9 PM",
  "Working demo ready for 4 min presentation",
  "PPT: problem, solution, stack, impact",
  "Clear README with setup steps",
];

export const proTips = [
  {
    title: "One feature deep",
    desc: "One polished flow beats five half-broken screens. Judges notice.",
  },
  {
    title: "Stuck? Ask in 20 mins",
    desc: "Do not burn 3 hours on one bug. Mentors are there for this exact reason.",
  },
  {
    title: "Commit often",
    desc: "Push small working versions. If something breaks late, you can roll back.",
  },
  {
    title: "Demo data ready",
    desc: "Pre-fill accounts and sample data. Never type long forms live on stage.",
  },
  {
    title: "Explain simply",
    desc: "If your mom would not understand the problem in one line, rewrite the pitch.",
  },
  {
    title: "Sleep 2 hours",
    desc: "A tired team ships broken demos. Nap before the online pitch if you can.",
  },
  {
    title: "Screenshot everything",
    desc: "Save UI shots for the PPT. If the app fails, still show what you built.",
  },
  {
    title: "Credit the tools",
    desc: "Using Firebase or an AI API is fine. Say what you built on top of it.",
  },
];

export const faqs = [
  {
    q: "Is this the national SIH?",
    a: "No. This is NITK's internal screening round only.",
  },
  {
    q: "Same problem at national SIH?",
    a: "No. Internal problems are for screening. You may pick a different one later.",
  },
  {
    q: "When can we start coding?",
    a: "From 29 Aug 9 PM until the freeze at 30 Aug 9 PM.",
  },
  {
    q: "Where is the offline sprint?",
    a: "LHC-D, 30 Aug, 9 AM to 9 PM. Attendance is mandatory.",
  },
  {
    q: "Online judging format?",
    a: "4 min demo + 2 min QnA per team on 30 Aug, 9 PM to 12 AM.",
  },
  {
    q: "We barely know coding?",
    a: "Normal. Use templates, Firebase, mentors, and AI helpers. Ship one working path.",
  },
  {
    q: "Who advances where?",
    a: "Top 100 hackathon. Then up to 40 finals. Top 10 winners get a national path.",
  },
  {
    q: "Why 20 to 40 finals?",
    a: "Finalist count depends on overall project quality after online judging.",
  },
  {
    q: "Code freeze?",
    a: "Nothing pushed after 30 Aug, 9 PM. Violations risk disqualification.",
  },
  {
    q: "Who mentors?",
    a: "Final year students guide you during the 12 hr LHC-D sprint.",
  },
  {
    q: "Contacts?",
    a: "Suyash 7892799071 · Samved 8050131880 · Vishruth 8660753633",
  },
];

export const contacts = [
  { name: "Suyash D Nahar", role: "Web Enthusiasts Club NITK", phone: "7892799071" },
  { name: "Samved Sajankila", role: "IET NITK", phone: "8050131880" },
  { name: "Vishruth V Srivatsa", role: "IEEE NITK", phone: "8660753633" },
];
