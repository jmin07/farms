import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cookies } from 'react-cookie'
// import Header from './components/MainPage/header';

// import Header from './components/LoginPage/header'
import Home from './components/LoginPage/Home'
// import Navbar from './components/MainPage/Navbar';
// import Header from './components/MainPage/header';
import "./css/App.css";

// App 컴포넌트는 공통된 레이아웃을 보여주는 곳
function App() {
  // const cookies = new Cookies();

  // const isAuthorized = cookies.get();
  // console.log(isAuthorized);
  
  return (
    <>
      <Router>
        {/* {!isAuthorized ? <Redirect to='/main' /> : <Redirect to="/" />} */}
        {/* <Route path="/" element={<Home />} */}
        <Home/>
        <Routes>
          <Route path="/">
          </Route>
        </Routes>
        
      </Router>
    </> 
  );
}

export default App;
