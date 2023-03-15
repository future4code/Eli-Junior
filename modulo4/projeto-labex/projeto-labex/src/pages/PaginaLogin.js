import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const PaginaLogin = () => {
    const history = useHistory()
    const [valorNome, setValorNome] = useState('')
    const [valorEmail, setValorEmail] = useState('')

    const voltar = () => {
        history.push('/')
    }

    const entrar = () => {
        history.push('/admin/trips/list')
    }

    const onChangeNome = (event) => {
        setValorNome(event.target.value)
      }
    
    const onChangeEmail = (event) => {
        setValorEmail(event.target.value)
      }

  return (
    <div> 
      <h1>Login</h1>
        <input name={'nome'} onChange={onChangeNome} value={valorNome} />
        <input name={'e-mail'} onChange={onChangeEmail} value={valorEmail} /> 
      <button onClick={voltar}>Voltar</button>
      <button onClick={entrar}>Entrar</button>
    </div>
  );
};




