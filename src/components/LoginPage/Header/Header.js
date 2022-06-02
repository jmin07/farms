import React, { useState } from "react";
import Login from "../Modal/Login";
import SignUp from "../Modal/Signup"

import * as AiIcons from "react-icons/ai";

import { styled } from "@mui/material/styles";
import { lightGreen, grey } from "@mui/material/colors";
import { Button } from "@mui/material";

import "./Header.css";

const LoginButton = styled(Button)({
  color: "white",
  fontSize: 18,
  fontWeight: 550,
  borderRadius: "20px",
  backgroundColor: lightGreen[500],
  "&:hover": {
    backgroundColor: lightGreen[600],
    boxShadow: "true",
  },
  width: "90px",
  height: "45px",
});

const BootstrapButton = styled(Button)({
  color: "black",
  fontSize: 18,
  fontWeight: 600,
  boxShadow: "true",
  backgroundColor: grey[300],
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: grey[500],
    boxShadow: "true",
  },
  width: "95px",
  height: "45px",
});

function Header(props) {

  const [Loginbar, setLoginbar] = useState(false);
  const showLoginBar = () => setLoginbar(!Loginbar);


  const [signUpBar, setSignUpBar] = useState(false);
  const showSignUpBar = () => setSignUpBar(!signUpBar);

  // const [LoginState, setLoginState] = useState(false);
  // const changeLoginState = () => setLoginState(LoginState);

  return (
    <>
      <div className="main-header">
        
        <div className="header-logo">
          {/* <div id="header-image" ></div> */}
          <h2 id="header-text">MyFarm's store</h2>
        </div>

        <div className="login-button">
          
          <div className="button SignIn">
            <LoginButton onClick={showLoginBar}>로그인</LoginButton>
          </div>

          <div className="button SignUp">
            <BootstrapButton onClick={showSignUpBar}>회원가입</BootstrapButton>
          </div>

        </div>
        
        <div className={Loginbar ? "login active" : "login"}>
       
          <div id="login-close" onClick={showLoginBar}>
            <AiIcons.AiOutlineClose  />
          </div>
          
          <div className="LoginSideBar">
            <Login />
          </div>
       
        </div>


        <div className={signUpBar ? "signUp active" : "signUp"}>
          <div id="signUp-close" onClick={showSignUpBar}>
              <AiIcons.AiOutlineClose  />
          </div>
            
          <div className="SignUpBar">
              <SignUp />
          </div>

        </div>

      </div>
    </>
  );
}

export default Header;
