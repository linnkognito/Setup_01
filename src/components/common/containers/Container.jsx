import styled from 'styled-components';
import { container } from '../../../styles/mixins';

const StyledContainer = styled.div`
  ${container}
`;

function Container({ children, className = '' }) {
  return <StyledContainer className={className}>{children}</StyledContainer>;
}

export default Container;
