import { createGlobalStyle } from 'styled-components';
import {
  boxShadowSm,
  boxShadowLg,
  marginBase,
  boxShadowLgBorder,
  boxShadowSmBorder,
} from './mixins';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-radius: 0.2em;
  }

  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Offside', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.body};
    transition: all 0.3s linear;
  }

  main {
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
    color: inherit;
    background: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 0.2em;
    ${boxShadowSmBorder}
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  button:hover {
    background: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
  button:focus {
    outline: none;
    ${boxShadowLgBorder}
  }

  input,
  textarea {
    width: fit-content;
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
  label {
    font-size: inherit;
    color: ${({ theme }) => theme.secondary};
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.secondary};
  }
  h1 {
    padding: 0.5em 0.5em 0.2em 0;
    font-weight: 400;
    font-style: italic;
    border-right: 1px solid ${({ theme }) => theme.light};
    border-radius: 0;
  }
  h2 {
    font-weight: 200;
  }
  h3 {
    font-weight: 400;
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
`;
