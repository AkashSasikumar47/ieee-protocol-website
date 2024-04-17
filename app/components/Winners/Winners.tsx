import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Winners = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px'
    });

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base"
                >
                    WINNERS
                </motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl"
                >
                    Congratulations to the Winners of PROTOCOL 1.0!
                </motion.h2>
                <motion.h4
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-screen-sm font-sans font-base text-gray-500 text-sm sm:text-lg"
                >
                    We are thrilled to announce the top three teams who excelled in the hackathon.
                </motion.h4>
            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2
                        }
                    }
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {/* Winner Card 1 */}
                <motion.div variants={cardVariants} className="bg-white rounded-lg shadow-md p-6">
                    <motion.h2 className="text-xl font-bold text-blue-800 mb-2">1st Position: PIE</motion.h2>
                    <ul className="list-disc ml-6">
                        <motion.li>Shivam Umang Mitter (RA2111003011074)</motion.li>
                        <motion.li>Shinjan Patra (RA2211003011869)</motion.li>
                    </ul>
                </motion.div>

                {/* Winner Card 2 */}
                <motion.div variants={cardVariants} className="bg-white rounded-lg shadow-md p-6">
                    <motion.h2 className="text-xl font-bold text-blue-800 mb-2">2nd Position: Watch Dogs</motion.h2>
                    <ul className="list-disc ml-6">
                        <motion.li>Vijai Krishna Prasanna (RA2211018010007)</motion.li>
                        <motion.li>Sreeram Reji Madhavan (RA2211018010028)</motion.li>
                    </ul>
                </motion.div>

                {/* Winner Card 3 */}
                <motion.div variants={cardVariants} className="bg-white rounded-lg shadow-md p-6">
                    <motion.h2 className="text-xl font-bold text-blue-800 mb-2">3rd Position: Cyber Life</motion.h2>
                    <ul className="list-disc ml-6">
                        <motion.li>Parth Nath Chauhan (RA2311030010162)</motion.li>
                        <motion.li>Aayush Namdeo (RA2311027010189)</motion.li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Winners;