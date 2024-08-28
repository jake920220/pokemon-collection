import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      if (state.some((p) => p.id === action.payload.id)) {
        return alert("이미 추가된 포켓몬입니다.");
      }
      if (state.length >= 6) {
        return alert("포켓몬은 최대 6마리까지만 추가할 수 있습니다.");
      }
      state.push(action.payload);
    },
    removePokemon: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
