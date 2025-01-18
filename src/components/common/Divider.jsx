import styled from 'styled-components';

const StyledDivider = styled.div`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  border-bottom: 1px solid ${({ theme }) => theme.light};
`;

function Divider({ width = '100%', margin = '0' }) {
  return <StyledDivider width={width} margin={margin} />;
}

export default Divider;
