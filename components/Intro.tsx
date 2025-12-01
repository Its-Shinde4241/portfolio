import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface IntroProps {
    onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
    const firstName = "SHUBHAM";
    const lastName = "SHINDE";

    useEffect(() => {
        // Trigger onComplete after animation duration (approx 2.5s)
        const timer = setTimeout(() => {
            onComplete();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.5, ease: 'easeInOut' }
        }
    };

    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h1
                variants={containerVariants}
                className="font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-center px-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                <span className="sr-only">{firstName} {lastName}</span>
                <div className="flex flex-col items-center">
                    <div aria-hidden className="flex overflow-hidden">
                        {firstName.split("").map((char, index) => (
                            <motion.span
                                key={`${char}-${index}`}
                                variants={letterVariants}
                                className="inline-block text-neutral-200"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div aria-hidden className="flex overflow-hidden">
                        {lastName.split("").map((char, index) => (
                            <motion.span
                                key={`${char}-${index}`}
                                variants={letterVariants}
                                className="inline-block bg-linear-to-r from-red-600 to-orange-500 text-transparent bg-clip-text"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.h1>
        </motion.div>
    );
};