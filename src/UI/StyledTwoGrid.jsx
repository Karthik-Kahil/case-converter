import styled from "styled-components";

const StyledTwoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
  }
`;

export default StyledTwoGrid;
