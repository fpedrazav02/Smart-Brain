import "./Register.css";
import PropTypes from "prop-types";

function Register({ onChangeRoute }) {
  return (
    <article className="br3 ba b--back-10 mv4 w-100 w-50-m w-25-1 mw5 center">
      <main className="pa4 black-80 center">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="email-address"
                id="email-address"
              ></input>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
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
              ></input>
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              onClick={() => onChangeRoute("home")}
            ></input>
          </div>
        </div>
      </main>
    </article>
  );
}
Register.propTypes = {
  onChangeRoute: PropTypes.func.isRequired,
};
export default Register;
