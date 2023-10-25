/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #f5eec8;
  color: #186f65;
  padding: 2rem;

  & ::before {
    border: 1px solid #030303;
    position: absolute;
    width: 100%;
    top: 0;
  }

  & h4 {
    font-size: 1.4rem;
  }

  & p {
    font-size: 1.3rem;
    padding-top: 1rem;
  }
`;

function InformationStyledBox({ data }) {
  return (
    <StyledBox>
      <h4>{data.header}</h4>
      <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
    </StyledBox>
  );
}

export default InformationStyledBox;
