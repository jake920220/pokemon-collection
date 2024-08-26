import styled from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MOCK_DATA, POKEMON_TYPES } from "../constants";
import CardWrapper from "../styles/CardWrapper";
import { PokemonTypeBadge } from "../styles/PokemonTypeBadge";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === parseInt(id));

  return (
    <PokemonDetailContainer>
      <CardWrapper>
        <PokemonDetailItemWrap>
          <img src={pokemon.img_url} alt="image url" />
          <h1>포켓몬 상세 정보</h1>
          <p>도감 번호 : No {String(pokemon.id).padStart(3, 0)}</p>
          <p>이름 : {pokemon.korean_name}</p>
          <div className="types-wrap">
            <p>타입 : </p>
            {pokemon.types.map((type) => (
              <PokemonTypeBadge key={type} className={`${POKEMON_TYPES[type]}`}>
                {type}
              </PokemonTypeBadge>
            ))}
          </div>

          <p>설명 : {pokemon.description}</p>
        </PokemonDetailItemWrap>

        <BlackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          돌아가기
        </BlackButton>
      </CardWrapper>
    </PokemonDetailContainer>
  );
};

const BlackButton = styled.button`
  background-color: #000;
  color: #fff;
  display: block;
  margin: 24px auto 0;
  height: 40px;
  padding: 0 16px;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #888;
  }
`;

const PokemonDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PokemonDetailItemWrap = styled.div`
  width: 100%;
  position: relative;
  min-width: 320px;
  padding: 24px;
  padding-left: 208px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 182px;
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  div.types-wrap {
    display: flex;
    align-items: center;
    justify-content: centrer;
    gap: 8px;
    margin-bottom: 10px;

    p {
      margin-bottom: 0;
    }
  }
`;

export default PokemonDetail;
