import styled from 'styled-components';
import Button from './Button';
import { borderBottom } from '../../styles/mixins';

const StyledButton = styled(Button)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondary};
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.lightest};
    ${borderBottom}
    transform: none;
  }

  &:active,
  &:focus {
    box-shadow: none;
    border: none;
    ${borderBottom}
  }
`;

function ButtonText({
  children,
  ariaLabel = '',
  onClick = () => {},
  disabled = false,
}) {
  return (
    <StyledButton ariaLabel={ariaLabel} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
}

export default ButtonText;
