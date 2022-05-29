import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { lightGreen } from'@mui/material/colors';

import React, { useState, useEffect } from 'react';
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
    const [value, setValue] = useState(false);
    const [emailText, setEmailText] = useState('');
    const [nameText, setNameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    useEffect(()=>{
        alert('회원가입이 완료되었습니다!');
        // setValue(false)
        setEmailText('');
        setNameText('');
        setPasswordText('');
    }, [value])

    const submit = async (event) => {
        event.preventDefault();

        const userEmail = event.target.email.value;
        const userName =  event.target.name.value;
        const userPassword = event.target.password.value;

        await fetch('http://localhost:3000/app/signup', {
            method:"POST",
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
            console.log(res);
            console.log('test');
            console.log(res.isSuccess)
            setValue(res.isSuccess);
        })
    }

    return(
        <div className='Login'>
            <div className='Login-box'>
                
                <div className='Login-header'>
                    <h2 id='text'>Farm's store 에 오신 것을 환영합니다.</h2>
                    <h2 id='text'>회원가입</h2>
                </div>

                <form className='Login-item' action="/app/signup" method='post' onSubmit={submit}>
                    <TextField onChange={emailText} label = "이메일 입력" name = "email" autoComplete='email' margin = "normal" required style ={{width: '85%'}}  autoFocus />
                    <TextField onChange={nameText} label = "이름 입력" name = "name" margin = "normal" style ={{width: '85%'}} sx={{mt:0.5}} required />
                    <TextField onChange={passwordText} label = "비밀번호 입력" name = "password" margin = "normal" style ={{width: '85%'}} sx={{mt:0.5}} required />
                    <LoginButton type="submit" variant="contained">회원가입</LoginButton>
                </form>

            </div>
        </div>
        
    );
}

export default SignUp;