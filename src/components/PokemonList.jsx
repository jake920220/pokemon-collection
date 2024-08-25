import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import CardWrapper from "../styles/CardWrapper";
import { MOCK_DATA } from "../constants";
import PropTypes from "prop-types";

function PokemonList({ addPokemon, moveDetailPage }) {
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
            onButtonClick={addPokemon}
            onCardClick={moveDetailPage}
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

PokemonList.propTypes = {
  addPokemon: PropTypes.func.isRequired,
  moveDetailPage: PropTypes.func.isRequired,
};

export default PokemonList;
