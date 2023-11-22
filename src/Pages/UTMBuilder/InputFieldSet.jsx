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
    background-color: #f5eec8;
    outline: 0;
    border: 0;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    margin-top: 0.6rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #f5eec8;
  }
`;

export function InputFieldSet({ htmlFor, label, register }) {
  return (
    <StyledInput>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        {...register(`${htmlFor}`, { required: false })}
        type="text"
        name={htmlFor}
        id={htmlFor}
      />
    </StyledInput>
  );
}
