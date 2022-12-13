import React from 'react';
import logo from '../img/logo.png';

function Login() {
  return (
    <>
      <div className="logo-netflix">
        <img src={logo} width="700" alt="logo netflix" />
      </div>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Login;
