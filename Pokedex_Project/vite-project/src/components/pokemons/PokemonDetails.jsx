import React, { useState,useEffect,useLayoutEffect, Suspense, } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';
import randomColor from "randomcolor";
import { Link } from 'react-router-dom';
import {Box} from '@mui/material';
import { useParams } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import Header from '../Header';
// imporr CSS
import "./PokemonDetails.css"
import Loader from '../loader/Loader';

function PokemonDetails() {
  let color = randomColor();
  const [move, setMove] = useState([]);
  const [ability, setAbility] = useState([])
  const [imageId,setImageId] =  useState();


  let {ids} = useParams();
  ids = ids.toLowerCase()

  useEffect(() => {
   axios.get(`https://pokeapi.co/api/v2/pokemon/${ids}`).then((response) => {
        
    setImageId(response.data.id);
      setMove(response.data.moves);
      setAbility(response.data.abilities);     
    });
      

    document.body.style.backgroundColor = color

  },[]);



  return (
    <>
      {ability.length == 0 ? (
        <Loader />
      ) : (
        <>
         
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            
            <Link to="/" >
              <Button className="btn">Home</Button>{" "}
            </Link>  
          </div>

          <Header />
          
          <div style={{ display: "flex", justifyContent: "center",marginTop:"1rem" }}>
            <img
              sx={{ width: { xs: "5%", sm: "40%", md: "40%" }, height: "4%" }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${imageId}.svg`}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2.5rem",
            }}
          >
            <Box sx={{ flexBasis: "30%" }}>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "28px", sm: "20px", md: "40px" } }}
              >
                Abilities of Pokemon
              </Typography>
              {ability.map((items) => {
                let color = randomColor();
                return (
                  <div
                    className="details"
                    style={{ backgroundColor: color }}
                    key={uuidv4()}
                  >
                    <Typography variant="h5">{items.ability.name}</Typography>
                  </div>
                );
              })}
            </Box>
            <Box sx={{ flexBasis: "30%" }}>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "28px", sm: "20px", md: "40px" } }}
              >
                Moves of Pokemon
              </Typography>
              {move.map((items) => {
                let color = randomColor();
                return (
                  <div
                    className="details"
                    style={{ backgroundColor: color }}
                    key={uuidv4()}
                  >
                    <Typography variant="h5">{items.move.name}</Typography>
                  </div>
                );
              })}
            </Box>
          </div>
        </>
      )}
    </>
  );
}

export default PokemonDetails
