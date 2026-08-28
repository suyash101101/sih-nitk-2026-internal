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
    body: "If the problem is campus lost-and-found: a form to report an item + a list to search items. That is enough for a demo.",
  },
  {
    kicker: "Team Roles",
    heading: "Split work early",
    body: "Do not all sit on one laptop. Assign: 1 person UI, 1 person data, 1 person demo script, 1 person PPT, others support.",
  },
  {
    kicker: "Team Roles",
    heading: "Use what each person knows",
    body: "Someone good at design? Screens. Someone good at explaining? Pitch. Someone tried Python once? Backend helper. Play to strengths.",
  },
  {
    kicker: "How to Start",
    heading: "Do not build from zero",
    body: "Copy a free template. Use Firebase, Glitch, or a Next.js starter. Starting blank wastes hours.",
  },
  {
    kicker: "How to Start",
    heading: "Ask AI to teach you",
    body: "Use ChatGPT or Cursor. Paste your error. Ask: explain like I am a first year. Then change one line at a time.",
  },
  {
    kicker: "How to Start",
    heading: "YouTube + docs",
    body: "Search: Firebase auth tutorial, Flutter todo app, Arduino sensor read. Follow one tutorial end to end, then adapt it.",
  },
  {
    kicker: "Simple Stacks",
    heading: "Easiest web path",
    body: "HTML/CSS + Firebase, or React + Firebase, or Glide / FlutterFlow if you want low-code. Deploy on Vercel if needed.",
  },
  {
    kicker: "Simple Stacks",
    heading: "Easiest app path",
    body: "Flutter + Firebase, or a simple Python Streamlit app for data problems. Keep the UI to 2 or 3 screens.",
  },
  {
    kicker: "Simple Stacks",
    heading: "Hardware path",
    body: "Arduino / ESP32 + one sensor + serial monitor or a phone app. Show live readings. Hardware is welcome.",
  },
  {
    kicker: "Build Order",
    heading: "Step 1: Write the story",
    body: "On paper: Who has the problem? What do they click? What do they see? If you cannot explain it in 30 seconds, simplify.",
  },
  {
    kicker: "Build Order",
    heading: "Step 2: Draw 3 screens",
    body: "Home → Action → Result. Paper wireframes are fine. Do not open Figma for 4 hours.",
  },
  {
    kicker: "Build Order",
    heading: "Step 3: Make one screen work",
    body: "Login or home page that loads. Celebrate. Then connect one button to real data.",
  },
  {
    kicker: "Build Order",
    heading: "Step 4: One full path",
    body: "User starts → does the main action → sees the result. That full path is your demo. Everything else is bonus.",
  },
  {
    kicker: "Timeline",
    heading: "Tonight (after 9 PM)",
    body: "Create GitHub repo. Set up the project. Finish wireframes. Decide stack. Get Hello World running.",
  },
  {
    kicker: "Timeline",
    heading: "Morning at LHC-D",
    body: "9 AM to 1 PM: finish the core happy path with mentors nearby. Ask for help early. Stuck for 20 mins? Call a mentor.",
  },
  {
    kicker: "Timeline",
    heading: "Afternoon at LHC-D",
    body: "1 PM to 6 PM: polish UI, add 1 or 2 extra features max, test on another laptop or phone.",
  },
  {
    kicker: "Timeline",
    heading: "Evening before freeze",
    body: "6 PM to 9 PM: practice the 4 min demo, write README, freeze the repo at 9 PM sharp.",
  },
  {
    kicker: "Demo Prep",
    heading: "Script your 4 minutes",
    body: "0:30 problem · 1:00 solution idea · 2:00 live demo · 0:30 impact · leave buffer. Rehearse twice.",
  },
  {
    kicker: "Demo Prep",
    heading: "Have a backup video",
    body: "Record a screen capture of the happy path. If WiFi dies during online judging, play the video.",
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
    a: "Top 100 hackathon. Top 20 to 40 finals. Top 10 winners + national path.",
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
