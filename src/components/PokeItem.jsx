import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokebyID } from "./pokeSlice";
import { Navigate, useNavigate } from "react-router-dom";





const PokeItem = (props) => {
    const pokemon = props.pokemon
    const [poke, setChange] = useState()
    const dispatch = useDispatch({})
    const navigate = useNavigate()
    useEffect(() => {

        dispatch(fetchPokebyID(pokemon.url)).then(response => setChange(response.payload))

    }, [])
    const handlesubmit = (() =>{
        console.log('toto');
        navigate (`/detail/${poke?.id}` )
    })





    return (
        <>

            <div class="card mt-5 mx-2 bg bg-light shadow" style={{width: "18rem"}} >
                <img src={poke?.sprites.front_default} alt="img-poke" />
                <div class="card-body">
                    <h5 class="card-title">{poke?.name}</h5>
                    <h5 class="card-title"># {poke?.id}</h5>
                    <button onClick={() => handlesubmit()}>Détail</button>
                    
                </div>
            </div>
            

        </>
    );


}








export default PokeItem;