import React from "react";
import styles from "./SelectedWork.module.css";

interface ProjectProps {
    title: string;
    category: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ title, category, description }) => (
    <div className={styles.project}>
        <div className={styles.frame2} />
        <div className={styles.frame3}>
            <div className={styles.textWrapper2}>{title}</div>
            <div className={styles.textWrapper3}>{category}</div>
        </div>
        <div className={styles.div}>
            <p className={styles.p}>{description}</p>
            <div className={styles.textWrapper4}>VIEW MORE</div>
        </div>
        <img className={styles.line} alt="Line" src="assets/Line.svg" width="100%" height={2} />
    </div>
);

const SelectedWork: React.FC = () => {
    return (
        <div className={styles.selectedWork}>
            <div className={styles.textWrapper}>SELECTED WORK</div>
            <Project
                title="LEAD MANAGEMENT SYSTEM"
                category="FULL STACK DEVELOPMENT"
                description="Streamline lead, proposal, event, invoice, and engagement management in the catering and event planning industry. This repo houses the source code for the comprehensive Lead Management System, ready for development, deployment, and continuous improvement. Explore organized sections for targeted functionalities!"
            />
            <Project
                title="STOCK-INFO WEB-APP"
                category="PYTHON FLASK"
                description="A Flask-based web application for retrieving financial data and recent news articles for a given stock symbol. Get insights into Earnings Per Share (EPS), Price-to-Earnings (P/E) Ratio, Dividend Yield, and stay updated with the latest stock news."
            />
            <Project
                title="GAINZ TRADING INDICATORS"
                category="TECHNICAL INDICATORS, PINESCRIPT"
                description="Elevate your trading expertise with Gainz Trading Indicators. Unleash the power of technical analysis and supercharge your strategies. Join us on GitHub and trade smarter."
            />
            {/* Add more projects as needed */}
        </div>
    );
};

export default SelectedWork;
