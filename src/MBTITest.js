import React from 'react';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import Testpage from './Testpage';


const questions = 
[
    // E  I
    [   
        ["주기적으로 새로운 친구를 사귄다.", 1],
        ["모르는 사람과 관계를 맺는 것이 부담스럽다.", -1],
        ["휴일에는 집 밖에 나가 놀아야한다.", 1],
        ["폭넓은 인간관계 보다 소수의 사람들과 깊이있는 관계를 맺는 편이다.", -1],
        ["전화보다는 문자 메시지, 카톡을 더 선호한다.", -1],
        ["질문을 받으면 깊이 생각하지 않고 대답하는 편이다.", 1],
        ["여럿이 함께하는 취미 및 여가 활동을 선호한다.", 1]  
    ],
    // S  N
    [   
        ["종종 일어날리 없는 미래에 대해 상상하곤 한다.", -1],
        ["추상적인 개념보다 구체적인 사실을 더 선호한다.", 1],
        ["아이디어를 떠올릴 때, 작은 디테일보다 큰 그림을 먼저 본다.", -1],
        ["현실적인 문제를 해결하는 것이 나의 강점이다.", 1],
        ["일상에서 반복되는 일이나 규칙적인 작업에 더 편안함을 느낀다.", 1],
        ["독창적이고 새로운 방식을 시도하는 것을 좋아한다.", -1],
        ["다른 사람들이 놓치는 작은 세부사항을 잘 알아챈다.", 1]  
    ],
    // T  F
    [   
        ["나는 논리적이고 객관적으로 판단하는 것을 선호한다.", 1],
        ["문제를 해결할 때, 감정보다 사실과 데이터를 중시한다.", 1],
        ["다른 사람들의 감정을 쉽게 이해하고 공감할 수 있다.", -1],
        ["결정을 내릴 때, 옳고 그름보다 사람들에게 미칠 영향을 더 중요하게 생각한다.", -1],
        ["감정적으로 힘든 상황에서도 냉철하게 판단하려고 노력한다.", 1],
        ["중요한 결정을 내릴 때, 내가 속한 집단의 화합이 중요하다.", -1],
        ["나는 종종 사람들이 더 나은 기분이 들도록 돕고 싶어 한다.", -1]
    ],
    // J  P
    [   
        ["나는 계획적인 삶을 선호하며, 스케줄에 맞게 행동하려고 한다.", 1],
        ["예측할 수 없는 상황에서도 유연하게 대처할 수 있다.", -1],
        ["중요한 일을 시작하기 전에 철저히 계획을 세운다.", 1],
        ["일을 시작할 때, 계획보다는 즉흥적으로 처리하는 것을 선호한다.", -1],
        ["마감 기한이 정해진 일이 있을 때, 미리미리 준비를 시작한다.", 1],
        ["예상치 못한 변화에 스트레스를 느끼기보다 기회를 찾으려고 한다.", -1],
        ["일을 완벽히 끝내기 전에 항상 더 나은 방법이 있을지 고민한다.", -1],
    ]
];

const MBTITest = () => {
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState(
        Array.from({length: questions.length}, () => Array(questions[0].length).fill(-10))
    );

    const [weightedAnswers, setWeightedAnswers] = useState(
        Array.from({length: questions.length}, () => Array(questions[0].length).fill(-10))
    );

    const sumsByPage = weightedAnswers.map((row) => row.reduce((sum, value) => sum + value, 0));

    const handleAnswerChange = (page, questionIndex, value) => {
        setAnswers((prev) => {
            const updatedAnswers = prev.map((row) => [...row]);
            updatedAnswers[page][questionIndex] = value;
            return updatedAnswers;
        });

        setWeightedAnswers((prev) => {
            const updatedWeightedAnswers = prev.map((row) => [...row]);
            updatedWeightedAnswers[page][questionIndex] = value * questions[page][questionIndex][1];
            return updatedWeightedAnswers;
        });
    };

    const handleNextPage = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

   
    const handleSubmit = () => {
        navigate("/Testresult/", { state: { weightedAnswers } });

    };

    return (
        <>
            <div>
                <Testpage
                    page={currentPage}
                    questions={questions}
                    onAnswerChange={handleAnswerChange}
                    answers={answers}
                />
            </div>
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                        이전
                </button>
                {currentPage < questions.length - 1 ? (
                    <button onClick={handleNextPage}>
                        다음
                    </button>
                ) : (
                    <button onClick={handleSubmit}>
                        제출
                    </button>
                )}
            </div>
            
        </>
    );
};

export default MBTITest;