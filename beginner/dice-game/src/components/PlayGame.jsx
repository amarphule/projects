import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import TotalScore from "./TotalScore";
import { useState } from "react";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [currentState, setCurrentState] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * max + min);
  };

  const onClickHandler = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentState(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  const resetHandler = () => {
    setScore(0);
    setCurrentState(1);
    setSelectedNumber(undefined);
  };
  return (
    <ScoreBoard>
      <div className="top_bar">
        <TotalScore score={score} />
        <NumberSelect
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice currentState={currentState} onClick={onClickHandler} />
      <div className="btns">
        <OutlineButton onClick={resetHandler}>Reset score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} rules
        </Button>
      </div>
      {showRules && <Rules />}
    </ScoreBoard>
  );
};

export default PlayGame;

const ScoreBoard = styled.div`
  padding: 70px;
  margin: 0 auto;
  .top_bar {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
