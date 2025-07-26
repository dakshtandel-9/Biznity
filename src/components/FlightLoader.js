'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FlightLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2500); // show loader for 2.5s
        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 200, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="relative w-[120px] h-[120px]"
            >
                <Image
                    src="/plane.png" // Replace with your airplane image (transparent PNG)
                    alt="Loading Plane"
                    layout="fill"
                    objectFit="contain"
                />
            </motion.div>
        </div>
    );
};

export default FlightLoader;
