import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

const useForm = (validateE) => {
    const history = useHistory();

    const [user, setUser] = useState({
        username: "", email: "", password: ""
    });
    
    const [errorV, setErrorV] = useState({});


    let name,value;

    const handleInputs = (e) => {
        console.log(user);
        name = e.target.name ;
        value = e.target.value;

        setUser({ ...user, [name]:value});
    }

    const postData = async(e)=>{
        e.preventDefault();
    
        const {username,email, password} = user;
       
        let res;
    
        if(!username || !email || !password ) {
        //   window.alert("All fields are required!");
          console.log("All fields are required!");
        //   setErrorV(validateE(user));
        }else { 
            res = await fetch("https://demedious-job-finder.herokuapp.com/api/v1/users/signup" , {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
    
          },
          body: JSON.stringify({
            username,email, password
          })
        })
        // .then ((all) => {
        //     console.log(all);
        //     // expected output: "Success!"
        //     // history.push('/SignIn');
        //   })
    
        const data = await res.json();
        //   window.alert(`${data}`);
          console.log(`${data}`);
          history.push("/SignIn");
        }
    }

    return {user , handleInputs, postData, errorV}

}

export default useForm;