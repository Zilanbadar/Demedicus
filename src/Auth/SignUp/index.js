import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios'
import {
    Main,
    MLeft,
    LeftHp,
    LeftH,
    LeftP,
    LeftBtn,
    LBLink,
    MRight,
    RightHI,
    RightH,
    RightI,
    RIF,
    RII,
    RIL,
    RightP,
    RightIn,
    RInN,
    RInE,
    RInP,
    RightBtn
} from './SignUpElements';
import validateE from './Validate'
import useForm from './useForm'

const SignUp = () => {
    
    const {user , handleInputs, postData, errorV} = useForm(validateE);

    // const history = useHistory();

    // const [user, setUser] = useState({
    //     username: "", email: "", password: ""
    // });
    
    // const [errorV, setErrorV] = useState({});


    // let name,value;

    // const handleInputs = (e) => {
    //     console.log(user);
    //     name = e.target.name ;
    //     value = e.target.value;

    //     setUser({ ...user, [name]:value});
    // }

    // const postData = async(e)=>{
    //     e.preventDefault();
    
    //     const {username,email, password} = user;
       
    
    //     if(!username || !email || !password ) {
    //     //   window.alert("All fields are required!");
    //       console.log("All fields are required!");
    //       setErrorV(validateE(user));
    //     }else { 
    //         const res = await fetch("https://demedious-job-finder.herokuapp.com/api/v1/users/signup" , {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         'Accept': 'application/json'
    
    //       },
    //       body: JSON.stringify({
    //         username,email, password
    //       })
    //     }).then ((value) => {
    //         console.log(value);
    //         // expected output: "Success!"
    //         // history.push('/SignIn');
    //       })
    
    //     // const data = await res.json();
    //     // //   window.alert(`${data}`);
    //     // //   console.log(`${data}`);
    //     //   history.push("/SignIn");
    //     }
    // }

    return (
        <Main>
            <MLeft>
                <LeftHp>
                    <LeftH>Welcome Back!</LeftH>
                    <LeftP>To keep connect with us please login with your personal info</LeftP>
                </LeftHp>
                <LeftBtn>
                <LBLink to="/SignIn"> Sign in</LBLink>

                   
                </LeftBtn>
            </MLeft>
            <MRight method="POST" onSubmit={postData}>
                <RightHI>
                    <RightH>Create Account</RightH>
                    <RightI>
                        <RIF><FaFacebookF /></RIF>
                        <RII><FaInstagram /></RII>
                        <RIL><FaLinkedinIn /></RIL>                        
                    </RightI>
                </RightHI>
                <RightP>or use your email for registration</RightP>
                <RightIn>
                    <RInN 
                    onChange={handleInputs}
                    autoFocus={true}
                    type="name"
                    name="username"
                    placeholder= "Name"
                    required
                    // value={user.username}
                    >                      
                    </RInN>
                    {/* <p>{errors.username}</p> */}
                    <RInE 
                    onChange={handleInputs}
                    type="email"
                    name="email"
                    placeholder= "Email"
                    required
                    // value={user.email}
                    >
                    </RInE>
                    {/* <p>{errors.email}</p> */}
                    <RInP 
                    onChange={handleInputs}
                    type="password"
                    name="password"
                    placeholder ="Password"
                    required
                    // value={user.password}                    
                    >   
                    </RInP>
                    {/* <p>{errors.password}</p> */}
                </RightIn>
                <RightBtn 
                type="submit"
                value="Submit"
                >
                    Sign Up
                </RightBtn>
            </MRight>
        {/* {console.log(errors.email)} */}
        </Main>
    )
}

export default SignUp;
