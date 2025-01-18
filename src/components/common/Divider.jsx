import styled from 'styled-components';
import { borderBottom } from '../../styles/mixins';

const StyledDivider = styled.div`
  width: ${({ width }) => width};
  ${borderBottom}
`;

function Divider({ width = '100%' }) {
  return <StyledDivider width={width} />;
}

export default Divider;
