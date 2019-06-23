import React from 'react';
import LandingPage from "./../components.js/landingPage";
import Login from "./../components.js/Login";
import SignUp from "./../components.js/signup";
import GameContainer from "./../components.js/gameContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = ()=>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={LandingPage} exact={true}/>
                <Route path="/login" component={Login} exact={true}/>
                <Route path="/signup" component={SignUp} exact={true}/>
                <Route path="/game" component={GameContainer} exact={true}/>
            </Switch>
        </div>>
    </BrowserRouter>
)

export default Router;