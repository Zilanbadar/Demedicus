import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
// import { FaSearch } from 'react-icons/fa';

import {
    Main,
    Navbar,
    NavUl,
    NavLi,
    NavH,
    NavLiLink,
    NavUlB,
    NavLiB,
    NavBtn,
    NavSiLink,
    HFilterSec,
    JFilter,
    JFOpt,
    // Dropdown,
    JFSearch,
    HLeftIn,
    JobSec,
    JobDetailed,
    JTJobs,
    JDHT,
    JDSec,
    JDMore,
    JDDateS,
    JDHs,
    JDHps
} from './HomeElements'
import DropdownMenu from './Components/DropdownMenu';

const Home = () => {

    const [searchJob, setSearchJob] = useState("");
    const history = useHistory('');

    const HandleChangeS = (e) => {
        setSearchJob(e.target.value)
    }
    var newsData;
    const [userNData, setUserNData] = useState([]);
    
    
    const newsPage = async () => {
    try{
      const res = await fetch('https://demedious-job-finder.herokuapp.com/api/v1/jobs/all',  {
        method : 'GET',
        headers : {
            "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMyMzcwYWVmYjI5ZTIwY2ZiNzFiZjIiLCJpYXQiOjE2NDAxMTgyMzUsImV4cCI6MTY0MDIwNDYzNX0.pDwpECMYJwVTSFZqpLu9HG3__xZnNGz0iAu9qebhH34",
          "Content-Type": "application/json",
          'Accept': 'application/json'
        }
      });

      newsData = await res.json();
      
      console.log(newsData);
      setUserNData(newsData);

      if(!res.status === 200){
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


    return (
        <Main>
            <Navbar>
                <NavUl>
                    <NavLi>
                        <NavLiLink to="/">Refresh page</NavLiLink>                            
                    </NavLi>
                </NavUl>
                <NavH>
                    Job Portal                                                   
                </NavH>
                <NavUlB>
                    <NavLiB>
                        <NavBtn> 
                            <NavSiLink to="/SignIn">Sign Out</NavSiLink>
                        </NavBtn>
                    </NavLiB>
                </NavUlB>
            </Navbar>
            <HFilterSec>
                    <JFilter>
                        <JFOpt>
                            <DropdownMenu />
                        </JFOpt>
                        <JFSearch>
                            <HLeftIn
                            type="search"
                            placeholder="Search..."
                            onChange={HandleChangeS}
                            >
                            </HLeftIn>
                        </JFSearch>
                    </JFilter>
                    <JobSec method="GET">
                    {userNData.map((val,key) =>{
                        return (
                            <JobDetailed>
                                <JTJobs key={key}>
                                    <JDHT>{val.title}</JDHT>
                                </JTJobs>
                                <JDSec>
                                    <JDMore>
                                        <JDHs>Level : <JDHps></JDHps></JDHs>
                                        <JDHs>Location :<JDHps>{"  "+val.location}</JDHps></JDHs>
                                        <JDHs>Hospital :<JDHps>{}</JDHps></JDHs>
                                        <JDHs>Links :<JDHps>{"  "+ val.applyLink}</JDHps></JDHs>
                                    </JDMore>
                                    <JDDateS>
                                        <JDHs>Date : {}</JDHs>
                                    </JDDateS>
                                </JDSec>
                                
                            </JobDetailed> 
                            
                        )  
                    })} 
                    </JobSec>

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
                    
            </HFilterSec>

        </Main>
    )
}

export default Home;
