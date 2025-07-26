export default function StepsSection() {
  return (
    <section id="how-it-works" className="bg-black text-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Get Licensed in <span className="text-[#D5C299]">3 Simple Steps.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* Step 1 */}
          <div className="bg-white bg-opacity-5 p-6 rounded-xl border border-[#D5C299]">
            <h3 className="text-xl font-semibold mb-3 text-[#D5C299]">1. Quick Chat</h3>
            <p className="text-black">
              Start by messaging our team for a quick consultation.
              <br /><br />
              We’ll ask about your business activity, ownership preferences, and visa needs, then recommend the best setup option with a transparent quote and step-by-step timeline.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white bg-opacity-5 p-6 rounded-xl border border-[#D5C299]">
            <h3 className="text-xl font-semibold mb-3 text-[#D5C299]">2. Docs Ready</h3>
            <p className="text-black">
              We prepare and submit all necessary documents, including license applications, approvals, and optional office address solutions.
              <br /><br />
              Most processes are fully remote and handled by our in-house consultants with regular updates provided.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white bg-opacity-5 p-6 rounded-xl border border-[#D5C299]">
            <h3 className="text-xl font-semibold mb-3 text-[#D5C299]">3. Launch</h3>
            <p className="text-black">
              Once your application is approved, your business license is issued digitally.
              <br /><br />
              We then assist with opening your corporate bank account and guide you through your UAE residency visa process so you can operate confidently from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
