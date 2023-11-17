import { Outlet } from "react-router-dom";
import NavBar from "./Features/Navbar/NavBar";
import styled from "styled-components";
import Footer from "./Features/Footer/Footer";
import Logo from "./UI/Logo";
import QuickSearch from "./UI/QuickSearch";
import { useState } from "react";

const StyledMain = styled.main`
  padding: 0 5%;
  margin-top: 5rem;
`;

const StyledDiv = styled.div`
  max-width: 1400px;
  margin: auto;
`;

function AppLayout() {
  const [searchShow, setSearchShow] = useState(false);

  const keyPressHandler = (e) => {
    console.log(e.key);
    if ((e.metaKey || e.ctrlKey) && e.key === "/")
      setSearchShow((show) => !show);
    if (e.key === "Escape") setSearchShow((show) => !show);
  };

  return (
    <StyledDiv onKeyDown={keyPressHandler}>
      {searchShow && <QuickSearch />}
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
