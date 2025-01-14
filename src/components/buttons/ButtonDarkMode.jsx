import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';

import Button from './Button';
import Icon from '../common/Icon';

function ButtonDarkMode() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  return (
    <Button isDarkMode={isDarkMode} onClick={() => dispatch(toggleTheme())}>
      <Icon icon='dark_mode' />
    </Button>
  );
}

export default ButtonDarkMode;
