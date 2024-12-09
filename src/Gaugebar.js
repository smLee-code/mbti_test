import React from 'react';
import './Gaugebar.css'; // CSS 파일

const Gaugebar = ({ percentage, leftLabel, rightLabel, colorVars }) => {
    const label = percentage > 0 ? rightLabel : leftLabel;
    const label_percentage = percentage > 0 ? (percentage + 100) / 2 : 100 - (percentage + 100) / 2;
    const marker_percentage = ((percentage + 100) / 2 - 50) * 0.95 + 50;

    return (
        <>
            <div className="bar-wrapper">
                <span className="bar-percentage">{label} : {label_percentage}%</span>
                <div className="bar" style={colorVars}>
                    <div
                        className="bar-marker"
                        style={{ left: `calc(${marker_percentage}%)` }}
                    ></div>
                </div>
                <div className="bar-labels">
                    <span>{leftLabel}</span>
                    <span>{rightLabel}</span>
                </div>
                
            </div>
        </>
    );
};

export default Gaugebar;