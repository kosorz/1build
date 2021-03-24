import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  flex: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

const Spinner = styled.div`
  animation: ${Rotate} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid;
  border-right: 2px solid;
  border-bottom: 2px solid;
  border-left: 4px solid;
  border-color: ${({ theme }) => theme.color.primary};
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const S = {
  Wrapper,
  Spinner,
};

export default S;
