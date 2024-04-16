import styled from "styled-components";
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

const Button = styled.button`
  background-color: black;
  cursor: pointer;
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600px;
  border: 1px solid transparent;
  transition: 0.2s background ease-in;

  &:hover {
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.2s background ease-in;
  }
`;

export default StartGame;
