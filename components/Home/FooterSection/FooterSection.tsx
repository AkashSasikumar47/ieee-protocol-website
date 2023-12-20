import React from "react";
import styles from "./FooterSection.module.css";
import Image from 'next/image';

const FooterSection: React.FC = () => {
    return (
        <div className={styles.footerSection}>
            <Image className={styles.image} alt="Footer Image" src="/assets/images/ContactSecion_Image.jpg" width={1920} height={1080} />
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
            <div className={styles.textWrapper4}>&#169; {new Date().getFullYear()} Akash Sasikumar. All rights reserved.</div>
        </div>
    );
};

export default FooterSection;
