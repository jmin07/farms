import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
// import { Cookies } from 'react-cookie'

import App from './components/LoginPage/App';
import MainPage from './components/MainPage/MainPage';
// import Navbar from './components/MainPage/Navbar/Navbar';

import Content from './components/LoginPage/Content/Content';
// import MainContent from './components/MainPage/Content/Content'
import Reports from './components/MainPage/Content/Reports'

// import "./css/App.css";


function Main() {
  const params = useParams();

  console.log("Main :", params);

  // {<Content />}
  return (
    <Router>
      {/* {!isAuthorized ? <Redirect to='/main' /> : <Redirect to="/" />} */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element= {<Content />} />
          <Route path=":userId/main" element={<MainPage />}>
            <Route index element={<Content />} />
            <Route path=":pages" element={<Reports />} />
            {/* Report 안에 있는 컴포넌트 들을 useParams 를 사용해서 변경한다? */}
          </Route>


          {/* <Route path="main">
            <Route index element={<MainPage />} />
            <Route path=":reports" element={<Reports />} />
          </Route> */}

        </Route>

      </Routes>
    </Router>
);
}

export default Main;
