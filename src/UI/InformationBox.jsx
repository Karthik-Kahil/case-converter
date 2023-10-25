/* eslint-disable react/prop-types */
import styled from "styled-components";
import InformationStyledBox from "./InformationStyledBox";

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

// eslint-disable-next-line react/prop-types
function InformationBox({ data }) {
  return (
    <StyledBox>
      {data.map((data) => (
        <InformationStyledBox key={data.header} data={data} />
      ))}
    </StyledBox>
  );
}

export default InformationBox;
