import React from 'react';
import { useLocation } from "react-router-dom";
import {useState} from 'react';
import Testpage from './Testpage';
import Gaugebar from './Gaugebar';
import './Testresult.css'


const Testresult = () => {

    const location = useLocation();
    const { weightedAnswers } = location.state || {};

    const percentages = weightedAnswers.map((row) =>
        Math.round(row.reduce((sum, value) => sum + value, 0) / (row.length * 2) * 100)
    );

    const tendencies = [ ['I', 'E'], ['N', 'S'], ['F', 'T'], ['P', 'J'] ]
    const tendency_idx = percentages.map((percentage) => {
        if(percentage > 0)
            return 1;
        return 0;
    });

    const colorSets = [
        { "--bar-color": "#4298B4" },
        { "--bar-color": "#E4AE3A" },
        { "--bar-color": "#33A474" },
        { "--bar-color": "#88619A" }
    ];


    return (
        <>
            <div>
                <h1>테스트 결과</h1>
                <div>
                    <h1>당신의 mbti는 {tendencies[0][tendency_idx[0]]}{tendencies[1][tendency_idx[1]]}{tendencies[2][tendency_idx[2]]}{tendencies[3][tendency_idx[3]]} 입니다.</h1>
                </div>
                <div className="gauge-container">
                    {percentages.map((percentage, index) => (
                        <Gaugebar 
                            percentage={percentage} 
                            leftLabel={tendencies[index][0]} 
                            rightLabel={tendencies[index][1]}
                            colorVars={colorSets[index]}
                        />
                    ))}
                </div>

            </div>

        </>
    );
}

export default Testresult