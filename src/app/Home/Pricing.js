import { RainbowButton } from "@/components/magicui/rainbow-button";
import React from "react";


export default function Pricing() {
    return (
        <section id="packages" className="bg-black py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#D5C299]">Transparent Setup Packages</h2>
                <p className="text-lg text-white mt-2">No Hidden Fees.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0">

                {/* Card 1 */}
                <div className="border rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">UAE Free Zone – 1 Visa Package</h3>
                        <p className="text-2xl font-bold text-[#D5C299] mb-4">Starting from AED 12,000</p>
                        <ul className="space-y-2 text-white mb-6">
                            <li>✔️ Business License</li>
                            <li>✔️ Up to 5 Business Activities</li>
                            <li>✔️ Up to 5 Shareholders</li>
                            <li>✔️ 100% Ownership</li>
                            <li>✔️ Dedicated Corporate Advisor</li>
                            <li>✔️ FREE CONSULTATION</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <RainbowButton variant="outline">Free Consultation</RainbowButton>
                    </div>
                </div>

                {/* Card 2 - Most Popular */}
                <div className="border-4 border-[#D5C299] rounded-2xl shadow-lg p-8 bg-orange-50 flex flex-col justify-between hover:shadow-xl transition-all relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D5C299] text-white text-sm font-bold px-4 py-1 rounded-full">
                        Most Popular
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Dubai Free Zone – 1 Visa Package</h3>
                        <p className="text-2xl font-bold text-[#000] mb-4">Starting from AED 17,900</p>
                        <ul className="space-y-2 text-gray-600 mb-6">
                            <li>✔️ Dubai Business License</li>
                            <li>✔️ Up to 3 Business Activities</li>
                            <li>✔️ Multiple Shareholders Allowed</li>
                            <li>✔️ Access to Flexi Desk Facilities</li>
                            <li>✔️ 100% Ownership</li>
                            <li>✔️ Dedicated Corporate Advisor</li>
                            <li>✔️ FREE CONSULTATION</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <RainbowButton variant="default">Free Consultation</RainbowButton>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="border rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Dubai Free Zone – 0 Visa Package</h3>
                        <p className="text-2xl font-bold text-[#D5C299] mb-4">Starting from AED 12,500</p>
                        <ul className="space-y-2 text-white mb-6">
                            <li>✔️ Business License</li>
                            <li>✔️ 1 Business Activity</li>
                            <li>✔️ 1 Shareholder</li>
                            <li>✔️ 100% Ownership</li>
                            <li>✔️ Dedicated Corporate Advisor</li>
                            <li>✔️ Co-Working Access</li>
                            <li>✔️ Combine Trading + E-Com</li>
                            <li>✔️ FREE CONSULTATION</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <RainbowButton variant="outline">Free Consultation</RainbowButton>
                    </div>
                </div>

            </div>
        </section>
    );
}
