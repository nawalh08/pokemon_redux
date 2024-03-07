import Card from 'react-bootstrap/Card';
import { useLocation, useParams } from 'react-router-dom';
import { fetchPokebyID } from './pokeSlice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';


const DetailPoke = () => {
    const id = useParams()
    console.log(id);
    const [poke, setPoke] = useState()
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchPokebyID(`https://pokeapi.co/api/v2/pokemon/${id.id}`)).then(response => setPoke(response.payload))

    }, [])

    return (
        <>
            <div>
                <div class="card bg bg-light shadow" style={{ width: "18rem" }}>
                    <h5 class="card-title">{poke?.name}</h5>
                    <img src={poke?.sprites.front_default} class="card-img-top" alt="img" />
                    <div class="card-body">
                        <button class="btn btn-success">Add</button>
                    </div>
                </div>
                <div>
                    <div class="card bg bg-light shadow" style={{ width: "18rem" }}>
                        <h5 class="card-title">{poke?.height} feet</h5>
                        <h5 class="card-title">{poke?.weight} lbs</h5>
                        <h5 class="card-title">{poke?.base_experience}</h5>
                        
                            
                        
                    </div>
                </div>
            </div>





        </>
    );
}
export default DetailPoke;