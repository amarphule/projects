import styled from "styled-components";

export const Button = styled.button`
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

export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;
  transition: 0.2s background ease-in;
  &:hover {
    background: black;
    color: white;
    border: 1px solid black;
    transition: 0.2s background ease-in;
  }
`;
