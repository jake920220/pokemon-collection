import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { MOCK_DATA } from "../constants";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState(
    Array(6).fill({ id: null })
  );

  function addPokemon(id) {
    const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === id);
    setSelectedPokemon((prevSelected) => {
      const newSelected = [...prevSelected];
      if (!newSelected.find((p) => p.id === pokemon.id)) {
        const emptyIndex = newSelected.findIndex((item) => !item.id);
        if (emptyIndex !== -1) {
          newSelected[emptyIndex] = pokemon;
        } else {
          alert("더 이상은 추가할 수 없습니다.");
        }
      } else {
        alert("이미 추가된 포켓몬입니다.")
      }
      return newSelected;
    });
  }

  function removePokemon(id) {
    console.log("remove", id);
  }

  return (
    <DexContainer>
      <StyledDashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList addPokemon={addPokemon} />
    </DexContainer>
  );
}

const DexContainer = styled.div`
  padding: 60px;

  & > div:first-of-type {
    margin-bottom: 32px;
  }
`;

const StyledDashboard = styled(Dashboard)`
  margin-bottom: 80px;
`;

export default Dex;
