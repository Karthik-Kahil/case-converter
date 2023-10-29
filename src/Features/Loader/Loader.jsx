import styled from "styled-components";

const StyledLoader = styled.div`
  width: 100px;
  aspect-ratio: 1;
  --_c: radial-gradient(farthest-side, #25b09b 92%, #0000);
  background: var(--_c) top, var(--_c) left, var(--_c) right, var(--_c) bottom;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: s7 1s infinite;
  position: absolute;

  @keyframes s7 {
    to {
      transform: rotate(0.5turn);
    }
  }
`;

const StyledDiv = styled.div`
  background-color: #e28813;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Loader() {
  return (
    <StyledDiv>
      <StyledLoader></StyledLoader>
    </StyledDiv>
  );
}

export default Loader;
