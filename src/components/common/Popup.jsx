import { flexColumn, noBorderRadiusTop } from '../../styles/mixins';
import styled from 'styled-components';
import Container from './containers/Container';
import Actionbar from './Actionbar';
import Button from '../buttons/Button';
import Icon from './Icon';

const StyledPopup = styled.div`
  position: fixed;
  ${flexColumn}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: 1000;
`;

const StyledContainer = styled(Container)`
  flex-grow: 1;
  padding: 1em 1.2em;
  ${noBorderRadiusTop}
`;

function Popup({
  children,
  actionbar = true,
  background = '',
  minWidth = '20%',
  maxWidth = '40%',
  onClose = () => {},
}) {
  return (
    <StyledPopup minWidth={minWidth} maxWidth={maxWidth}>
      {actionbar && (
        <Actionbar title='Popup' background={background}>
          <Button onClick={onClose}>
            <Icon icon='close' />
          </Button>
        </Actionbar>
      )}

      <StyledContainer>{children}</StyledContainer>
    </StyledPopup>
  );
}

export default Popup;
