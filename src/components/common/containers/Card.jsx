import styled from 'styled-components';
import { borderPrimary } from '../../../styles/mixins';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: ${({ width }) => width};
  padding: 0.5em;
  background-color: transparent;
  ${borderPrimary}
  border-radius: 0;
`;

function Container({ children, width = 'fit-content', ...props }) {
  return (
    <StyledContainer width={width} {...props}>
      {children}
    </StyledContainer>
  );
}

export default Container;
