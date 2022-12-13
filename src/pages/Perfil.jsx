import React from 'react';
import logo from '../img/logo.png';

function Perfil() {
  return (
    <>
      <div>
        <img src={logo} width="150" alt="logo netflix" />
      </div>
      <main>
        <div>
          <h1>Quem está assistindo?</h1>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <boton className="botton-perfil">GERENCIAR PERFIS</boton>
    </>
  );
}

export default Perfil;
