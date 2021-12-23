import React, { useState } from 'react'
import { useHistory } from 'react-router';
import JSONDATA from '../../MOCK_DATA.json'
import {
    JobSec,
    JTJobs,
    JTDates
} from './JobElements'

const Jobs = () => {

    const [searchJob, setSearchJob] = useState("");
    
    const HandleChangeS = (e) => {
        setSearchJob(e.target.value)
    }


    var newsData;
    const [userNData, setUserNData] = useState([]);
    
    const history = useHistory('')
    const newsPage = async () => {
    try{
      const res = await fetch('http://localhost:8080/api/jobs/all', {
        method : 'GET',
        headers : {
          Accept : "application/json",
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        credentials : "include"
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

   
    return (
        <>
            {/* {console.log(userNData)}
            {userNData.map(feedData =>{}
                return (
                    <JobSec>
                        <JTJobs key={key}>
                            <p>{val.job_title}</p>
                        </JTJobs>
                        <JTDates><p>{val.date}</p></JTDates>
                        
                    </JobSec>
                    <NCompo>
                        <NCHead>
                            <PDTitle>{feedData.newsTitle}</PDTitle>
                            <PDUser>{"@"+feedData.nUser}</PDUser>
                        </NCHead>
                        <NCText>
                            <PDPara>{feedData.newsText}</PDPara>
                        </NCText>
                        <NCCateg>
                            <PDCate>{"Category : " +feedData.category}</PDCate>
                        </NCCateg>
                    </NCompo>
                )
            })} */}
            {userNData.filter((val) => {
                if (searchJob == ""){
                    return val
                    console.log(val.title)
                } else if (val.title.toLowerCase().includes(searchJob.toLowerCase())){
                    return val
                    
                }
            }).map((val,key) =>{
                return (
                    <JobSec method="GET">
                        <JTJobs key={key}>
                            <p>{val.title}</p>
                        </JTJobs>
                        {/* <JTDates><p>{val.date}</p></JTDates> */}
                        
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
                        <JTDates><p>{val.date}</p></JTDates>
                        
                    </JobSec>
                    
                )
            })} */}
        </>
    )
}

export default Jobs;
