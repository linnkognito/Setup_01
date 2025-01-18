import styled from 'styled-components';
import { borderPrimary } from '../../styles/mixins';

const TableWrapper = styled.div`
  width: ${({ width }) => width};
  padding: 0.2em;
  ${borderPrimary}
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const TableHead = styled.thead`
  background: ${({ theme }) => theme.primary};
`;
const TableHeadRow = styled.tr`
  border-bottom: 0.2em solid ${({ theme }) => theme.background};
`;
const TableHeader = styled.th`
  padding: 0.2em 1em;
  text-align: start;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  background: ${({ theme }) =>
    theme.name === 'lightTheme' ? theme.lighter : theme.primary};
`;

const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background: ${({ theme }) =>
      theme.name === 'lightTheme' ? theme.lightest : theme.body};
  }
`;
const TableData = styled.td`
  width: fit-content;
  padding: 0.2em 1.2em;
  text-align: start;
`;

function Table({ items = [], width = 'fit-content' }) {
  return (
    <TableWrapper width={width}>
      <StyledTable>
        <TableHead>
          <TableHeadRow>
            {items.columns?.map((col) => (
              <TableHeader key={col.header}>{col.header}</TableHeader>
            ))}
          </TableHeadRow>
        </TableHead>

        <TableBody>
          {items.rows?.map((row, i) => (
            <tr key={row.id || i}>
              {items.columns.map((col) => (
                <TableData key={col.key}>{row[col.key]}</TableData>
              ))}
            </tr>
          ))}
        </TableBody>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table;
