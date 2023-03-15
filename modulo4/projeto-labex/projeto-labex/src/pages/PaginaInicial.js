import React from 'react';
import { useHistory } from 'react-router-dom';

export const PaginaInicial = () => {
    const history = useHistory()
    const irParaListaDeViagens = () => {
        history.push('/trips/list')
    }
    const irParaLogin = () => {
        history.push('/login')
    }

  return (
    <div>
        <h1>LabeX</h1>
        <button onClick={irParaListaDeViagens}>Ver Viagens</button>
        <button onClick={irParaLogin}>Área de Admin</button>
    </div>
  );
};

