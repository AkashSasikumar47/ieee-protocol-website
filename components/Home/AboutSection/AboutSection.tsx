import React from "react";
import styles from "./AboutSection.module.css";
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <div className={styles.aboutSection}>
            <Image className={styles.customImage} alt="Custom Image" src="/assets/images/AboutSection_Image.jpg" layout="responsive" width={500} height={300} />
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
            <img className={styles.line} alt="Line" src="/assets/Line.svg" width="100%" height={2} />
        </div>
    );
};

export default AboutSection;
