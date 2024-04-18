import styled from "styled-components";
import { Button } from "../styled/Button";
// eslint-disable-next-line react/prop-types
const StartGame = ({ start }) => {
  return (
    <StartGameContainer>
      <div>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div>
        <h1>Dice Game</h1>
        <Button onClick={start}>Start Game</Button>
      </div>
    </StartGameContainer>
  );
};

const StartGameContainer = styled.div`
  display: flex;
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

export default StartGame;
