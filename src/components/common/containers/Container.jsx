import styled from 'styled-components';
import { boxShadowLg } from '../../../styles/mixins';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: ${({ width }) => (width ? width : '100%')};
  padding: 2em;
  background-color: ${({ theme }) => theme.background};
  ${boxShadowLg}
`;

function Container({ children, width = null, ...props }) {
  return (
    <StyledContainer width={width} {...props}>
      {children}
    </StyledContainer>
  );
}

export default Container;
