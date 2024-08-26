import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

function Dex() {
  return (
    <DexContainer>
      <StyledDashboard />
      <PokemonList />
    </DexContainer>
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
