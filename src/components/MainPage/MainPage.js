import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useCookies } from 'react-cookie';

import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

import './MainPage.css';


// App 은 공통 부분을 작성하기 위한 파일
function MainPage() {
  const params = useParams();
  console.log("MainPage :", params);

  const navigate = useNavigate();

  const checkCookie = async () => {
    fetch(`http://localhost:8080/board`, {
      method:'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type':'application/json; charset=utf-8',
        'cookie':'jwt'
    }})
    .then(res => res.json())
    .then((res)=>{
      if(res.isSuccess === false){
        return(
          alert('로그인이 필요한 접속입니다.'),
          navigate('/')
        )
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  checkCookie();

  return (
    <>
      <Navbar className="MainPage Header" />
      <div className="MainPage Content"><Outlet /></div>
    </>
  );
}

export default MainPage;