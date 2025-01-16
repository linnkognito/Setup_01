import styled from 'styled-components';
import Button from '../buttons/Button';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const StyledNavBtn = styled(Button)`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    background: none;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0;
    transform: none;
  }
`;

const btns = [{ value: 'home' }, { value: 'products' }, { value: 'profile' }];

function NavBar({ navButtons = btns }) {
  return (
    <StyledNav>
      {navButtons.length > 0 &&
        navButtons.map((btn, i) => (
          <StyledNavBtn
            key={i}
            value={btn.value || ''}
            ariaLabel={btn.ariaLabel || undefined}
            onClick={btn.onClick || undefined}
            disabled={btn.isDisabled || false}
          />
        ))}
    </StyledNav>
  );
}

export default NavBar;
