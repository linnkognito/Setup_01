import { createGlobalStyle } from 'styled-components';
import {
  boxShadowSm,
  boxShadowLg,
  marginBase,
  boxShadowLgBorder,
} from './mixins';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Questrial', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.007em;
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.body};
    transition: all 0.3s linear;
  }

  main {
    display: flex;
    flex-grow: 1;
    gap: 2em;
    ${marginBase}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};
  }
  a:hover {
    color: ${({ theme }) => theme.primary};
  }

  button {
    display: flex;
    width: fit-content;
    padding: 0.2em 0.4em;
    font-family: inherit;
    font-size: inherit;
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.lighter};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2em;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.primary};
  }
  button:focus {
    outline: none;
    ${boxShadowLgBorder}
  }
  button:active {
    color: ${({ theme }) => theme.highlight};
    background: ${({ theme }) => theme.lighter};
    ${boxShadowSm}
  }

  input {
    width: 100%;
    max-width: 250px;
    padding: 0.2em 0.3em;
    font-family: inherit;
    font-size: inherit;
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.highlight};
    outline: none;
    border: none;
    border-radius: 0.1em;
    ${boxShadowSm}
  }
  input::placeholder {
    color: ${({ theme }) => theme.light};
  }
  input:focus::placeholder {
    color: ${({ theme }) => theme.lighter};
  }
  input:focus {
    color: ${({ theme }) => theme.primary};
    ${boxShadowLg}
  }

  /* Radio & Checkbox */
  input[type='radio'],
  input[type='checkbox'] {
    box-shadow: none;
    background: transparent;
  }
  input[type='radio']:focus,
  input[type='checkbox']:focus {
    box-shadow: none;
  }
  input[type='radio']:active,
  input[type='checkbox']:active {
    box-shadow: none;
  }

  label {
    min-width: 80px;
    font-size: inherit;
    color: ${({ theme }) => theme.secondary};
  }

  ul,
  ol {
    list-style: none;
  }

  h1,
  h2,
  h3 {
    font-family: 'DM Serif Display', serif;
    color: ${({ theme }) => theme.secondary};
  }
  h1 {
    padding: 0.3em;
    font-size: 2rem;
    font-weight: 400;
  }
  h2 {
    font-size: 1.9rem;
    font-weight: 200;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
  }
  h5 {
    font-size: 1.05rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
  }

  ::selection {
    background-color: ${({ theme }) => theme.lighter};
  }
`;
