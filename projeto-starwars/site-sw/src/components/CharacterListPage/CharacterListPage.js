import React, { useState } from 'react';
import axios from 'axios';

function CharacterListPage(props) {
  const [getCharacterList, setGetCharacterList] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people/1/')
    .then(response => {
      console.log(response.getCharacterList)
    })
  }, []);

  return (
    <div>
      <h3>CharacterListPage</h3>
      <button onClick={() => props.trocaTela('pagina-detalhes')}>Ir para detalhes</button>
    </div>
  );
}

export default CharacterListPage;
