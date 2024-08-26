import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonProviderComponent from "../components/PokemonProviderComponent";

function Dex() {
  return (
    <PokemonProviderComponent>
      <DexContainer>
        <StyledDashboard />
        <PokemonList />
      </DexContainer>
    </PokemonProviderComponent>
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
