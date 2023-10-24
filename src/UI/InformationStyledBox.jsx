/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: antiquewhite;
  padding: 2rem;

  & h4 {
    font-size: 1.5rem;
  }

  & p {
    font-size: 1.4rem;
    padding-top: 1rem;
  }
`;

function InformationStyledBox({ data }) {
  const html = data.description;
  const parser = new DOMParser();
  const descrip = parser.parseFromString(html, "text/html");

  return (
    <StyledBox>
      <h4>{data.header}</h4>
      <p>{descrip.body.innerHTML}</p>
    </StyledBox>
  );
}

export default InformationStyledBox;
