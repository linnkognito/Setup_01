// Spinner from: https://github.com/n3r4zzurr0/svg-spinners/tree/main

import styled, { keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
  0% {
    y: 1px;
    height: 22px;
  }
  93.75% {
    y: 5px;
    height: 14px;
    opacity: 0.2;
  }
`;

const StyledSpinner = styled.svg`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  rect {
    fill: ${({ theme, color }) => color || theme.primary};
    animation: ${spinnerAnimation} ${({ speed }) => speed} linear infinite;

    &:nth-child(1) {
      animation-delay: -0.8s;
    }
    &:nth-child(2) {
      animation-delay: -0.65s;
    }
    &:nth-child(3) {
      animation-delay: -0.5s;
    }
  }
`;

const Spinner = ({ size = '2rem', color = '', speed = '0.8s' }) => {
  return (
    <StyledSpinner
      size={size}
      color={color}
      speed={speed}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <rect x='1' y='1' width='6' height='22' />
      <rect x='9' y='1' width='6' height='22' />
      <rect x='17' y='1' width='6' height='22' />
    </StyledSpinner>
  );
};

export default Spinner;
