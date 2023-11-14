import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  padding: 30px 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  & img {
    width: 400px;
    max-width: 400px;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`;

function Logo() {
  return (
    <StyledDiv>
      <img src="../public/logo_casemorph.png" alt="casemorph pro" />
    </StyledDiv>
  );
}

export default Logo;
