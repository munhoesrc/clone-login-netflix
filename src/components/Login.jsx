import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // console.log('mudar de rota');
      navigate('/perfil');
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
