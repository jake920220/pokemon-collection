
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import CardWrapper from "../styles/CardWrapper";
import { MOCK_DATA } from "../constants";

function PokemonList() {
  return (
    <CardWrapper>
      <PokemonCardListWrap>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isSelected={false}
          />
        ))}
      </PokemonCardListWrap>
    </CardWrapper>
  );
}

const PokemonCardListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default PokemonList;
