import styled from "styled-components";
import { TbFileSad } from "react-icons/tb";

const StyledDiv = styled.div`
  font-size: 5rem;
  text-align: center;
  margin: 2rem 0;
`;

function PageNotFound() {
  return (
    <StyledDiv>
      Page not found <TbFileSad />
    </StyledDiv>
  );
}

export default PageNotFound;
