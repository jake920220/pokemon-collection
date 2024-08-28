import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { POKEMON_TYPES } from "../constants";
import { PokemonTypeBadge } from "../styles/PokemonTypeBadge";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../features/pokemonSlice";

function PokemonCard({ pokemon, isSelected }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onButtonClick = (e, pokemon) => {
    e.stopPropagation();

    if (isSelected) {
      dispatch(removePokemon(pokemon.id));
    } else {
      dispatch(addPokemon(pokemon));
    }
  };

  return (
    <CardWrap
      onClick={() => {
        navigate(`/detail?id=${pokemon.id}`);
      }}
    >
      <div className="content">
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h3>{pokemon.korean_name}</h3>
        <span className="pokemon-no">
          No. {String(pokemon.id).padStart(3, 0)}
        </span>
        <div className="type-wrap">
          {pokemon.types.map((type) => (
            <PokemonTypeBadge key={type} className={`${POKEMON_TYPES[type]}`}>
              {type}
            </PokemonTypeBadge>
          ))}
        </div>
      </div>
      <button onClick={(e) => onButtonClick(e, pokemon)}>
        {isSelected ? "제거하기" : "추가하기"}
      </button>
    </CardWrap>
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

const CardWrap = styled.div`
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 180px;
  min-width: 150px;
  max-width: 280px;
  border: 1px solid rgb(221, 221, 221);
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  transition: transform 0.5s, box-shadow 0.5s;

  h3 {
    font-size: 16px;
    color: #000;
    margin-bottom: 6px;
    font-weight: 600;
  }

  span.pokemon-no {
    font-size: 12px;
    color: #666666;
    display: block;
    margin-bottom: 8px;
  }

  div.type-wrap {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  button {
    margin-top: 6px;
    line-height: 1;
    border-radius: 4px;
    padding: 7px 10px;
    font-size: 12px;
    transform: translateY(30px);
    transition: 0.5s;
    opacity: 0;
    background-color: red;
    color: #fff;
  }

  .content {
    transition: 0.5s;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
    .content {
      transform: translateY(-20px);
    }
    button {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
  isSelected: PropTypes.bool,
};

export default PokemonCard;
