import React from 'react';
import { useHistory } from 'react-router-dom';

export const ListaDeViagens = () => {
    const history = useHistory()
    const voltar = () => {
        history.goBack()
    }

  return (
    <div>
      Lista De Viagens
      <button onClick={voltar}>Voltar</button>
    </div>
    );
};

