import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { MOCK_DATA } from "../constants";

function Dex() {
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState(
    Array(6).fill({ id: null })
  );

  function addPokemon(e, id) {
    e.stopPropagation();
    const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === id);
    setSelectedPokemon((prevSelected) => {
      const copySelected = [...prevSelected];
      if (!copySelected.find((p) => p.id === pokemon.id)) {
        const emptyIndex = copySelected.findIndex((item) => !item.id);
        if (emptyIndex !== -1) {
          copySelected[emptyIndex] = pokemon;
        } else {
          alert("더 이상은 추가할 수 없습니다.");
        }
      } else {
        alert("이미 추가된 포켓몬입니다.");
      }
      return copySelected;
    });
  }

  function removePokemon(e, id) {
    setSelectedPokemon((prevSelected) => {
      const copySelected = [...prevSelected];
      const index = copySelected.findIndex((p) => p.id === id);
      copySelected.splice(index, 1);
      copySelected.push({ id: null });
      return copySelected;
    });
  }

  function moveDetailPage(id) {
    navigate(`/detail?id=${id}`);
  }

  return (
    <DexContainer>
      <StyledDashboard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList
        selectedPokemon={selectedPokemon}
        addPokemon={addPokemon}
        moveDetailPage={moveDetailPage}
      />
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
