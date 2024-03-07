import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPoke = createAsyncThunk("pokemon/fetchPoke", async () => {

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=52")
    
    const data = await response.data;

    console.log(data.results);
    return data.results

});

export const fetchPokebyID = createAsyncThunk("pokemon/fetchPokebyID", async (url) => {

    const response = await axios.get(url)
    
    const data = await response.data;

  
    return data

});

const pokeSlice = createSlice({
    name: "pokemon",
    initialState: {
      pokemons: [],
      poke : {},
      isLoading: false,
   
    },
    reducers: {},
    /*
      .fullfilled => L'action se déclenche si la requête se termine
      .rejected => L'action se déclenche si la requête echoue
      .pending => l'action se déclenche pendant la requête
    */
    extraReducers: (builder) => {
      builder.addCase(fetchPoke.fulfilled, (state, action) => {
        state.pokemons = action.payload;
        
      });
      builder.addCase(fetchPokebyID.fulfilled, (state, action) => {
        state.poke = action.payload;
    
        
      });
   
      builder.addCase(fetchPoke.pending, (state, action) => {
        state.isLoading = true;
      });
    
    },
  });

  export default pokeSlice.reducer;
  



