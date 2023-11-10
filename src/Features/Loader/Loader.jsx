import styled from "styled-components";

const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  transform: rotate(45deg);
  animation: sh3-0 1.5s infinite linear;

  &:before,
  &:after {
    content: "";
    width: 50%;
    background: #f5eec8;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
    animation: inherit;
    animation-name: sh3-1;
  }

  &:after {
    clip-path: polygon(0 0, 100% 50%, 0% 100%);
    animation-name: sh3-2;
  }

  @keyframes sh3-0 {
    25% {
      width: 50px;
      height: 50px;
      transform: rotate(0);
    }
    50% {
      width: 50px;
      height: 50px;
    }
    75% {
      width: 70.7px;
      height: 35.35px;
    }
    100% {
      width: 70.7px;
      height: 35.35px;
      transform: rotate(0);
    }
  }

  @keyframes sh3-1 {
    0%,
    25% {
      clip-path: polygon(0 50%, 100% 0, 100% 100%);
      transform: translate(0.3px);
    }
    50% {
      clip-path: polygon(0 50%, 100% 0, 100% 100%);
      transform: translate(-5px);
    }
    75% {
      clip-path: polygon(0 100%, 0 0, 100% 100%);
      transform: translate(-5px);
    }
    100% {
      clip-path: polygon(0 100%, 0 0, 100% 100%);
      transform: translate(17.7px);
    }
  }

  @keyframes sh3-2 {
    0%,
    25% {
      clip-path: polygon(0 0, 100% 50%, 0 100%);
      transform: translate(-0.3px);
    }
    50% {
      clip-path: polygon(0 0, 100% 50%, 0 100%);
      transform: translate(5px);
    }
    75% {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      transform: translate(5px);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      transform: translate(-17.7px);
    }
  }
`;

const StyledDiv = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

function Loader() {
  return (
    <StyledDiv>
      <StyledLoader></StyledLoader>
    </StyledDiv>
  );
}

export default Loader;
