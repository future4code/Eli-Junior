import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CharacterDetailPage(props) {
  const [detailPage, setDetailPage] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/planets/')
      .then((response) => {
        console.log(response.data)
        setDetailPage(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div>
      <h2>Detalhes de personagem</h2>

      {detailPage.length && detailPage
        .map((planet) => {
          return (
          <>    
            <p>{planet.name}</p>
          </>
          )  
      })}
      <button onClick={() => props.trocaTela('pagina-lista')}>Voltar a lista de personagens</button>
    </div>
  );
}

export default CharacterDetailPage;
