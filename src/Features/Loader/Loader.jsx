import styled from "styled-components";

const StyledLoader = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  animation: sh8-0 1.5s infinite linear;

  &:before,
  &:after {
    content: "";
    grid-area: 1/1;
    background: #445c48;
    clip-path: polygon(0 0%, 100% 0, 100% 100%);
    animation: inherit;
    animation-name: sh8-1;
  }

  &:after {
    --s: -1;
    background: #f5eec8;
  }

  @keyframes sh8-0 {
    66% {
      transform: skewX(0deg);
    }
    80%,
    100% {
      transform: skewX(-45deg);
    }
  }

  @keyframes sh8-1 {
    0% {
      transform: scale(var(--s, 1)) translate(-0.5px, 0);
    }
    33% {
      transform: scale(var(--s, 1)) translate(calc(1px - 50%), calc(1px - 50%));
    }
    66% {
      transform: scale(var(--s, 1)) translate(calc(1px - 50%), 0%);
    }
    100% {
      transform: scale(var(--s, 1)) translate(calc(0.5px - 50%), 0%);
    }
  }
`;

const StyledDiv = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
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
