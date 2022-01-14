import React from 'react';
import styled from 'styled-components';
import ChooseMatchPage from './components/ChooseMatchPage';
import Header from './components/Header';

const TelaPrincipal = styled.div`
  width: 50vw;
  height: 90vh;
  margin: auto;
  margin-top: 60px;
  border-radius: 10px;
  border: 1px solid black;
`

function App() {
  return (
    <div>
      <TelaPrincipal>
        <Header />
        <hr />
        <ChooseMatchPage />
        </ TelaPrincipal>
    </div>
  );
}

export default App;
