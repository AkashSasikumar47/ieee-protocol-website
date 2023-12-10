// components/Home/SelectedWork/SelectedWork.tsx

import React from "react";
import styles from "./SelectedWork.module.css"; // Import styles from module.css

const SelectedWork: React.FC = () => {
    return (
        <div className={styles.selectedWork}>
            <div className={styles.textWrapper}>SELECTED WORK</div>
            <div className={styles.frame}>
                <div className={styles.div}>
                    <div className={styles.frame2} />
                    <div className={styles.frame3}>
                        <div className={styles.textWrapper2}>LEAD MANAGEMENT SYSTEM</div>
                        <div className={styles.textWrapper3}>FULL STACK DEVELOPMENT</div>
                    </div>
                    <div className={styles.div}>
                        <p className={styles.p}>
                            Streamline lead, proposal, event, invoice, and engagement management in the catering and event planning
                            industry. This repo houses the source code for the comprehensive Lead Management System, ready for
                            development, deployment, and continuous improvement. Explore organized sections for targeted functionalities!
                        </p>
                        <div className={styles.textWrapper4}>VIEW MORE</div>
                    </div>
                </div>
                <img className={styles.line} alt="Line" src="line-4.svg" />
            </div>
            <div className={styles.frame4}>
                <div className={styles.frame5}>
                    <div className={styles.frame2} />
                    <div className={styles.frame3}>
                        <div className={styles.textWrapper2}>STOCK-INFO WEB-APP</div>
                        <div className={styles.textWrapper3}>PYTHON FLASK</div>
                    </div>
                    <div className={styles.div}>
                        <p className={styles.p}>
                            A Flask-based web application for retrieving financial data and recent news articles for a given stock
                            symbol. Get insights into Earnings Per Share (EPS), Price-to-Earnings (P/E) Ratio, Dividend Yield, and
                            stay updated with the latest stock news.
                        </p>
                        <div className={styles.textWrapper4}>VIEW MORE</div>
                    </div>
                </div>
                <img className={styles.line} alt="Line" src="line-5.svg" />
            </div>
            <div className={styles.frame6}>
                <div className={styles.frame7}>
                    <div className={styles.frame8} />
                    <div className={styles.frame3}>
                        <div className={styles.textWrapper2}>GAINZ TRADING INDICATORS</div>
                        <div className={styles.textWrapper3}>TECHNICAL INDICATORS, PINESCRIPT</div>
                    </div>
                    <div className={styles.div}>
                        <p className={styles.p}>
                            Elevate your trading expertise with Gainz Trading Indicators. Unleash the power of technical analysis and
                            supercharge your strategies. Join us on GitHub and trade smarter.
                        </p>
                        <div className={styles.textWrapper4}>VIEW MORE</div>
                    </div>
                </div>
                <img className={styles.line} alt="Line" src="image.svg" />
            </div>
        </div>
    );
};

export default SelectedWork;
