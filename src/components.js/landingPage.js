import React from "react";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="LandingPage">
        <img src="./resources/images/logo@3x.png" />
        <button>SIGN UP</button>
        <span>
          <img src="./resources/images/play.png" />
          Login To Play
        </span>
      </div>
    );
  }
}

export default LandingPage;
