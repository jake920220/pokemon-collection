import styled from "styled-components";
import CardWrapper from "../styles/CardWrapper";
import PokemonCard from "./PokemonCard";
import PropTypes from "prop-types";

function Dashboard({ selectedPokemon, removePokemon }) {
  return (
    <CardWrapper>
      <Title>나만의 포켓몬</Title>
      <PokemonCardListWrap>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id || new Date().getTime() * Math.random()}
            imgUrl={pokemon.img_url}
            koreanName={pokemon.korean_name}
            types={pokemon.types}
            no={pokemon.id}
            onButtonClick={removePokemon}
            buttonText="제거하기"
          />
        ))}
      </PokemonCardListWrap>
    </CardWrapper>
  );
}

const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  margin: 12px 0 32px;
  font-weight: 600;
`;

const PokemonCardListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

Dashboard.propTypes = {
  selectedPokemon: PropTypes.arrayOf(PropTypes.object),
  removePokemon: PropTypes.func.isRequired,
};

export default Dashboard;
