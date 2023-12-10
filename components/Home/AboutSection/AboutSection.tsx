// components/Home/AboutSection/AboutSection.tsx

import React from "react";
import styles from "./AboutSection.module.css"; // Import styles from module.css

const AboutSection: React.FC = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.frame} />
            <div className={styles.div}>
                <div className={styles.textWrapper}>SOFTWARE DEVELOPER</div>
                <p className={styles.helloIMAkash}>
                    Hello! I'm Akash Sasikumar, a Computer Science and Engineering student at SRMIST. I am passionate about
                    crafting immersive UI/UX experiences and blending creativity with technology.
                </p>
                <div className={styles.frame2}>
                    <div className={styles.textWrapper2}>WANT TO KNOW MORE?</div>
                    <div className={styles.textWrapper3}>READ MORE</div>
                </div>
            </div>
            <div className={styles.line} />
        </div>
    );
};

export default AboutSection;
