import React, {useState} from "react";
import CharacterDetailPage from "./components/CharacterDetailPage/CharacterDetailPage";
import CharacterListPage from "./components/CharacterListPage/CharacterListPage";

function App() {
  const [tela, setTela] = useState('pagina-lista');

  function escolheTela() {
    switch (tela) {
      case 'pagina-lista':
        return <CharacterListPage />
      case 'pagina-detalhes':
        return <CharacterDetailPage />
      default:
        break;
    }
  }

  return (
    <div>
      <h1>Star Wars</h1>
      {escolheTela()}
    </div>
  );
}

export default App;
