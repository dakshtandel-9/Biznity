"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What’s the difference between Freezone and Mainland?",
        answer: "Freezone is great for remote businesses. Mainland is ideal if you want to operate across the UAE or serve local clients.",
    },
    {
        question: "How fast can I get my license?",
        answer: "We typically deliver business licenses in 1–3 working days, depending on your setup type.",
    },
    {
        question: "Can I open a bank account with my license?",
        answer: "Yes. We assist you in opening a corporate bank account once your license is approved.",
    },
    {
        question: "Do I need to live in Dubai to open a business?",
        answer: "No, you can set up remotely and apply for a visa when ready.",
    },
    {
        question: "What documents do I need to start?",
        answer: "Just your passport copy and a few details about your business idea.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faqs" className="bg-black text-white py-16 px-4 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D5C299]">Frequently Asked Questions</h2>
                <p className="mb-8 text-gray-400">
                    Anything else you’d like to know? Get in touch with our consultants and we’d be happy to discuss your questions.
                </p>
                <button className="bg-[#D5C299] text-black px-6 py-3 rounded-xl font-semibold mb-12 hover:opacity-90 transition">
                    FREE CONSULTATION
                </button>
                <div className="text-left space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-700 rounded-xl p-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex justify-between items-center text-lg font-medium text-left text-[#D5C299] hover:text-white transition"
                            >
                                {faq.question}
                                <ChevronDown className={`w-5 h-5 transform transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
                            </button>
                            {openIndex === idx && (
                                <p className="mt-3 text-gray-300">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
