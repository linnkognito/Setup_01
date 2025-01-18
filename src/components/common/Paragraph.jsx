import styled from 'styled-components';

const StyledParagraph = styled.p`
  padding: 0 0.7em;
`;

const StyledQuote = styled.p`
  padding: 0 0.7em;
  margin-left: 1em;
  padding-left: 1.5em;
  font-size: 1.1rem;
  border-left: 5px solid ${({ theme }) => theme.light};
`;

function Paragraph({ children, quote = false }) {
  const q = <StyledQuote>{children}</StyledQuote>;

  return quote ? q : <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
