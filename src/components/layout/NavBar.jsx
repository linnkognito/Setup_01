import styled from 'styled-components';
import ButtonText from '../buttons/ButtonText';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const btns = [
  { value: 'home' },
  { value: 'exhibitions' },
  { value: 'museum' },
  { value: 'member' },
];

function NavBar({ navButtons = btns }) {
  return (
    <StyledNav>
      {navButtons.length > 0 &&
        navButtons.map((btn, i) => (
          <ButtonText
            key={i}
            ariaLabel={btn.ariaLabel || ''}
            onClick={() => {}}
            disabled={btn.isDisabled || false}
          >
            {btn.value || ''}
          </ButtonText>
        ))}
    </StyledNav>
  );
}

export default NavBar;
