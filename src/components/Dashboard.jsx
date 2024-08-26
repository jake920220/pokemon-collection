import styled from "styled-components";
import CardWrapper from "../styles/CardWrapper";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

function Dashboard() {
  const selectedPokemon = useSelector((state) => state.pokemon);

  return (
    <CardWrapper>
      <Title>나만의 포켓몬</Title>
      <PokemonCardListWrap>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id || new Date().getTime() * Math.random()}
            pokemon={pokemon}
            isSelected={true}
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

export default Dashboard;
