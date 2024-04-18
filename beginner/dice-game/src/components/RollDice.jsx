import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const RollDice = ({ currentState, onClick }) => {
  return (
    <RollContainer>
      <div className="dice" onClick={onClick}>
        <img src={`/images/dice_${currentState}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll</p>
    </RollContainer>
  );
};

export default RollDice;

const RollContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
