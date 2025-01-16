import {
  borderPrimary,
  flexColumn,
  noBorderRadiusTop,
} from '../../styles/mixins';
import styled from 'styled-components';
import Wrapper from './containers/Wrapper';
import Container from './containers/Container';
import Actionbar from './Actionbar';
import Button from '../buttons/Button';
import Icon from './Icon';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => `${theme.secondary}20`};
  backdrop-filter: blur(0.2em);
  z-index: 1000;
`;

const StyledWrapper = styled(Wrapper)`
  ${flexColumn}
  min-width: ${({ minWidth }) => minWidth};
  min-height: ${({ minHeight }) => minHeight};
  ${borderPrimary}
`;

const StyledContainer = styled(Container)`
  flex-grow: 1;
  ${noBorderRadiusTop}
`;

function Modal({
  children,
  minWidth = '60vw',
  minHeight = '50vh',
  actionbar = true,
  onClose = () => {},
}) {
  return (
    <StyledModal>
      <StyledWrapper minWidth={minWidth} minHeight={minHeight}>
        {actionbar && (
          <Actionbar title='A modal window'>
            <Button onClick={onClose}>
              <Icon icon='close' />
            </Button>
          </Actionbar>
        )}
        <StyledContainer>{children}</StyledContainer>
      </StyledWrapper>
    </StyledModal>
  );
}

export default Modal;
