import { Component } from "react";
import "./SignIn.css";
import PropTypes from "prop-types";

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  onChangeMail = (event) => {
    this.setState({ email: event.target.value }, () => { })
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value }, () => { })
  }

  onSubmitBtn = () => {
    console.log(this.state);

    fetch('http://localhost:3000/signing', {
      method: 'post',
      headers: {
        "Conten-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })

    this.props.onChangeRoute('home');
  }

  render() {
    return (
      <article className="br3 ba b--back-10 mv4 w-100 w-50-m w-25-1 mw5 center" >
        <main className="pa4 black-80 center">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onChangeMail}
                ></input>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                ></input>
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={this.onSubmitBtn}
              ></input>
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => this.props.onChangeRoute("register")}
                className="f6 link dim black db pointer"
              >
                Sign up
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}
SignIn.propTypes = {
  onChangeRoute: PropTypes.func.isRequired,
};
export default SignIn;
