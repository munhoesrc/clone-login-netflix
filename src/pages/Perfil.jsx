import React from 'react';
import logo from '../img/logo.png';

import imagemFirst from '../img/imgperfil1.png';
import imagemSecond from '../img/imgperfil2.jpg';
import imagemFour from '../img/imgperfilkids.png';

function Perfil() {
  return (
    <>
      <div className="img-pqn">
        <img src={logo} width="150" alt="logo netflix" />
      </div>
      <div>
        <h1>Quem está assistindo?</h1>
      </div>
      <main className="all-img">
        <div>
          <img src={imagemFirst} width="150" alt="avatar perfil" />
          <span>Pedro</span>
        </div>
        <div>
          <img src={imagemSecond} width="150" alt="avatar perfil" />
          <span>Sue Storm</span>
        </div>
        <div>
          <img src={imagemFour} width="150" alt="avatar perfil" />
          <span>Donald McConnor</span>
        </div>
        <div>
          <span>Adicionar perfil</span>
        </div>
      </main>
      <boton className="botton-perfil">GERENCIAR PERFIS</boton>
    </>
  );
}

export default Perfil;
