import styled, { createGlobalStyle } from 'styled-components';

import colors from './colors';

export const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
  }

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

  .button-link {
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    color: ${colors.primary};

    :hover {
      text-decoration: underline;
      opacity: 1;
    }
  }

  button.disabled {
    opacity: 0.3 !important;
    cursor: default;
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

  label, .label {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${colors.white};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.04) 3px 3px 0px -1px;
    outline: none !important;

    .fa {
      margin-left: 14px;
      font-size: 20px;
      color: #dddddd;
    }
  }

  input {
    width: 100%;
    background: none;
    border: none;
    padding: 16px 14px;
    outline: none;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.2px;
    color: ${colors.dark};
    cursor: text;
  }

  .errorMessage {
    font-size: 14px;
    margin-top: 10px;
    margin-left: 5px;
    color: #e50000;
  }

  input, textarea, button, select, a, div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
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

  .menu-item-wrapper:focus {
    outline: none;
  }

  .scroll-menu-arrow {
    position: relative;
    transition: opacity 0.2s ease 0s;
    z-index: 9999;
  }

  .scroll-menu-arrow--disabled {
    opacity: 0;
    pointer-events: none;
    cursor: default;
  }
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

export const Input = styled.input`
  width: 100%;
  background-color: ${colors.white};
  border-radius: 10px;
  border: ${(props) =>
    !props.error ? '1px solid #efefef' : `1px solid ${colors.red} !important`};
  padding: 16px 14px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.04) 3px 3px 0px -1px;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.2px;
  color: ${colors.dark};

  :focus {
    border: 1px solid ${colors.primary};
  }
`;
