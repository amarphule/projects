/* eslint-disable react/prop-types */
import styled from "styled-components";
const NumberSelect = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {numberArray.map((value, i) => {
          return (
            <Box
              key={i}
              isSelected={value === selectedNumber}
              onClick={() => numberSelectorHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelect;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  font-weight: 700;
  font-size: 24px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
