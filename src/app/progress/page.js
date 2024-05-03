import React from 'react';
import styles from './progresspage.module.css'; // Import CSS module
import MyPieChart from './piechart';

function ProgressPage() {
    return (
        <div className={styles.ProgressContainer}>
            <h1>My Progress</h1>
            <div>
                <h2>Bachelor of Arts</h2>
                <h3>Harvard College:</h3>
                <p>Bachelor of Arts</p>
                <p><strong>Concentration:</strong> Computer Science</p>
                <p><strong>Expected Graduation Date:</strong> 5/27/2026</p>
                <p><strong>Social Class:</strong> 2026</p>
            </div>
            <div>
                <h3>Year in School:</h3>
                <p>Second-Year</p>
                <h3>House:</h3>
                <p>Winthrop</p>
            </div>
            <div>
                <h3>Secondary Field(s):</h3>
                <p>Molecular and Cellular Biology</p>
                <h3>Language Citation(s):</h3>
                <p>French</p>
                <h3>Admitted Term:</h3>
                <p>2022 Fall</p>
            </div>
            <div className={styles.MyPieChartContainer}>
                <MyPieChart></MyPieChart>
            </div>
        </div>
    );
}

export default ProgressPage;
