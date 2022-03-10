import React from 'react';

function CharacterDetailPage(props) {
  return (
    <div>
      <h3>CharacterDetailPage</h3>
      <button onClick={() => props.trocaTela('pagina-lista')}>Voltar</button>
    </div>
  );
}

export default CharacterDetailPage;
