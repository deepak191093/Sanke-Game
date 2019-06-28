import React from "react";
import { Link } from "react-router-dom";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LandingPage">
        <img src="./resources/images/logo@3x.png" />
        <Link to="/signup" className="signuplink">
          SIGN UP
        </Link>
        <span>
          <img src="./resources/images/play.png" />
          <Link to="/login">Login To Play </Link>
        </span>
      </div>
    );
  }
}

export default LandingPage;
