import styled from "styled-components";
import { POKEMON_TYPES } from "../constants";
import Monsterball from "../assets/monball.png";

// eslint-disable-next-line react/prop-types
function PokemonCard({ imgUrl, koreanName, types, no, onClick, buttonText }) {
  return (
    <>
      {no ? (
        <CardWrap>
          <div className="content">
            <img src={imgUrl} alt={koreanName} />
            <h3>{koreanName}</h3>
            <span className="pokemon-no">No. {String(no).padStart(3, 0)}</span>
            <div className="type-wrap">
              {
                // eslint-disable-next-line react/prop-types
                types.map((type) => (
                  <span key={type} className={`${POKEMON_TYPES[type]}`}>
                    {type}
                  </span>
                ))
              }
            </div>
          </div>
          <button onClick={() => onClick(no)}>{buttonText}</button>
        </CardWrap>
      ) : (
        <EmptyWrap>
          <img src={Monsterball} alt="monster ball image" />
        </EmptyWrap>
      )}
    </>
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

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      color: #ffffff;
      font-style: normal;
      width: 45px;
      height: 22px;
      font-size: 14px;

      &.normal {
        background-color: #949495;
      }
      &.fight {
        background-color: #e09c40;
      }
      &.fly {
        background-color: #a2c3e7;
      }
      &.poison {
        background-color: #735198;
      }
      &.earth {
        background-color: #9c7743;
      }
      &.rock {
        background-color: #bfb889;
      }
      &.insect {
        background-color: #9fa244;
      }
      &.ghost {
        background-color: #684870;
      }
      &.iron {
        background-color: #69a9c7;
      }
      &.fire {
        background-color: #e56c3e;
      }
      &.water {
        background-color: #5185c5;
      }
      &.grass {
        background-color: #66a945;
      }
      &.electric {
        background-color: #f6d851;
      }
      &.esper {
        background-color: #dd6b7b;
      }
      &.ice {
        background-color: #6dc8eb;
      }
      &.dragon {
        background-color: #535ca8;
      }
      &.evil {
        background-color: #4c4948;
      }
      &.fariy {
        background-color: #dab4d4;
      }
    }
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

export default PokemonCard;
