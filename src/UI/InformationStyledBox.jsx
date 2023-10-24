import styled from "styled-components";

const StyledBox = styled.div`
  background-color: antiquewhite;
  padding: 2rem;
`;

function InformationStyledBox() {
  return (
    <StyledBox>
      <h4>Welcome to the Convert Case Text Generator Tool</h4>
      <p>
        A very handy online text tool where you can change between lower case
        and upper case letters, where you can capitalize, uncapitalize, convert
        to mix case and transform your text. Explore the options below:
      </p>
    </StyledBox>
  );
}

export default InformationStyledBox;
