const dates = [
  { date: "28 August, 4:00 PM", activity: "PPT Submission Form Opens", highlight: false },
  { date: "29 August, 4:00 PM", activity: "PPT Submission Form Closes", highlight: true },
  { date: "30 August, 9:00 AM – 9:00 PM", activity: "Offline Hackathon Sprint @ CCC, NITK", highlight: false },
  { date: "30 August, 9:00 PM – 12:00 AM", activity: "Online Presentation (Top 100 Teams)", highlight: false },
  { date: "31 August", activity: "Final Presentation Round (Venue TBA)", highlight: false },
  { date: "31 August onwards", activity: "Selection of Top 10 Teams for National SIH", highlight: true },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="section-title text-3xl font-extrabold text-sih-navy mb-12">
          IMPORTANT DATES
        </h2>
        <div className="space-y-0">
          {dates.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4 border-b border-gray-200 last:border-0 ${
                item.highlight ? "bg-sih-orange/5 -mx-4 px-4 rounded-lg" : ""
              }`}
            >
              <time className="font-mono text-sm font-semibold text-sih-orange sm:w-56 flex-shrink-0">
                {item.date}
              </time>
              <span className={`text-base ${item.highlight ? "font-bold text-sih-navy" : "text-gray-700"}`}>
                {item.activity}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
