import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loginPage">
        <img src="./resources/images/logo.png" />
        <div className="login">
          <h1>SIGN IN</h1>
          <div className="email">
            <p>Your Email Id</p>
            <input type="textArea" />
          </div>
          <button>Verify</button>
          <br />
          <span>
            <img src="./resources/images/tick.png" />
            Verification mail sent to your ID. Please verify to play
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
