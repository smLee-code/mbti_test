import React from 'react';
import Radio from './Radio'
import './Question.css';

const Question = ({question, onAnswerChange, value}) => {
    const colorSets = [
        {
          "--button-color": "#f5f5f5",
          "--active-color": "rgb(178, 255, 153)",
          "--active-text-color": "rgb(255, 255, 255)",
          "--border-color": "rgb(166, 237, 142)"
        },
        {
          "--button-color": "#f0f8ff",
          "--active-color": "rgb(155, 255, 197)",
          "--active-text-color": "rgb(255, 255, 255)",
          "--border-color":  "rgb(141, 232, 179)"
        },
        {
          "--button-color": "#e6ffe6",
          "--active-color": "rgb(143, 236, 255)",
          "--active-text-color": "rgb(255, 255, 255)",
          "--border-color": "rgb(126, 208, 224)"
        },
        {
          "--button-color": "#fff0f5",
          "--active-color": "rgb(139, 200, 255)",
          "--active-text-color": "rgb(255, 255, 255)",
          "--border-color": "rgb(124, 178, 227)"
        },
        {
          "--button-color": "#ffffe6",
          "--active-color": "rgb(151, 136, 255)",
          "--active-text-color": "rgb(255, 255, 255)",
          "--border-color": "rgb(127, 114, 214)"
        }
      ];

    return(
      <>
        <div className='QnA'>
          <div className='Query'>
            <h4>{question[0]}</h4>
          </div>
          <div>
            <form className='Answer'>
              {[  
                  { text: "아주 그렇다", value: 2 },
                  { text: "그렇다", value: 1 },
                  { text: "보통이다", value: 0 },
                  { text: "아니다", value: -1 },
                  { text: "매우 아니다", value: -2 }
                ].map((option, index) => (
                  <Radio
                    text={option.text}
                    name={question}
                    value={option.value}
                    checked={value === option.value}
                    onChange={() => onAnswerChange(option.value)}
                    colorVars={colorSets[index]} // 버튼마다 색상 변수 전달
                  />
              ))}
            </form>
            <hr/>
          </div>
        </div>
      </>  
    );
}

export default Question