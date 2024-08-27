import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const navigate = useNavigate();

  function addPokemon(pokemon) {
    setSelectedPokemon((prevSelectedPokemon) => {
      if (prevSelectedPokemon.some((p) => p.id === pokemon.id)) {
        alert("이미 추가된 포켓몬입니다.");
        return prevSelectedPokemon;
      }

      if (prevSelectedPokemon.length >= 6) {
        alert("더 이상은 추가할 수 없습니다.");
        return prevSelectedPokemon;
      }
      return [...prevSelectedPokemon, pokemon];
    });
  }

  function removePokemon(id) {
    setSelectedPokemon((prevSelected) => {
      const copySelected = [...prevSelected];
      const index = copySelected.findIndex((p) => p.id === id);
      copySelected.splice(index, 1);
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

export default PokemonProvider;
