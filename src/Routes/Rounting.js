import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import Home from '../Pages/Home';


const AllRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/SignIn" exact><SignIn /></Route>
                <Route path="/SignUp"><SignUp /></Route>
                <Route path="/" ><Home /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AllRoutes;