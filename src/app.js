import React from "react";
import ReactDOM from "react-dom";
import GameContainer from "./components.js/gameContainer";
import LandingPage from "./components.js/landingPage.js";
import Login from "./components.js/Login";
import SignUp from './components.js/signup';
import './firebase/firebase';
import Router from "./router/router";
ReactDOM.render(<Router /> , document.getElementById("app"));