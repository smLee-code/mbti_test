
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import MBTITest from './MBTITest'
import Testresult from './Testresult'
import NotFound from './NotFound'


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/testpage/" element={<MBTITest/>} />
            <Route path="/testresult/" element={<Testresult/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;