import styled from 'styled-components';
import { borderPrimary } from '../../styles/mixins';

const StyledActionbar = styled.div`
  display: flex;
  justify-content: ${({ title }) => (title ? 'space-between' : 'end')};
  width: 100%;
  padding: 0.2em 0.3em 0.2em 1em;
  background-color: ${({ theme, background }) => background || theme.light};
  ${borderPrimary}
`;

function Actionbar({ children, title = '', background = null }) {
  return (
    <StyledActionbar title={title} background={background}>
      {title && <h3>{title}</h3>}

      {children && <div>{children}</div>}
    </StyledActionbar>
  );
}

export default Actionbar;
