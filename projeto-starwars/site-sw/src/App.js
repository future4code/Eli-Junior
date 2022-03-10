import React, {useState} from "react";
import styled from "styled-components";
import CharacterDetailPage from "./components/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./components/CharacterListPage/CharacterListPage";
import PageHeader from "./components/PageHeader/PageHeader";

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`

function App(props) {
  const [tela, setTela] = useState('pagina-lista');

  function escolheTela() {
    switch (tela) {
      case 'pagina-lista':
        return <CharacterListPage trocaTela={trocaTela}/>
      case 'pagina-detalhes':
        return <CharacterDetailPage trocaTela={trocaTela}/>
      default:
        return null
    }
  }

  const trocaTela = (tela) => {
    setTela(tela)
  }

  return (
    <AppContainer>
      <PageHeader/>
      {escolheTela()} 
    </AppContainer>
  );
}

export default App;
