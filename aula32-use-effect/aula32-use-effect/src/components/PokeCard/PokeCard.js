import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
    // lembre-se de indicar o props no começo.
    
    const [pokemon, setPokemon] = useState({});

    //   state = {
        
    //     pokemon: {}
    //   };

    useEffect(() => {
        axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    }, []);

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
}