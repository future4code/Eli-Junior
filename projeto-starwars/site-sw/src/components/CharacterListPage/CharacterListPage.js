import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerList = styled.div`
  border: 1px solid red;
  border-radius: 5px;
  width: 20rem;
  margin: 10px;
  padding-left: 10px;
  font-size: 15px;
  :hover {
    background-color: beige;
    color: red;
  }
  :active {
    background-color: lightgrey;
  }
`

function CharacterListPage(props) {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      .then((response) => {
        console.log(response.data)
        setCharacterList(response.data.results)
    })
      .catch((error) => {
        console.log(error)
    })
    }, []);

  return (
    <div>
      <h2>Lista de Personagens</h2>

      {characterList.length && characterList
      .map((list) => {
        return (
        <ContainerList onClick={() => props.trocaTela('pagina-detalhes')}>    
          <p>{list.name}</p>
        </ContainerList>
        )  
      })}
    </div>
  );
}

export default CharacterListPage;
