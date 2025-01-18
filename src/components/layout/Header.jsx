import styled from 'styled-components';

import NavBar from './NavBar';
import ButtonDarkMode from '../buttons/ButtonDarkMode';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5em;
  padding: 0 2em;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

const StyledActionbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-right: 1em;
`;

const StyledSearchbar = styled.input`
  min-width: 250px;
  height: 1.9rem;
`;

function Header() {
  return (
    <StyledHeader>
      <NavBar />
      <h1>Setup</h1>
      <StyledActionbar>
        <StyledSearchbar
          type='search'
          placeholder='Search...'
          ariaLabel='Searchbar'
        />
        <ButtonDarkMode />
      </StyledActionbar>
    </StyledHeader>
  );
}

export default Header;
