import styled from "styled-components";
import NavLinks from "./NavLink";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  grid-gap: 1rem;
  margin-top: 2rem;
  padding: 0 5%;
  overflow: hidden;
  flex-wrap: wrap;

  & a {
    outline-color: #555d44;
  }
`;

const titleName = [
  {
    pathName: "/",
    linkName: "Convert Case",
    titleName: "Convert Case",
  },
  {
    pathName: "/bold-text-generater",
    linkName: "Bold Text Generater",
    titleName: "Bold Text Generater",
  },
  {
    pathName: "/duplicate-line-remover",
    linkName: "Duplicate Line remover",
    titleName: "Duplicate Line remover",
  },
  {
    pathName: "/mirror-text-converter",
    linkName: "Mirror Text Converter",
    titleName: "Mirror Text Converter",
  },
  {
    pathName: "/plain-text-converter",
    linkName: "Plain Text Converter",
    titleName: "Plain Text Converter",
  },
  {
    pathName: "/reverse-text-converter",
    linkName: "Reverse Text Converter",
    titleName: "Reverse Text Converter",
  },
  {
    pathName: "/sentense-text-converter",
    linkName: "...more tools",
    titleName: "...more tools",
  },
];

function NavBar() {
  const currentLocation = useLocation();

  useEffect(() => {
    const currentData = titleName.filter(
      (data) => data.pathName === currentLocation.pathname
    );

    document.title =
      "CaseMorph Pro | " + currentData[0].titleName || "CaseMorph Pro";
  }, [currentLocation.pathname]);

  return (
    <nav>
      <StyledUl>
        {titleName.map((data) => (
          <NavLinks key={data.titleName} to={data.pathName}>
            {data.linkName}
          </NavLinks>
        ))}
        {titleName.map((data) => (
          <NavLinks key={data.titleName} to={data.pathName}>
            {data.linkName}
          </NavLinks>
        ))}
      </StyledUl>
    </nav>
  );
}

export default NavBar;
