import logo from "../logo.svg";
import "../App.css";
import { get_pokemon_detail, get_pokemon_list } from "../queries/Pokemon";
import React, { Component, Suspense, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function Index() {
  const [pokemon, setPokemon] = useState(null);
  const [dataPokemeon, setDataPokemon] = useState([]);

  useEffect(() => {
    get_pokemon_list(setPokemon);
    document.title = "Pokemon API";
  }, []);

  useEffect(() => {
    console.log(dataPokemeon);
  }, [dataPokemeon]);

  const getIdPokemon = (param) => {
    var a = param.split("https://pokeapi.co/api/v2/pokemon/");
    var b = a[1].substring(0, a[1].length - 1);
    return b;
  };

  const sliceIdPokemon = (id) => {
    var c =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" +
      id +
      ".png";
    return c;
  };

  return (
    <div className="container mx-auto">
      <div className="App">
        <div
          className="border border-sky-500 rounded-lg mt-5  flex justify-center"
          style={{ backgroundColor: "#393E46" }}
        >
          <p className="text-white" style={{ fontSize: "1.5rem" }}>
            Pokemon API
          </p>
        </div>
        <br></br>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8  gap-4 place-content-center ">
          {pokemon &&
            pokemon.results.map((item, index) => (
              <Link to={"/" + getIdPokemon(item.url)}>
                <div className="justify-self-center" key={index}>
                  <Card
                    className="w-100 transition ease-in-out delay-150 border border-sky-500 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-800 duration-300
              hover:cursor-pointer"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    id={getIdPokemon(item.url)}
                    name={item.name}
                  >
                    <CardBody className="text-center">
                      <img
                        className=""
                        src={sliceIdPokemon(getIdPokemon(item.url))}
                      ></img>
                      <Typography variant="h6" className="mb-2 text-white">
                        {item.name}
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
