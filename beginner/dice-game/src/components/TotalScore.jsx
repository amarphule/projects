import styled from "styled-components";
// eslint-disable-next-line react/prop-types
const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  width: 135px;
  h1 {
    font-size: 100px;
    font-weight: 500px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
