/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  font-size: 1rem;
`;

function FooterLinks({ children, to }) {
  return (
    <StyledLink>
      <Link to={to}>{children}</Link>
    </StyledLink>
  );
}

export default FooterLinks;
