import styled from "styled-components";
import NumberSelect from "./NumberSelect";
import TotalScore from "./TotalScore";
import { useState } from "react";

const PlayGame = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  return (
    <ScoreBoard>
      <div className="top_bar">
        <TotalScore score={score} />
        <NumberSelect
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
    </ScoreBoard>
  );
};

export default PlayGame;

const ScoreBoard = styled.div`
  padding: 20px;
  margin: 0 auto;
  .top_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
