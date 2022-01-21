
import React from 'react';
import VerViagens from './components/VerViagens/VerViagens';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>LabeX</h1>
        <button>Ver Viagens</button>
        <button>Área de Admin</button>
      </div>
    );
  }
}
