import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Cookies } from 'react-cookie'

import MainPage from './components/MainPage/MainPage';
import Content from './components/LoginPage/Content/Content';
import App from './components/LoginPage/App';
// import "./css/App.css";


{/* 
  * 현재 작업
    * 공통 부분: Header, Footer
    * 변동 부분: Content

  * 추후 작업
    * 동적 경로 작성
*/}

function Main() {
  // const cookies = new Cookies();

  // const isAuthorized = cookies.get();
  // console.log(isAuthorized);
  
  return (
    <Router>
      {/* {!isAuthorized ? <Redirect to='/main' /> : <Redirect to="/" />} */}
      <Routes>
        <Route path="/" element={<App />}>   
          <Route index element={<Content />} />
          <Route path="/main" >
            <Route index element={<MainPage />} />
          </Route>
        </Route>
      </Routes>
      
    </Router>
);
}

export default Main;
