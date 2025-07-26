import React from "react";

const testimonials = [
  {
    name: "Ayesha Khan",
    review:
      "“From consultation to business license — everything was handled swiftly and professionally.”\n\nThey even arranged my Freezone setup and residency in under 48 hours. Highly recommended!",
  },
  {
    name: "Imran Yusuf",
    review:
      "“Launching a startup in Dubai felt overwhelming until I found this team.”\n\nThey broke down each step, helped me choose the best package, and got my visa sorted stress-free.",
  },
  {
    name: "Rachel Wong",
    review:
      "“Incredible experience from start to finish.”\n\nThey answered every question I had and made the entire setup process seamless. I’ll definitely refer them!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-b-xl p-6 text-white shadow-xl backdrop-blur-md bg-[#D5C299]/10 border border-white/10 border-b-[3px] border-b-[#D5C299]"
            >
              <div className="bg-blue-600 inline-flex px-4 py-1 text-sm font-medium text-white rounded-full mb-4">
                ★★★★★
              </div>
              <p className="text-base whitespace-pre-line mb-6">{item.review}</p>
              <p className="text-gray-300 text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
