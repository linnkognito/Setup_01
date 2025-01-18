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
export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

// Borders
export const borderPrimary = css`
  border: 1px solid ${({ theme }) => theme.primary};
`;
export const borderBottom = css`
  border-bottom: 1px solid ${({ theme }) => theme.primary};
`;

// Border radius
export const borderRadius = css`
  border-radius: 0.2em;
`;
export const borderRadiusTop = css`
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;
`;
export const borderRadiusBottom = css`
  border-bottom-left-radius: 0.2em;
  border-bottom-right-radius: 0.2em;
`;

// Padding & Margin //
export const marginBase = css`
  margin: 1em 4em;
`;
