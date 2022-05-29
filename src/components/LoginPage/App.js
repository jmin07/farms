import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

import './App.css';

// App 은 공통 부분을 작성하기 위한 파일
function App() {
  return (
    <>
      <Header className="App Header" />
      <div className="App Content"><Outlet /></div>
      <Footer className="App Footer" />
    </>
  );
}

export default App;
