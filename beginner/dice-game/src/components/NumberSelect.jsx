import styled from "styled-components";
// eslint-disable-next-line react/prop-types
const NumberSelect = ({ selectedNumber, setSelectedNumber }) => {
  const numberArray = [1, 2, 3, 4, 5, 6];
  return (
    <NumberContainer>
      <div className="flex">
        {numberArray.map((value, i) => {
          return (
            <Box
              key={i}
              isselected={value === selectedNumber}
              onClick={() => setSelectedNumber(value)}
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
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
