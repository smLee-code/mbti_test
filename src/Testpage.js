import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Question from './Question';
import './Testpage.css';



const Testpage = ({page, questions, onAnswerChange, answers}) => {

    const currentQuestions = questions[page];

    return (
        <>
            <div className='Const-logo'>
                <Link to='/'>
                    MBTI 성격 검사
                </Link>
            </div>
            <div className='Question-wrapper'>
                {currentQuestions.map((question, index) => (
                        <div className='Question-div'>
                            <Question  
                                page={page} 
                                question={question}
                                value = {answers[page][index] ?? null}
                                onAnswerChange={(value) => onAnswerChange(page, index, value)} 
                            />
                        </div>
                    
                ))}
            </div>
            

        </>
    );
}

export default Testpage