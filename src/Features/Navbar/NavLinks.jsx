import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  list-style: none;
  font-size: 1.2rem;

  & a {
    display: inline-block;
    text-decoration: none;
    background-color: #748e63;
    padding: 1rem 2rem;
    border-radius: 10px;
    color: #ffffff;
  }
`;

// eslint-disable-next-line react/prop-types
function NavLinks({ children }) {
  return (
    <StyledLink>
      <Link>{children}</Link>
    </StyledLink>
  );
}

export default NavLinks;
