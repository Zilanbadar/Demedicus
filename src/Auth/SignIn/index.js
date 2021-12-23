import React, { useState } from 'react';
import { useHistory} from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {
    Main,
    MLeft,
    LeftHI,
    LeftH,
    LeftI,
    LIF,
    LII,
    LIL,
    LeftP,
    LeftIn,
    LInE,
    LInP,
    LeftPf,
    LeftBtn,
    MRight,
    RightHp,
    RightH,
    RightP,
    RightBtn,
    RBLink
} from './SignInElements'

const SignIn = () => {
    
    
  const history = useHistory('');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async(e) =>{
    e.preventDefault();

    const res = await fetch("https://demedious-job-finder.herokuapp.com/api/v1/users/signin" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'

      },
      body: JSON.stringify({
        email, password
      })
    }).then ((value) => {
      console.log(value);
      // expected output: "Success!"
      history.push('/');
    })

    

    // console.log(data);
    // if(!res.status === 200 || !data){
    //   window.alert("Invalid Credentials")
    //   console.log("Invalid Credentials")
    // } else {
    //   window.alert("Login Successfully")
    //   console.log("Login Successfully")
    //   history.push('/');
    // }
  }

    return (
        <Main>
            <MLeft method="POST">
                <LeftHI>
                    <LeftH>Sign In to Demedious</LeftH>
                    <LeftI>
                        <LIF href=""><FaFacebookF /></LIF>
                        <LII href=""><FaInstagram /></LII>
                        <LIL href=""><FaLinkedinIn /></LIL>                        
                    </LeftI>
                </LeftHI>
                <LeftP>or use your email account</LeftP>
                <LeftIn>
                    <LInE 
                    value={email} 
                    onChange={(e) => {setEmail(e.target.value)}}
                    autoFocus={true}
                    type="email"
                    placeholder= "Email"
                    isRequired
                    >
                    </LInE>
                    <LInP 
                    value={password} 
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password"
                    placeholder ="Password"
                    >   
                    </LInP>
                    <LeftPf href="https://www.figma.com/file/lkd2YPUpSUMeKl3yrjD8VG/doctor?node-id=0%3A1">Forget your password?</LeftPf>
                </LeftIn>
                <LeftBtn
                type="submit"
                onClick={loginUser}
                >
                    Sign In
                </LeftBtn>
            </MLeft>
            <MRight>
                <RightHp>
                    <RightH>Hello, Friend!</RightH>
                    <RightP>Enter your personal details and start a journey with us</RightP>
                </RightHp>
                <RightBtn
                >
                    <RBLink to="/SignUp"> Sign Up </RBLink>
                                                                       
                </RightBtn>
            </MRight>
        </Main>
    )
}

export default SignIn;
