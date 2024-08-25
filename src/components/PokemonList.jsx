import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import CardWrapper from "../styles/CardWrapper";
import { MOCK_DATA } from "../constants";

function PokemonList({addPokemon}) {
  return (
    <CardWrapper>
      <PokemonCardListWrap>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            imgUrl={pokemon.img_url}
            no={pokemon.id}
            koreanName={pokemon.korean_name}
            types={pokemon.types}
            onClick={addPokemon}
            buttonText="추가하기"
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
