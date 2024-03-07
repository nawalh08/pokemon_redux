import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { Link, Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';

const NavBar = () => {

    return (
        <>

            <nav class="navbar bg-body-tertiary ">
                <div class="container-fluid">

                    <a href="#">
                        <img src="#" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                        Pokemon </a>

                    <a href="https://www.pokemon.com/fr/ ">

                        Home </a>
                    <p>Mon Pokedex</p>



                </div>
            </nav>
        </>
    );
}


export default NavBar;

