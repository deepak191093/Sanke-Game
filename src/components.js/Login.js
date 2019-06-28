import React from "react";
import Verify from "./verification";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      verify: false
    };
    this.verification = this.verification.bind(this);
    this.setData = this.setData.bind(this);
  }
  setData(e) {
    this.setState({ email: e.target.value });
  }

  verification() {
    if (this.state.email) {
      Verify(this.state.email)
        .then(() => {
          localStorage.setItem("userNameEmail", this.state.email);
          this.setState({ verify: true });
        })
        .catch(err => {
          alert(err);
        });
    } else {
      alert("Enter Email Id");
    }
  }

  render() {
    return (
      <div className="loginPage">
        <img src="./resources/images/logo.png" />
        <div className="login">
          <h1>SIGN IN</h1>
          <div className="email">
            <p>Your Email Id</p>
            <input type="textArea" ref="email" onChange={this.setData} />
          </div>
          <button onClick={this.verification}>Verify</button>
          <br />
          {this.state.verify && (
            <span>
              <img src="./resources/images/tick.png" />
              Verification mail sent to your ID. Please verify to play
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
