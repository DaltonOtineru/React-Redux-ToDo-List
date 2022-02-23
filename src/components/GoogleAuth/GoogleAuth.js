import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../Redux/slice/authSlice';
import { GoogleLogout } from 'react-google-login';
import { GoogleLogin } from 'react-google-login';
import './GoogleAuth.scss';

export class GoogleAuth extends Component {
  // Initialize the library first
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '895140598985-8arbu88qb8n9ncfgpvelvp6eihh47kd2.apps.googleusercontent.com',

          scope: 'email',
        })
        .then(() => {
          // Will be invoked after library is initialized
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn === true) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <GoogleLogout
          className="google--logout"
          onClick={this.onSignOutClick}
        />
      );
    } else {
      return (
        <GoogleLogin className="google--login" onClick={this.onSignInClick} />
      );
    }
  }

  render() {
    return <div className="google--auth">{this.renderAuthButton()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStatetoProps, { signIn, signOut })(GoogleAuth);

// '895140598985-8arbu88qb8n9ncfgpvelvp6eihh47kd2.apps.googleusercontent.com',
