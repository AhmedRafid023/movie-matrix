import './App.css';
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import MovieInformation from './components/MovieInformation/MovieInformation';
import Movies from './components/Movies/Movies';


const App = ()=> (
  <div>
    <CssBaseline />
    <main>
      <Routes>
        <Route path="/" element={ <MovieInformation />} />
        <Route path="/movies" element={ <Movies />} />
      </Routes>
    </main>
  </div>
);


export default App;
