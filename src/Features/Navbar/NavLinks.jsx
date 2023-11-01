import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  list-style: none;
  font-size: 1.3rem;

  & a {
    display: inline-block;
    text-decoration: none;
    background-color: #748e63;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #ffffff;
  }

  .active {
    background-color: #99b080;
  }
`;

// eslint-disable-next-line react/prop-types
function NavLinks({ children, to }) {
  return (
    <StyledLink>
      <NavLink to={to}>{children}</NavLink>
    </StyledLink>
  );
}

export default NavLinks;
