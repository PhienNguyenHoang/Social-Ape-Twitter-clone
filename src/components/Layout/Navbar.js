import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostScream from "../Scream/PostScream";
import Notifications from './Notifications';
//M-ui stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//icon
import HomeIcon from "@material-ui/icons/Home";

function Navbar(props) {
  const { authenticated } = props;
  return (
    <div>
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon />
                </MyButton>
              </Link>
              <Notifications />
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Navbar);
