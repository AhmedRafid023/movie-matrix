import './App.css';
import React, { Component } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from './components';
import useStyles from './components/styles'


const App = ()=> {
  const classes = useStyles();


  return (
    <div className={classes.root}>
    <CssBaseline />
    <NavBar />
    <main className={classes.content}>
    <div className={classes.toolbar}/>
      <Routes>
        <Route path="/movie/:id" element={ <MovieInformation />} />
        <Route path="/" element={ <Movies />} />
        <Route path="/actors/:id" element={ <Actors />} />
        <Route path="/profile/:id" element={ <Profile />} />
      </Routes>
    </main>
  </div>
);
}
  


export default App;
