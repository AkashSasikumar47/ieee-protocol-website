import React from "react";
import styles from "./Navbar.module.css";
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.div}>
                <div className={styles.textWrapper}>BIO</div>
                <div className={styles.textWrapper}>ABOUT</div>
                <div className={styles.textWrapper}>PROJECTS</div>
                <div className={styles.textWrapper}>CONTACT</div>
            </div>
            <Image className={styles.line} alt="Line" src="/line-1.svg" width={1440} height={2} />
        </div>
    );
};

export default Navbar;
