import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../Redux/actions';
import GoogleButton from 'react-google-button';
import { GoogleLogout } from 'react-google-login';
import { GoogleLogin } from 'react-google-login';

export class GoogleAuth extends Component {
  // Initialize the library first
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '198532046195-s9v6hpsdsrf0th6qrcv93rit722d4lrh.apps.googleusercontent.com',

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
      return <GoogleLogout onClick={this.onSignOutClick} />;
    } else {
      return <GoogleLogin onClick={this.onSignInClick} />;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStatetoProps, { signIn, signOut })(GoogleAuth);

// '895140598985-8arbu88qb8n9ncfgpvelvp6eihh47kd2.apps.googleusercontent.com',
