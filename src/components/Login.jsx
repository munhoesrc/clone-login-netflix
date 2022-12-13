import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../img/logo.png';

function Login() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      console.log('mudar de rota');
      history.push('/perfil');
    }, 5000);
  }, []);

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
