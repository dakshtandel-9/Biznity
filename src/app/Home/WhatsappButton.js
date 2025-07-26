import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    const phoneNumber = "0561244423";

    return (
        <a
            href={`https://wa.me/0561244423`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-2xl" />
        </a>
    );
}
