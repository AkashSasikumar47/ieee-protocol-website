// components/Home/HeroSection/HeroSection.tsx

import React from "react";
import styles from "./HeroSection.module.css";
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.textWrapper}>AKASH SASIKUMAR</div>
            <div className={styles.frame} />
            <Image className={styles.line} alt="Line" src="assets/Line.svg" width={1440} height={2} />
        </div>
    );
};

export default HeroSection;
