import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import pika from "../assets/pika.png";
import pokeball from "../assets/pokeball.png";

function Home() {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <img id="pikachu" src={pika} alt="" />
      <button onClick={() => navigate("/dex")}>
        <span>포켓몬 도감 시작하기</span>
        <img src={pokeball} alt="" />
      </button>
    </HomeContainer>
  );
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(236, 193, 255);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img#pikachu {
    width: 442.5px;
  }

  button {
    position: relative;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    height: 48px;
    background-color: #257ae2;
    color: #fff;
    border-radius: 6px;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.25s ease-in-out;

    img {
      /* position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%); */
      margin-left: -8px;
      width: 60px;
    }

    &:hover {
      background-color: #5694df;
      font-weight: 600;
      img {
        animation: ${spin} 2s linear infinite;
      }
    }
  }
`;

export default Home;
