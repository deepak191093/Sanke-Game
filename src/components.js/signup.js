import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img src="./resources/images/logo@3x.png" />
            <p>
              Instruction to play <img src="./resources/images/play.png" />
            </p>
            <ul>
              <li>
                Adaptability means that it works across numerous applications
              </li>
              <li>
                Adaptability means that it works across numerous applications
              </li>
              <li>
                Adaptability means that it works across numerous applications
              </li>
            </ul>
          </div>
        </div>
        <div className="split right">
          <div className="loginPage centered">
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
                Verification mail sent to your ID. please verify to play
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
