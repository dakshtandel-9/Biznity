import React from "react";

const services = [
    "PRO Services",
    "Bookkeeping and Auditing",
    "Business Setup",
    "Banking",
    "Property & Investment – Golden Visa",
    "Tax Consultancy",
];

export default function ServicesSection() {
    return (
        <section id="services" className="bg-black py-16 px-6 md:px-20 text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#D5C299] mb-10">
                    Our Services
                </h2>
                <ul className="grid md:grid-cols-2 gap-6 text-lg">
                    {services.map((service, index) => (
                        <li
                            key={index}
                            className="bg-[#111111] border border-[#D5C299] rounded-xl p-6 hover:bg-[#1a1a1a] transition"
                        >
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
