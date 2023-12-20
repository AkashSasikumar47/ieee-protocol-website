import React from "react";
import styles from "./SelectedWork.module.css";
import Image from 'next/image';

interface ProjectProps {
    title: string;
    category: string;
    description: string;
    imageSrc: string;
}

const Project: React.FC<ProjectProps> = ({ title, category, description, imageSrc }) => (
    <div className={styles.project}>
        <div className={styles.imageWrapper}>
            <Image
                className={styles.customImage}
                alt={`Project Image - ${title}`}
                src={imageSrc}
                width={500}
                height={300}
                layout="responsive"
            />
        </div>
        <div className={styles.frame3}>
            <div className={styles.textWrapper2}>{title}</div>
            <div className={styles.textWrapper3}>{category}</div>
        </div>
        <div className={styles.div}>
            <p className={styles.p}>{description}</p>
            <div className={styles.textWrapper4}>VIEW MORE</div>
        </div>
        <img className={styles.line} alt="Line" src="/assets/Line.svg" width="100%" height={2} />
    </div>
);

const SelectedWork: React.FC = () => {
    return (
        <div className={styles.selectedWork}>
            <div className={styles.textWrapper}>SELECTED WORK</div>
            <Project
                title="LEAD MANAGEMENT SYSTEM"
                category="FULL STACK DEVELOPMENT"
                description="Streamline lead, proposal, invoice, and engagement management in the catering and event planning industry. This repo houses the source code for the comprehensive Lead Management System, ready for development, deployment, and continuous improvement. Explore organized sections for targeted functionalities!"
                imageSrc="/assets/images/project1.png" // Replace with the correct image path
            />
            <Project
                title="STOCK-INFO WEB-APP"
                category="PYTHON FLASK"
                description="A Flask-based web application for retrieving financial data and recent news articles for a given stock symbol. Get insights into Earnings Per Share (EPS), Price-to-Earnings (P/E) Ratio, Dividend Yield, and stay updated with the latest stock news."
                imageSrc="/assets/images/project2.png" // Replace with the correct image path
            />
            <Project
                title="GAINZ TRADING INDICATORS"
                category="TECHNICAL INDICATORS, PINESCRIPT"
                description="Elevate your trading expertise with Gainz Trading Indicators. Unleash the power of technical analysis and supercharge your strategies. Join us on GitHub and trade smarter."
                imageSrc="/assets/images/project3.png" // Replace with the correct image path
            />
            {/* Add more projects as needed */}
        </div>
    );
};

export default SelectedWork;
