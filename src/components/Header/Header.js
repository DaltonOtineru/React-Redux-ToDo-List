import React from 'react';
import './Header.scss';
import GoogleAuth from '../GoogleAuth/GoogleAuth';

const Header = () => {
  return (
    <div className="header">
      <div className="header--container">
        <div className="title--box">
          <h1>React and Redux ToDo List</h1>
        </div>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
