import { get_pokemon_list } from "./queries/Pokemon";
import React, { useState, useEffect } from 'react'
import useListPokemon from "../useListPokemon";

function layoutCardPokemon() {

    const [listPokemon, setListPokemon] = useState(null);
  
    useEffect(() => {
      get_pokemon_list(setListPokemon);
      document.title = 'Pokemon API';
    }, [])
  
    const sliceIdPokemon = (param) =>{
      var a = param.split("https://pokeapi.co/api/v2/pokemon/");
      var b = a[1].substring(0, a[1].length-1);
      var c = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+b+".png";
      return c;
    }
  
    
    return (
      <div className="container mx-auto" >
        <div className="App">
          <div className="grid grid-cols-8  gap-4 place-content-center ">
            {listPokemon && (listPokemon.results).map((item, index) => (
            <div className="justify-self-center" key={index} >
                <img className=""src={sliceIdPokemon(item.url)} />
                <h6 style={{color: "white"}}>{item.name}</h6>
              </div>       
              
              ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default layoutCardPokemon;