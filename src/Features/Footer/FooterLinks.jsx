/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.li`
  font-size: 1rem;
`;

function FooterLinks({ children, to }) {
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
  };

  return (
    <StyledLink>
      <Link to={to} onClick={() => navigateHandler(to)}>
        {children}
      </Link>
    </StyledLink>
  );
}

export default FooterLinks;
