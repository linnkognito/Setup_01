import styled from 'styled-components';

const StyledLink = styled.a`
  margin: 0.2em;

  &:hover {
    background-color: ${({ theme }) => theme.lightest};
  }
`;

function Link({ children, url = '#' }) {
  return (
    <StyledLink href={url} target='_blank' rel='noopener noreferrer'>
      {children}
    </StyledLink>
  );
}

export default Link;
