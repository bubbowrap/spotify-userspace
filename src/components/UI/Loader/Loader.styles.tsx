import styled from 'styled-components';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  height: auto;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Spinner = styled.div`
  align-self: center;
`;

export const SpinnerCircle = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  padding: 0;

  &:after {
    display: block;
    content: '';
    position: absolute;
    left: -4px;
    top: -4px;
    width: 32px;
    height: 32px;
    animation-name: rotate-loader;
    animation-duration: 0.4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border: 4px solid;
    border-color: transparent white transparent transparent;
    border-radius: 200px;
    tranform: rotate(0deg);
    z-index: 1;
  }

  @keyframes rotate-loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
