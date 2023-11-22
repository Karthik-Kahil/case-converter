/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledInput = styled.div`
  label {
    font-size: 1.2rem;
    color: #f5eec8;
  }

  input {
    color: #000;
    width: 100%;
  }
`;

export function InputFieldSet({ htmlFor, label }) {
  return (
    <StyledInput>
      <label htmlFor={htmlFor}>{label}</label>
      <input type="text" name={htmlFor} />
    </StyledInput>
  );
}
