import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import PokemonProvider from "../contexts/PokemonProvider";

function Dex() {
  return (
    <PokemonProvider>
      <DexContainer>
        <StyledDashboard />
        <PokemonList />
      </DexContainer>
    </PokemonProvider>
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
