import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { lightGreen } from'@mui/material/colors';
import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';
import './Modal.css';


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
  

function SignUp(){
    const [emailText, setEmailText] = useState('');
    const [nameText, setNameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const emailChange = (event)=>{
        setEmailText(event.target.value);
    }

    const nameChange = (event)=>{
        setNameText(event.target.value);
    }

    const passwordChange = (event)=>{
        setPasswordText(event.target.value);
    }

    const navigate = useNavigate();

    const submit = async (event) => {
        event.preventDefault();

        const userEmail = event.target.email.value;
        const userName =  event.target.name.value;
        const userPassword = event.target.password.value;

        async function fetchData(){
            try {
                await fetch('http://localhost:8080/app/signup', {
                    method:"POST",
                    mode: 'cors',
                    credentials: 'include',     // 'include', 자격 증명을 포함한 요청 전송
                    headers: {
                        'Content-Type':'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        "email":userEmail,
                        "name":userName,
                        "password":userPassword
                    })
                })
                .then((res)=> res.json())
                .then((res)=>{
                    if(res.isSuccess === true){
                        return(
                            // 입력 Text 초기화
                            setEmailText(''),
                            setNameText(''),
                            setPasswordText(''),
                            
                            // 페이지 이동
                            navigate('/'),
        
                            // 완료창 띄우기
                            alert(
                                `
                                ${res.result.name} 님 환영합니다.  
                            회원가입이 완료되었습니다!`)
                        )
                    } else if (res.isSuccess === false){
                        return(
                            alert(`${res.message}`)
                        )
                    }
                })
            } catch (error){
                console.log(error);
            }
        }
        fetchData();
    }

    return(
        <div className='Login'>
            <div className='Login-box'>
                
                <div className='Login-header'>
                    <h2 id='text'>Farm's store 에 오신 것을 환영합니다.</h2>
                    <h2 id='text'>회원가입</h2>
                </div>

                <form className='Login-item' action="/app/signup" method='post' onSubmit={submit}>
                    <TextField value={emailText} onChange={emailChange} label = "이메일 입력" name = "email" autoComplete='email' margin = "normal" required style ={{width: '85%'}}  autoFocus />
                    <TextField value={nameText} onChange={nameChange} label = "이름 입력" name = "name" margin = "normal" style ={{width: '85%'}} sx={{mt:0.5}} required />
                    <TextField value={passwordText} onChange={passwordChange} label = "비밀번호 입력" name = "password" margin = "normal" style ={{width: '85%'}} sx={{mt:0.5}} required />
                    <LoginButton type="submit" variant="contained">회원가입</LoginButton>
                </form>

            </div>
        </div>
        
    );
}

export default SignUp;