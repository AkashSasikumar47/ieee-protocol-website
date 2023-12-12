import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.div}>
                <div className={styles.textWrapper}>BIO</div>
                <div className={styles.textWrapper}>ABOUT</div>
                <div className={styles.textWrapper}>PROJECTS</div>
                <div className={styles.textWrapper}>CONTACT</div>
            </div>
            <img className={styles.line} alt="Line" src="assets/Line.svg" width="100%" height={2} />
        </div>
    );
};

export default Navbar;