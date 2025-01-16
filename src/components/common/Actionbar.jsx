import styled from 'styled-components';
import { borderPrimary, noBorderRadiusBottom } from '../../styles/mixins';
import Wrapper from './containers/Wrapper';

const StyledActionbar = styled.div`
  display: flex;
  justify-content: ${({ title }) => (title ? 'space-between' : 'end')};
  width: 100%;
  padding: 0.2em 0.3em 0.2em 1em;
  background-color: ${({ theme, background }) => background || theme.light};
  ${borderPrimary}
  ${noBorderRadiusBottom}
`;

function Actionbar({ children, title = '', background = null }) {
  return (
    <StyledActionbar title={title} background={background}>
      {title && <h3>{title}</h3>}

      {children && <Wrapper>{children}</Wrapper>}
    </StyledActionbar>
  );
}

export default Actionbar;
