import styled from "styled-components";
import NavLinks from "./NavLink";

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
        <NavLinks to="/">Convert Case</NavLinks>
        <NavLinks to="/bold-text-generater">Bold Text Generater</NavLinks>
        <NavLinks to="/duplicate-line-remover">Duplicate Line remover</NavLinks>
        <NavLinks to="/mirror-text-converter">Mirror Text Converter</NavLinks>
        <NavLinks to="/plain-text-converter">Plain Text Converter</NavLinks>
        <NavLinks to="/reverse-text-converter">Reverse Text Converter</NavLinks>
        <NavLinks to="/sentense-text-converter">...more tools</NavLinks>
      </StyledUl>
    </nav>
  );
}

export default NavBar;
