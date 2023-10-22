import styled from "styled-components";
import NavLinks from "./NavLinks";

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0 5%;
`;

function NavBar() {
  return (
    <nav>
      <StyledUl>
        <NavLinks>Convert Case</NavLinks>
        <NavLinks>Bold Text Generater</NavLinks>
        <NavLinks>Duplicate Line remover</NavLinks>
        <NavLinks>Mirror Text Converter</NavLinks>
        <NavLinks>Plain Text Converter</NavLinks>
        <NavLinks>Reverse Text Converter</NavLinks>
        <NavLinks>Sentense Case Converter</NavLinks>
      </StyledUl>
    </nav>
  );
}

export default NavBar;
