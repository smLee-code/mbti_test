import './Main.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Main = (props) => {
	return (
        <div className="Main">
            <div className="title">
                <h1>MBTI 테스트</h1>
                <Link to='/testpage/'>
                    바로가기 &gt;&gt;
                </Link>
            </div>
        </div>
    );
};



export default Main;
