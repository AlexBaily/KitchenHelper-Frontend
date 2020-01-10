import NavBar from "../components/NavBar";
import PrivateRoute from "../components/PrivateRoute";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "../components/Profile";
import history from "../utils/history";
import LocationApi from "../views/LocationApi";
import Splash from '../components/Splash'



const UriRouter = () => {
    
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Splash} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/location" component={LocationApi} />
            </Switch>
        </Router>
    )
}

export default UriRouter;
