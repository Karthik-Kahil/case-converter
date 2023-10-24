import styled from "styled-components";
import InformationStyledBox from "./InformationStyledBox";

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-top: 2rem;
`;

function InformationBox() {
  return (
    <StyledBox>
      <InformationStyledBox />
      <InformationStyledBox />
      <InformationStyledBox />
      <InformationStyledBox />
      <InformationStyledBox />
    </StyledBox>
  );
}

export default InformationBox;
