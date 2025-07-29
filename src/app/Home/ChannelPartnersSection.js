import React from "react";

const logoPaths = [
    "/partner-logo/1.avif",
    "/partner-logo/2.webp",
    "/partner-logo/3.png",
    "/partner-logo/4.png",
    "/partner-logo/5.svg",
    "/partner-logo/6.webp",
];

export default function ChannelPartnersSection() {
    return (
        <section className="bg-black py-16 px-6 md:px-20 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#D5C299] mb-12">
                    Our Channel Partners
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
                    {logoPaths.map((src, index) => (
                        <div
                            key={index}
                            className="bg-[#111] border border-[#D5C299]/30 rounded-xl p-4 hover:bg-[#1a1a1a] transition"
                        >
                            <img
                                src={src}
                                alt={`Partner ${index + 1}`}
                                className="h-12 md:h-16 object-contain mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
