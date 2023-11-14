import { Outlet } from "react-router-dom";
import NavBar from "./Features/Navbar/NavBar";
import styled from "styled-components";
import Footer from "./Features/Footer/Footer";
import Logo from "./UI/Logo";

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
      <Logo />
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledDiv>
  );
}

export default AppLayout;
