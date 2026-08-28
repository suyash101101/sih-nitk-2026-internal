function SIHBrainLogo() {
  return (
    <svg viewBox="0 0 80 100" className="h-16 w-16" aria-hidden="true">
      <path d="M40 5 C25 5 15 20 15 35 C15 50 25 60 40 65 C55 60 65 50 65 35 C65 20 55 5 40 5Z" fill="none" />
      <path d="M15 35 C15 35 20 45 40 50 C60 45 65 35 65 35" fill="none" stroke="#e8751a" strokeWidth="1" />
      <path d="M15 35 L15 55 C15 70 25 80 40 85 C55 80 65 70 65 55 L65 35" fill="#e8751a" opacity="0.3" />
      <path d="M40 50 L40 85" stroke="#138808" strokeWidth="1" />
      <rect x="30" y="85" width="20" height="8" rx="2" fill="#1b3a6b" />
      <rect x="33" y="93" width="14" height="4" rx="1" fill="#1b3a6b" opacity="0.7" />
      <text x="40" y="42" textAnchor="middle" fontSize="6" fill="#138808" fontFamily="monospace">10110</text>
      <text x="40" y="52" textAnchor="middle" fontSize="5" fill="#e8751a" fontFamily="monospace">01001</text>
    </svg>
  );
}

const contacts = [
  { name: "Suyash D Nahar", role: "Convenor, Web Enthusiasts Club NITK", phone: "7892799071" },
  { name: "Samved Sajankila", role: "Convenor, IET NITK", phone: "8050131880" },
  { name: "Vishruth V Srivatsa", role: "Convenor, IEEE NITK", phone: "8660753633" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <SIHBrainLogo />
            <div>
              <p className="text-2xl font-black text-sih-navy">SIH</p>
              <p className="text-xs text-gray-500 font-medium">
                SMART INDIA HACKATHON
                <br />
                Innovation · Technology · Solutions
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xl font-bold text-sih-navy">Build. Innovate. Represent NITK.</p>
            <p className="text-sih-orange font-semibold mt-1">See you at SIH! 🇮🇳</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-bold text-sih-navy mb-4 text-center">Contact Us</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <div key={c.name} className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="font-bold text-sih-navy text-sm">{c.name}</p>
                <p className="text-xs text-gray-500 mt-1">{c.role}</p>
                <a href={`tel:${c.phone}`} className="text-sih-orange font-semibold text-sm mt-2 inline-block hover:underline">
                  {c.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2026 Smart India Hackathon — NITK Internal Screening Round · WebClub · IET · IEEE
        </p>
      </div>
    </footer>
  );
}
