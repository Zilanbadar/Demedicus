import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
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
  JDHps,
  JTDates,
  Reflogo,
  RefreshItem
} from "./HomeElements";
import DropdownMenu from "./Components/DropdownMenu";
import Preloader from "./Preloader/Preloader";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://demedious-job-finder.herokuapp.com/api/v1/jobs/all"
      );
      setPosts(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  //     const [searchJob, setSearchJob] = useState("");
  //     const history = useHistory('');

  //     const HandleChangeS = (e) => {
  //         setSearchJob(e.target.value)
  //     }
  //     var newsData;
  //     const [userNData, setUserNData] = useState([]);

  //     const newsPage = async () => {
  //     try{
  //       const res = await fetch('https://demedious-job-finder.herokuapp.com/api/v1/jobs/all',  {
  //         method : 'GET',
  //         headers : {
  //             "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWMyMzcwYWVmYjI5ZTIwY2ZiNzFiZjIiLCJpYXQiOjE2NDAxMTgyMzUsImV4cCI6MTY0MDIwNDYzNX0.pDwpECMYJwVTSFZqpLu9HG3__xZnNGz0iAu9qebhH34",
  //           "Content-Type": "application/json",
  //           'Accept': 'application/json'
  //         }
  //       });

  //       newsData = await res.json();

  //       console.log(newsData);
  //       setUserNData(newsData);

  //       if(!res.status === 200){
  //         const error = new Error(res.error);
  //         throw error;
  //       }
  //     }catch(err){
  //       console.log(err);
  //       history.push('/');
  //     };

  //   };

  // useEffect(() => {
  //   newsPage();
  // }, []);

  return (
    <Main>
      <Navbar>
        <NavUl>
          <NavLi>
            <NavLiLink to="/">Refresh page</NavLiLink>
            <Reflogo to="/"><RefreshItem color="white" /></Reflogo>
          </NavLi>
        </NavUl>
        <NavH>Job Portal</NavH>
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
              onChange={(e) => setSearchTitle(e.target.value)}
            ></HLeftIn>
          </JFSearch>
        </JFilter>
        <JobSec method="GET">
          {loading ? (
            <Preloader/>
          ) : (
            posts.filter((value)=>{
                if(searchTitle === ""){
                    return value;
                }else if(
                  value.title?.toLowerCase().includes(searchTitle.toLowerCase())
                ){
                    return value;
                }
            }).map((item) => (
              <JobDetailed key={item.id}>
                <JTJobs >
                  <JDHT>{item.title}</JDHT>
                </JTJobs>
                <JDSec>
                  <JDMore>
                    <JDHs>
                      Level : <JDHps></JDHps>
                    </JDHs>
                    <JDHs>
                      Location :<JDHps>{("  ", item.location)}</JDHps>
                    </JDHs>
                    <JDHs>
                      Hospital :<JDHps>{}</JDHps>
                    </JDHs>
                    <JDHs>
                      Links :<JDHps>{"  " + item.applyLink}</JDHps>
                    </JDHs>
                  </JDMore>
                  <JDDateS>
                    <JDHs>Date : {}</JDHs>
                  </JDDateS>
                </JDSec>
              </JobDetailed>
            ))
          )}
        
        </JobSec>

      
      </HFilterSec>
    </Main>
  );
};

export default Home;
