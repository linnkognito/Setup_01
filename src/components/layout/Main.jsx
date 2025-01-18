import styled from 'styled-components';

const StyledMain = styled.main`
  height: 100%;
`;

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
