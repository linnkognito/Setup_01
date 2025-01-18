import styled from 'styled-components';
import { boxShadowLg } from '../../../styles/mixins';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1em;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  min-height: fit-content;
  overflow: auto;
  padding: 2em;
  background-color: ${({ theme }) => theme.background};
  ${boxShadowLg}
`;

function Container({ children, width = '100%', height = '100%', ...props }) {
  return (
    <StyledContainer width={width} height={height} {...props}>
      {children}
    </StyledContainer>
  );
}

export default Container;
