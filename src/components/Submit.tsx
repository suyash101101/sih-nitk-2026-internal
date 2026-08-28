export default function Submit() {
  return (
    <section id="submit" className="py-16 bg-gradient-to-br from-sih-navy to-sih-navy-dark text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-4">SUBMIT YOUR PPT</h2>
        <p className="text-white/80 mb-2 text-lg">
          Deadline: <strong className="text-sih-saffron">29 August, 4:00 PM</strong>
        </p>
        <p className="text-white/60 text-sm mb-8 max-w-xl mx-auto">
          Submit your team&apos;s solution PPT along with the registration form. Only teams that
          submit before the deadline will be considered for the Top 100 selection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://forms.gle/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="urgent-cta inline-flex items-center justify-center gap-2 bg-sih-orange hover:bg-sih-saffron text-white font-bold px-10 py-4 rounded-full text-lg transition-colors shadow-lg"
          >
            Open PPT Submission Form →
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
          {[
            { step: "1", text: "Fill the registration form (1 member per team)" },
            { step: "2", text: "Upload your solution PPT (SIH format)" },
            { step: "3", text: "Submit before 29 Aug, 4:00 PM IST" },
          ].map((s) => (
            <div key={s.step} className="bg-white/10 rounded-xl p-4 border border-white/20">
              <span className="text-sih-saffron font-bold text-lg">{s.step}.</span>
              <p className="text-sm text-white/90 mt-1">{s.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-white/50 text-xs">
          Replace the form link above with your actual Google Form URL before sharing.
        </p>
      </div>
    </section>
  );
}
