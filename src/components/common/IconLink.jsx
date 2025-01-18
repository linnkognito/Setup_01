import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Link = styled.a`
  width: 2rem;
  height: 2rem;
  margin: 0.2em;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.secondary};
`;

function IconLink({ url = '', icon = '' }) {
  return (
    <Link href={url} target='_blank' rel='noopener noreferrer'>
      <StyledFontAwesomeIcon icon={['fab', icon]} />
    </Link>
  );
}

export default IconLink;
