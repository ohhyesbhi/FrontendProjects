import {useEffect, useState} from 'react'
import PokemonLists from './PokemonLists'
import axios from 'axios';
import Header from '../Header';
import { Box } from '@mui/material';


function Pokemon({setId}) {

    const[pokemons,setPokemons] = useState([]);

    const[endcount,setEndCount] = useState(0)
 

    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${endcount}&limit=20`).then((response) => {
          setPokemons(response.data.results);
        });
      
    }, [endcount]);

// if(step == 1){
        
  return (
    
    <>
   
    <Header setId={setId}/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: {xs:"center",sm:"space-around",md:"space-around"},
          flexWrap: "wrap",
        }}
      >
        <PokemonLists setId={setId} list={pokemons} count={endcount}/>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
            {
          endcount>0&&<button style={{padding:"1rem"}} onClick={()=>{
            setEndCount(endcount-20)
        }}>prev</button>
        }
        {
      endcount<610 &&  <button
          style={{ padding: "1rem" }}
          onClick={() => {
            setEndCount(endcount + 20);
          }}
        >
          next
        </button>
}
        
      </div>
    </>
  );


}
export default Pokemon
