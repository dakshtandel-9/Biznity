import FlightLoader from "@/components/FlightLoader";
import React from "react";

export default function ConsultationForm() {
    return (
        <section id="cost-calculator" className="bg-black py-20 px-6 lg:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Heading + Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Get a <span className="text-[#D5C299]">Free</span><br />
                        <span className="text-[#D5C299]">Consultation.</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        <strong>Mainland or Freezone?</strong> Our experts will guide you to the best option with
                        zero guesswork. No hidden costs. No delays. Just clarity, fast.
                    </p>
                </div>

                {/* Right: Cal.com Embed + Loader */}
                <div className="bg-[rgba(21,19,16,0.7)] backdrop-blur-lg p-6 rounded-2xl border border-[#D5C299]/30 shadow-2xl relative">
                    {/* Loader on top, can be hidden conditionally if needed */}
                    <FlightLoader />
                    
                    <iframe
                        src="https://cal.com/biznity/30min?overlayCalendar=true&date=2025-07-31"
                        width="100%"
                        height="500"
                        className="w-full rounded-xl"
                        style={{ border: "none" }}
                        allow="camera; microphone; fullscreen; display-capture"
                        title="Schedule Free Consultation"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
