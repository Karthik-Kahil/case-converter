/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledBox = styled.div`
  background-color: #f5eec8;
  color: #186f65;
  padding: 2rem;
  border-top: 3px solid #186f65;

  & h4 {
    font-size: 1.7rem;
  }

  & p {
    font-size: 1.3rem;
    padding-top: 2rem;
    hyphens: none;
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
