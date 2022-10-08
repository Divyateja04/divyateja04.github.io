import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .topbar, .bottombar {
    background-color: ${({ theme }) => theme.barColor};
  }

  hr {
    border-color: ${({ theme }) => theme.hrColor};
  }

  .noTextDecorationHome {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  .noTextDecorationHome:hover {
      color: ${({ theme }) => theme.texthover} !important;
  }

  .noTextDecoration {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  .mybtn-outline {
    color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.body};
  }
  
  .mybtn-outline:hover {
    color: ${({ theme }) => theme.btnColor};
    background-color: ${({ theme }) => theme.body};
    border-color: ${({ theme }) => theme.body};
  }
  
  .mybtn-outline:focus, .mybtn-outline.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  
  .mybtn-outline.disabled, .mybtn-outline:disabled {
    color: ${({ theme }) => theme.btnColor};
    background-color: transparent;
  }
  
  .mybtn-outline:not(:disabled):not(.disabled):active, .mybtn-outline:not(:disabled):not(.disabled).active,
  .show > .mybtn-outline.dropdown-toggle {
    color: ${({ theme }) => theme.btnHover};
    background-color: ${({ theme }) => theme.btnColor};
    border-color: ${({ theme }) => theme.btnColor};
  }
  
  .mybtn-outline:not(:disabled):not(.disabled):active:focus, .mybtn-outline:not(:disabled):not(.disabled).active:focus,
  .show > .mybtn-outline.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }

  .card {
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.cardText};
  }

  .active, .link:hover{
    color:  ${({ theme }) => theme.btnColor};
  }

  .bottombar p{
    color:  ${({ theme }) => theme.btnColor};
  }

  .invert {
    filter: invert(${({ theme }) => theme.invert}%);
  }
  `
