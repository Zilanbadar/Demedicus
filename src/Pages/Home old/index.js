import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import JSONDATA from '../../MOCK_DATA.json'
// import { FaSearch } from 'react-icons/fa';
import Bg from '../Images/bgmain.png';

import {
    Main,
    Navbar,
    Nav,
    NavUl,
    NavLi,
    NavLiLink,
    NavUlB,
    NavLiB,
    NavBtn,
    NavSiLink,
    HeroSection,
    HeroLeft,
    HeroRight,
    HLeftH,
    HLeftP,
    HLeftIn,
    HRightImg,
    JobsSection,
    JTitle,
    JTHead,
    JTDate,
    JobSec,
    JTJobs,
    JTDates
} from './HomeElements'

const HomeOld = () => {

    const [searchJob, setSearchJob] = useState("");
    
    const HandleChangeS = (e) => {
        setSearchJob(e.target.value)
    }
    var newsData;
    const [userNData, setUserNData] = useState([]);
    
    const history = useHistory('')
    const newsPage = async () => {
    try{
      const res = await fetch('http://localhost:3000/api/jobs/all',  {
        method : 'GET',
        headers : {
          Accept : "application/json",
          "Content-Type": "application/json",
          'Accept': 'application/json'
        }
      });

      newsData = await res.json();
      
      console.log(newsData);
      setUserNData(newsData);

      if(!res.status == 200){
        const error = new Error(res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
      history.push('/');
    };
  

  };


    useEffect(() => {
      newsPage();
    }, []);

   const proo = {
    fontSize: "12px",
    color: "#3c7e6c"
   }

    return (
        <Main>
            <Navbar>
                <Nav>
                    <NavUl>
                        <NavLi>
                            <NavLiLink to="/">Home</NavLiLink>                            
                        </NavLi>
                        <NavLi>
                                <NavLiLink to="/Service">Service</NavLiLink>                            
                        </NavLi>
                        <NavLi>
                                <NavLiLink to="/About">About</NavLiLink>
                        </NavLi>
                        <NavLi>
                                <NavLiLink to="/Contact">Contact</NavLiLink>                            
                        </NavLi>
                    </NavUl>
                    <NavUlB>
                        <NavLiB>
                            <NavBtn> 
                                <NavSiLink to="/SignIn">Sign In</NavSiLink>
                            </NavBtn>
                        </NavLiB>
                        <NavLiB>
                            <NavBtn> 
                                <NavSiLink to="/SignUp">Sign Up</NavSiLink>
                            </NavBtn>
                        </NavLiB>
                    </NavUlB>
                </Nav>
            </Navbar>
            <HeroSection>
                <HeroLeft>
                    <HLeftH>
                        DEMEDIOUS JOB FINDER...
                    </HLeftH>
                    <HLeftP>
                        Find your job easily and quick as a professional doctors.
                    </HLeftP>
                    <HLeftIn
                    type="search"
                    placeholder="Search..."
                    onChange={HandleChangeS}
                    >
                    </HLeftIn>
                </HeroLeft>
                <HeroRight>
                    <HRightImg
                    src={Bg}
                    alt="Doctor-Image"
                    >
                    </HRightImg>
                </HeroRight>
            </HeroSection>
            <JobsSection>
                <JTitle>
                    <JTHead>Jobs</JTHead>
                    <JTDate>Location</JTDate>
                </JTitle>
                {userNData.map((val,key) =>{
                    return (
                        <JobSec method="GET">
                            <JTJobs key={key}>
                                <p>{val.title}</p>
                                <p style={proo}>{val.email}</p>
                            </JTJobs>
                            <JTDates><p>{val.location}</p></JTDates>
                            
                        </JobSec>
                        
                    )
                })}
                {/* {JSONDATA.filter((val) => {
                    if (searchJob == ""){
                        return val
                    } else if (val.job_title.toLowerCase().includes(searchJob.toLowerCase())){
                        return val
                    }
                }).map((val,key) =>{
                    return (
                        <JobSec>
                            <JTJobs key={key}>
                                <p>{val.job_title}</p>
                            </JTJobs>
                            <JTDates><p>{val.location}</p></JTDates>
                            
                        </JobSec>
                        
                    )
                })} */}
            </JobsSection>

        </Main>
    )
}

export default HomeOld;
