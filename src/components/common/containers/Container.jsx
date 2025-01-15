import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
`;

function Container({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}

export default Container;
