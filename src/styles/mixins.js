import { css } from 'styled-components';

// Flexbox //
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;
export const flexAlignCenter = css`
  display: flex;
  align-items: center;
`;

// Containers //
export const container = css`
  width: fit-content;
  padding: 1em;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
`;

// Shadows //
export const boxShadowSm = css`
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 3px ${({ theme }) => theme.primary};
`;
export const boxShadowLg = css`
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
`;

// Padding & Margin //
export const marginBase = css`
  margin: 1em 4em;
`;
