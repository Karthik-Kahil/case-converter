/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  align-items: center;

  input {
    width: 100%;
    height: 20px;
    padding: 20px;
    color: #186f65;
    background-color: #f5eec8;
    margin-top: 2rem;
    min-height: 20px;
    overflow: scroll;
    outline: 0;
    border: 0;
  }
`;

function MiniInputLabel({ label }) {
  return (
    <StyledDiv>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} />
    </StyledDiv>
  );
}

export default MiniInputLabel;
