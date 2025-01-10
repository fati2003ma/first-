import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  return (
    <>
    <Navbar />
    <Container />
    </>
  );
}

export default App;
