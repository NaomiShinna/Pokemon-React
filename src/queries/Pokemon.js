import React, { useState, useEffect } from 'react'
import axios from 'axios';
const url_api_pokemon = `https://pokeapi.co/api/v2/pokemon`;
const paramsGet = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
};

export const get_pokemon_list = async (pokemon) =>{
    var hasil = await axios.get(url_api_pokemon.concat('?offset=0&limit=100'))
    .then(res => {
        pokemon(res.data);
    });
}

export const get_pokemon_detail = async (idPokemon, setDataPokemon) =>{
    var hasil = await axios.get(url_api_pokemon.concat('/'+idPokemon))
    .then(res => {
        setDataPokemon(res.data);
    });
}

// export const get_pokemon_list = async(pokemon) => {
//     var a = await fetch(url_api_pokemon.concat('?limit=500'), paramsGet)
//     .then((response) => response.json())
//     .then((data) => pokemon(data))

//     return a;
        
// }
