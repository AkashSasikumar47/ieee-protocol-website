// components/Home/FooterSection/FooterSection.tsx

import React from "react";
import styles from "./FooterSection.module.css"; // Import styles from module.css

const FooterSection: React.FC = () => {
    return (
        <div className={styles.footerSection}>
            <div className={styles.frame} />
            <div className={styles.div}>
                <div className={styles.letsWorkTogether}>LET'S WORK TOGETHER</div>
                <p className={styles.whetherYoure}>
                    Whether you're looking to enhance your digital presence, optimize your software solutions, or delve into the
                    world of financial analysis, I am here to collaborate and create something extraordinary. Let's connect and
                    explore the possibilities!
                </p>
                <div className={styles.textWrapper}>GET IN TOUCH</div>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <div className={styles.textWrapper2}>EMAIL</div>
                    <div className={styles.textWrapper3}>LINKEDIN</div>
                </div>
                <div className={styles.link}>
                    <div className={styles.textWrapper2}>GITHUB</div>
                    <div className={styles.textWrapper3}>INSTAGRAM</div>
                </div>
            </div>
            <div className={styles.textWrapper4}>©Akash Sasikumar 2024</div>
        </div>
    );
};

export default FooterSection;
