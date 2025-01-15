import styled from 'styled-components';
import { bottomShadowLg } from '../../styles/mixins';

import NavBar from './NavBar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5em;
  padding: 0 4em;
  ${bottomShadowLg}
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
