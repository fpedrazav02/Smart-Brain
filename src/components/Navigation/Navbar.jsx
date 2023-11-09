import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ onChangeRoute, isSignedIn }) {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            onChangeRoute("signin");
          }}
          className="link dim pointer grow navP"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            onChangeRoute("signin");
          }}
          className="link dim pointer grow initNavbar"
        >
          Sign In
        </p>
        <p
          onClick={() => {
            onChangeRoute("register");
          }}
          className="link dim pointer grow initNavbar"
        >
          Register
        </p>
      </nav>
    );
  }
}
Navbar.propTypes = {
  onChangeRoute: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

export default Navbar;
