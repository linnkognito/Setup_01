import styled from 'styled-components';

import NavBar from './NavBar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5em;
  padding: 1em 4em;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Reusable Components</h1>
      <NavBar />
    </StyledHeader>
  );
}

export default Header;
