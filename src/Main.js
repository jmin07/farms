import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Cookies } from 'react-cookie'

import App from './components/LoginPage/App';
import MainPage from './components/MainPage/MainPage';
// import Navbar from './components/MainPage/Navbar/Navbar';

import Content from './components/LoginPage/Content/Content';
// import MainContent from './components/MainPage/Content/Content'
import Reports from './components/MainPage/Content/Reports'

// import "./css/App.css";


function Main() {
  // const cookies = new Cookies();

  // const isAuthorized = cookies.get();
  // console.log(isAuthorized);
  

  // {<Content />}
  return (
    <Router>
      {/* {!isAuthorized ? <Redirect to='/main' /> : <Redirect to="/" />} */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element= {<Content />} />
          <Route path="main" element={<MainPage />}>
            <Route index element={<Content />} />
            <Route path=":reports" element={<Reports />} />
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
