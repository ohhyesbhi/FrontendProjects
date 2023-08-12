import React,{ Suspense, useState } from 'react';
import Header from './components/Header';
import Pokemon from './components/pokemons/Pokemon';
import Error from './components/error/Error';

import './App.css'
import { Routes,Route } from 'react-router-dom';
import PokemonDetails from './components/pokemons/PokemonDetails';


function App() {
  const [id, setId] = useState();
  console.log(id);
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokemon setId={setId} />} />

        <Route path={`/pokemon/:ids`} element={<PokemonDetails id={id} />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App
