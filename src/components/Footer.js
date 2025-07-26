import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 px-4 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                {/* Blue rounded box with logo */}
                <div className="bg-[#ffffff] w-full rounded-xl p-6 flex items-center justify-center">
                    <Image
                        src="/logo.png" // ensure logo.png is in /public
                        alt="OpenZone Logo"
                        width={180}
                        height={60}
                        priority
                    />
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-300 text-center">
                    Copyright © 2025. All Rights Reserved by Starting Biznity.
                </p>
            </div>
        </footer>
    );
}
