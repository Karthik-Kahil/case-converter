import { Outlet } from "react-router-dom";
import NavBar from "./Features/Navbar/NavBar";
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 5%;
  margin-top: 5rem;
`;

const StyledDiv = styled.div`
  max-width: 1400px;
  margin: auto;
`;

function AppLayout() {
  return (
    <StyledDiv>
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledDiv>
  );
}

export default AppLayout;
