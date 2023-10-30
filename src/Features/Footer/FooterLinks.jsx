/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  font-size: 1rem;
`;

function FooterLinks({ children }) {
  return (
    <StyledLink>
      <Link>{children}</Link>
    </StyledLink>
  );
}

export default FooterLinks;
