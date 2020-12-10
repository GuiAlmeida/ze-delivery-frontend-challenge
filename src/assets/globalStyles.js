import styled, { createGlobalStyle } from 'styled-components';

import colors from './colors';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.lighter};
    color: ${colors.dark};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  table, th, td {
    border: none;
    border-collapse: collapse;
  }

  th, td {
    padding: 0;
    text-align: left;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0px;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: ${colors.primary};
    transition: text-shadow .3s;
  }

  a, button {
    outline: none;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  button, .button {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-family: 'Inter', sans-serif;
    border: none;
    cursor: pointer;
  }

  .button-small {
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    padding: 4px 11px;
  }

  .button-large {
    border-radius: 10px;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
    padding: 15px 30px 14px;
  }

  button:hover,
  button:focus {
    outline: none;
    opacity: 0.8;
  }

  a:hover,
  a:focus {
    outline: none;
    text-decoration: underline;
  }

  a:hover,
  button:hover,
  button:focus {
    -webkit-transition: all 300ms ease-out;
    -moz-transition: all 300ms ease-out;
    -o-transition: all 300ms ease-out;
    transition: all 300ms ease-out;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input {
    width: 100%;
    background: none;
    border: none;
    padding: 14px 12px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Inter', sans-serif;
  }

  input, textarea, button, select, a, div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  input:read-only { color: #B7B7B7 }

  input::-ms-clear, input::-ms-reveal {
    display: none;
  }

  @keyframes autofill {
    to {
      color: #000000;
      background: none;
    }
  }

  input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
  }

  ::-moz-selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.primary};
  }

  ::-moz-focus-inner { border: 0 }

  ::-webkit-input-placeholder { color: #CCCCCC }

  :-moz-placeholder {
    color: #CCCCCC;
    opacity:  1;
  }

  ::-moz-placeholder {
    color: #CCCCCC;
    opacity:  1;
  }

  :-ms-input-placeholder { color: #CCCCCC }

  ::-ms-input-placeholder { color: #CCCCCC }

  ::placeholder { color: #CCCCCC }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex: 1;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: 375px) {
    .section-caption {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 340px) {
    .section-caption {
      font-size: 20px;
      letter-spacing: -0.3px;
    }
  }
`;
