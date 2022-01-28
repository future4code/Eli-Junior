import React from 'react';
import { useHistory } from 'react-router-dom';

export const AreaDeAdmin = () => {
  const history = useHistory()

  const voltar = () => {
    history.goBack()
  }

  const criarViagem = () => {
    history.push('/admin/trips/create')
  }

  const logout = () => {
    history.push('/login')
  }

  return (
    <div>
      Área de Admin
      <h1>Painel Administrativo</h1>
      <button onClick={voltar}>Voltar</button>
      <button onClick={criarViagem}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

