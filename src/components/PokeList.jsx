import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPoke } from "./pokeSlice";
import PokeItem from "./PokeItem";


const PokeList = () => {
    const pokemon = useSelector(state => state.pokemon.pokemons)
    const dispatch = useDispatch()

  
    useEffect(() => {
       
                dispatch(fetchPoke())
    },[])
    

    return (
        <>
           
        <div className="row"> 
            {
                pokemon?.map((pokemon, index) => (
                    
                    <PokeItem pokemon={pokemon} key={index}/>
                    
                ))
            }
    </div>

        </>
    );
}
 
export default PokeList;


