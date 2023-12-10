// components/Home/MyProcessSection/MyProcessSection.tsx

import React from "react";
import styles from "./MyProcessSection.module.css"; // Import styles from module.css

const MyProcessSection: React.FC = () => {
    return (
        <div className={styles.myProcessSection}>
            <div className={styles.textWrapper}>MY PROCESS</div>
            <div className={styles.frame}>
                <div className={styles.frame}>
                    <div className={styles.div}>
                        01
                        <br />
                        ANALYZE
                    </div>
                    <p className={styles.p}>
                        In the initial phase of my process, I meticulously examine project requirements, user needs, and technical
                        constraints to lay a solid foundation for informed decision-making, ensuring a comprehensive understanding
                        before diving into development.
                    </p>
                </div>
                <div className={styles.frame}>
                    <div className={styles.div}>
                        02
                        <br />
                        RESEARCH
                    </div>
                    <p className={styles.p}>
                        Engaging in thorough research, I explore the latest industry trends, user behaviors, and emerging technologies.
                        This step enables me to integrate innovative solutions, leverage best practices, and ensure that my work is at
                        the forefront of the ever-evolving landscape.
                    </p>
                </div>
                <div className={styles.frame2}>
                    <div className={styles.div}>
                        03
                        <br />
                        DEVELOP
                    </div>
                    <p className={styles.p}>
                        Armed with insights from analysis and research, I transition into the development phase. Here, I apply my skills
                        in software engineering and design to bring concepts to life, adhering to best coding practices and design
                        principles for robust and user-friendly solutions.
                    </p>
                </div>
                <div className={styles.frame}>
                    <div className={styles.div}>
                        04
                        <br />
                        ITERATE
                    </div>
                    <p className={styles.p}>
                        Recognizing the importance of refinement, I embrace an iterative approach. Feedback and testing fuel continuous
                        improvement, allowing me to fine-tune and enhance projects, ensuring they evolve to meet evolving needs and
                        exceed expectations.
                    </p>
                </div>
            </div>
            <img className={styles.line} alt="Line" src="line-7.svg" />
        </div>
    );
};

export default MyProcessSection;
