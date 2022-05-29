import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { yellow, lightGreen, grey } from'@mui/material/colors';
import React from 'react';

import '../../css/login.css';


const LoginButton = styled(Button)({
    fontSize:15,
    backgroundColor: lightGreen[500],
    '&:hover': {
        backgroundColor: lightGreen[600],
        boxShadow: 'true',
    },
    width: '85%', 
    height: "45px"
})
  
const KakaoButton = styled(Button)({
    fontSize: 15,
    boxShadow: 'true',
    backgroundColor: yellow[600],
    borderColor: 'black',
    '&:hover': {
        backgroundColor: yellow[700],
        boxShadow: 'true',
    },
    width: '85%', 
    height: "45px"
})
  
  
const BootstrapButton = styled(Button)({
    fontSize: 15,
    boxShadow: 'true',
    backgroundColor: grey[200],
    borderColor: 'black',
    '&:hover': {
        backgroundColor: grey[300],
        boxShadow: 'true',
    },
    width: '85%',
    height: "45px"
})

  


function Login(){
    return(
        <div className='Login'>
            <div className='Login-box'>
                
                <div className='Login-header'>
                    <h2 id='text'>Farm's store 에 오신 것을 환영합니다.</h2>
                    <h2 id='text'>로그인</h2>
                </div>

                <form className='Login-item' action="/app/login" method='post'>
                    <TextField label = "이메일 또는 휴대전화" name = "email" autoComplete='email' margin = "normal" required style ={{width: '85%'}}  autoFocus />
                    <TextField label = "비밀번호 입력" name = "password" margin = "normal" style ={{width: '85%'}} sx={{mt:0.5}} required />
                    <LoginButton type = "submit" variant="contained">로그인</LoginButton>
                </form>

                <div className="Login-submit">
                        <div id="or">
                            또는
                        </div>
                    <KakaoButton type = "submit" variant="contained" >카카오톡 로그인</KakaoButton>
                    <BootstrapButton type = "submit" variant="Outlined" sx={{mt:1}} >구글 로그인</BootstrapButton>
                </div>

                <div className='Login-bottom'>
                
                    {/* <div id="Sing-up">
                        아이디가 없으신가요? <a id="sing-in" href="localhost:3000">회원가입</a>
                    </div> */}

                    <div id="search">
                        <a id="search-id" href="/main/login">아이디 찾기</a>
                        <a id="search-password" href="localhost:3000">비밀번호 찾기</a>
                    </div>
                   
                </div>

            </div>
        </div>
        
    );
}

export default Login;