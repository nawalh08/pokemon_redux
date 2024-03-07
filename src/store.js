
import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./components/pokeSlice";



export default configureStore({
  reducer: {
    pokemon: pokeSlice,
  

  },
});