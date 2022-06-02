import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

import './MainPage.css';


// App 은 공통 부분을 작성하기 위한 파일
function MainPage() {
  const params = useParams();
  console.log("MainPage :", params);

  return (
    <>
      <Navbar className="MainPage Header" />
      <div className="MainPage Content"><Outlet /></div>
    </>
  );
}

export default MainPage;