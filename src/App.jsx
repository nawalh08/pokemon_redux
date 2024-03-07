import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import PokeList from './components/PokeList';




function App() {
  

  return (
    <>
    <header>
      <NavBar/>
    </header>
         
    <PokeList/>
 </>
      
    
  )
};
export default App
