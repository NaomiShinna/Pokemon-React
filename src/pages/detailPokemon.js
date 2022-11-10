import { get_pokemon_detail } from "../queries/Pokemon";
import React, { Component, Suspense, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { HashRouter, Route, Routes } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";

function DetailPokemon(url_api_pokemon) {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const { idPokemon } = useParams();
  const [moves, setMoves] = useState(null);

  useEffect(() => {
    get_pokemon_detail(idPokemon, setPokemonDetail);
    document.title = "Pokemon API";
  }, []);

  useEffect(() => {
    document.title = "Pokemon API";
    console.log(pokemonDetail);
  }, [pokemonDetail]);

  const getImagePokemon = (id) => {
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
          className="border border-sky-500 rounded-lg mt-5 flex justify-center"
          style={{ backgroundColor: "#393E46" }}
        >
          <p className="text-white flex justify-center" style={{ fontSize: "1.5rem" }}>
            Pokemon API
          </p>
        </div>
        <br></br>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border border-sky-500  gap-4 place-content-center ">
          <div className="flex justify-start">
            <Link to={"/"}>
              <Button>Back</Button>
            </Link>
          </div>
          <div
            className=" border border-sky-500 rounded-lg flex justify-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <Typography variant="h6" className="mb-2 text-white">
              Detail Information
            </Typography>
          </div>
          <Card
            className="w-100  border border-sky-500 
                hover:cursor-pointer"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <CardBody className="text-center">
              <img className="" src={getImagePokemon(idPokemon)}></img>
            </CardBody>
          </Card>

          <Card
            className="w-100  border border-sky-500 
                hover:cursor-pointer flex justify-start"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          >
            <CardBody className="text-center">
              {pokemonDetail ? (
                <Typography variant="h6" className="mb-2 text-white">
                  {pokemonDetail.name + ", "}
                </Typography>
              ) : (
                <p></p>
              )}

              <div className="justify-self-center">
                <Typography variant="h6" className="mb-2 text-white">
                  Abilities:{" "}
                  {pokemonDetail &&
                    pokemonDetail.abilities.map(
                      (item, index) => item.ability.name + ", "
                    )}
                </Typography>
              </div>

              <div className="justify-self-center">
                <Typography variant="h6" className="mb-2 text-white">
                  Moves:
                  {pokemonDetail &&
                    pokemonDetail.moves.map(
                      (item, index) => item.move.name + ", "
                    )}
                </Typography>
              </div>
              {pokemonDetail ? (
                <Typography variant="h6" className="mb-2 text-white">
                  Experience: {pokemonDetail.base_experience + ", "}
                </Typography>
              ) : (
                <p></p>
              )}

              {pokemonDetail ? (
                <Typography variant="h6" className="mb-2 text-white">
                  Weight: {pokemonDetail.weight + ", "}
                </Typography>
              ) : (
                <p></p>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
