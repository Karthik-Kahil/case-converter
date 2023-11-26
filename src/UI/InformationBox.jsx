/* eslint-disable react/prop-types */
import styled from "styled-components";
import InformationStyledBox from "./InformationStyledBox";

const StyledBox = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.singleColumn ? `1fr` : `1fr 1fr`)};
  grid-gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: auto;

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`;

// eslint-disable-next-line react/prop-types
function InformationBox({ data, singleColumn }) {
  return (
    <StyledBox singleColumn={singleColumn}>
      {data.map((data) => (
        <InformationStyledBox key={data.header} data={data} />
      ))}
    </StyledBox>
  );
}

export default InformationBox;
