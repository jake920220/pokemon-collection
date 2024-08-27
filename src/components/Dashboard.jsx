import { useContext } from "react";
import styled from "styled-components";
import CardWrapper from "../styles/CardWrapper";
import PokemonCard from "./PokemonCard";
import Monsterball from "../assets/monball.png";
import { PokemonContext } from "../contexts/PokemonProvider";

function Dashboard() {
  const { selectedPokemon } = useContext(PokemonContext);

  return (
    <CardWrapper>
      <Title>나만의 포켓몬</Title>
      <PokemonCardListWrap>
        {selectedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} isSelected={true} />
        ))}
        {Array(6 - selectedPokemon.length)
          .fill("")
          .map((item, index) => (
            <EmptyWrap key={index}>
              <img src={Monsterball} alt="monster ball image" />
            </EmptyWrap>
          ))}
      </PokemonCardListWrap>
    </CardWrapper>
  );
}

const EmptyWrap = styled.div`
  flex: 1 1 180px;
  min-width: 150px;
  max-width: 280px;
  height: 180px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    width: 50px;
  }
`;

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
