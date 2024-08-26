import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_DATA } from "../constants";
export const PokemonContext = createContext();

const PokemonProviderComponent = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(
    Array(6).fill({ id: null })
  );

  const navigate = useNavigate();

  function addPokemon(id) {
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

  function removePokemon(id) {
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
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon, moveDetailPage }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProviderComponent;
