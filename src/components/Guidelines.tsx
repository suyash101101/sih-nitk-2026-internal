const guidelines = [
  "All team members must be from NITK Surathkal.",
  "Students from different branches are encouraged to form teams.",
  "Each team must consist of exactly 6 members, including at least 1 female member.",
  "Each team will be allotted 3 problem statements and may choose 1 to develop.",
  "Only 1 member per team needs to fill the registration form.",
  "The solution PPT must be submitted by 29 August, 4:00 PM.",
];

export default function Guidelines() {
  return (
    <section id="guidelines" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-3xl font-extrabold text-sih-navy mb-12">
          GUIDELINES
        </h2>
        <ol className="space-y-5">
          {guidelines.map((item, i) => (
            <li key={i} className="flex gap-4 items-start group">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-sih-orange to-sih-green text-white font-bold flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
                {i + 1}
              </span>
              <p className="text-gray-800 text-base sm:text-lg pt-1 leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
