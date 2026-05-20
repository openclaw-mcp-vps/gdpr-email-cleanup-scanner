export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Email Lists for{" "}
          <span className="text-[#58a6ff]">GDPR Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your CSV or Excel subscriber list and instantly identify contacts missing consent timestamps, source tracking, or double opt-in verification — before regulators do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No database. No data stored. Processed server-side and discarded.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["Consent Gaps", "Missing timestamps & sources"],
            ["Double Opt-In", "Verify confirmation records"],
            ["PDF Reports", "Actionable compliance steps"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited CSV / Excel uploads",
              "Consent timestamp detection",
              "Source & opt-in verification",
              "Downloadable compliance report",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "What file formats are supported?",
              "We support CSV and Excel (.xlsx) files. Your file is processed server-side and immediately discarded — nothing is stored."
            ],
            [
              "What exactly does the scanner check?",
              "It checks for missing consent timestamps, absent source/channel tracking fields, and whether double opt-in confirmation is recorded per subscriber."
            ],
            [
              "Is this a substitute for legal advice?",
              "No. The scanner flags technical compliance gaps in your data. Always consult a qualified GDPR attorney for legal guidance specific to your situation."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2 text-sm">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-[#6e7681] text-xs">
        &copy; {new Date().getFullYear()} GDPR Email Cleanup Scanner. For EU SaaS &amp; email marketers.
      </footer>
    </main>
  );
}
