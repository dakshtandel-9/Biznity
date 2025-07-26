import React from "react";
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="bg-black text-white py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Image */}
                <div>

                    <Image
                        src="/dubai-bg-2.jpg" // Replace with your actual image path
                        alt="Freezone Office"
                        width={1920}           // Set appropriate width
                        height={1080}          // Set appropriate height
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Right: Info Box */}
                <div className="bg-[#151310]/70 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-[#D5C299]">Biznity</span>
                    </h2>
                    <p className="text-gray-300 mb-6">
                        With over a decade of experience in the business setup industry, we’ve helped hundreds of entrepreneurs, startups, and established companies turn their business ideas into reality.

                        At Biznity, we specialize in cost-effective, streamlined, and transparent company formation services across the UAE mainland, free zones, and offshore jurisdictions. Whether you’re a first-time entrepreneur or an expanding business, our mission is to make your setup process simple, stress-free, and tailored to your goals.

                        Our team of seasoned consultants combines deep local knowledge with international best practices to guide you through every stage — from choosing the right license to securing your visa, opening a corporate bank account, and staying compliant with regulations.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">Why Choose Biznity?</h3>

                    <ul className="space-y-3 text-gray-200">
                        {[
                            "10+ Years of Market Experience",
                            "Affordable & Transparent Pricing",
                            "Fast Turnaround & Hassle-Free Process",
                            "Full Setup Support: Licensing, Visa, Bank Account & More",
                            "Free Consultation & Custom Setup Plans",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="text-[#D5C299] mt-1">✔</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-400 mt-6">
                        We’re proud to be a trusted partner for businesses of all sizes looking to launch and grow in the UAE. Let us handle the paperwork so you can focus on your passion.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
