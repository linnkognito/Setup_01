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

// Shadows & Borders //

// 360 shadows
export const boxShadowSm = css`
  box-shadow: 0 0 3px ${({ theme }) => theme.primary};
`;
export const boxShadowLg = css`
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
`;
export const boxShadowSmBorder = css`
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 3px ${({ theme }) => theme.primary};
`;
export const boxShadowLgBorder = css`
  border: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px ${({ theme }) => theme.primary};
`;

// Bottom shadows
export const bottomShadowLg = css`
  box-shadow: 0 2px 8px ${({ theme }) => theme.primary};
`;

// Padding & Margin //
export const marginBase = css`
  margin: 1em 4em;
`;
