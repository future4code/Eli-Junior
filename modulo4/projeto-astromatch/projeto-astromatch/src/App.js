import React from 'react';
import styled from 'styled-components';
import ChooseMatchPage from './components/ChooseMatchPage';
import Header from './components/Header';

const TelaPrincipal = styled.div`
  width: 600px;
  height: 90vh;
  margin: auto;
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
