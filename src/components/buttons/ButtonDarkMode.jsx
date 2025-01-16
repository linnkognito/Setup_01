import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import styled from 'styled-components';

import Icon from '../common/Icon';

const StyledButton = styled.button`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  /* background-color: transparent; */
  box-shadow: none;
`;

function ButtonDarkMode() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  return (
    <StyledButton
      isDarkMode={isDarkMode}
      ariaLabel='Toggle darkmode'
      onClick={() => dispatch(toggleTheme())}
    >
      <Icon icon='dark_mode' />
    </StyledButton>
  );
}

export default ButtonDarkMode;
