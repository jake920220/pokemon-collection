import { createSlice } from "@reduxjs/toolkit";

const initialState = Array(6).fill({ id: null });

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const payloadId = action.payload.id;
      const emptyIndex = state.findIndex((item) => !item.id);

      if (emptyIndex === -1) {
        alert("더 이상 추가할 수 없습니다.");
      } else {
        const pokemon = state.find((pokemon) => pokemon.id === payloadId);
        if (!pokemon) {
          state[emptyIndex] = action.payload;
        } else {
          alert("이미 추가한 포켓몬입니다.");
        }
      }
    },
    removePokemon: (state, action) => {
      const id = action.payload;
      const removeIndex = state.findIndex((item) => item.id === id);
      state.splice(removeIndex, 1);
      state.push({ id: null });
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
