export default function validateInfo(user) {
    let errors = {}

    //Username

    if(!user.username.trim()){
        errors.username = "Username Required"
    }

    //Email

    if(!user.email){
        errors.email = "Email Required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)){
        errors.email = "Email address is invalid"
    }

    //Password

    if(!user.password){
        errors.password = "Password Required"
    } else if(user.password.length < 6){
        errors.password = "Password must be atleast 6 characters"
    }

    
    return errors;
}