import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
    @media ${(props) => props.theme.breakpoints.xs} {
      --gutter: ${(props) => props.theme.grid.xsGutter};
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      --gutter: ${(props) => props.theme.grid.smGutter};
    }
    @media ${(props) => props.theme.breakpoints.md} {
      --gutter: ${(props) => props.theme.grid.mdGutter};
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      --gutter: ${(props) => props.theme.grid.lgGutter};
    }
    @media ${(props) => props.theme.breakpoints.xl} {
      --gutter: ${(props) => props.theme.grid.xlGutter};
    }
    @media ${(props) => props.theme.breakpoints.xxl} {
      --gutter: ${(props) => props.theme.grid.xxlGutter};
    }
  }

  .hamburger-menu {
    &.ant-dropdown {
      position: absolute;
      left: 0;
      right: 0;
      padding-top: 20px;
    }
    .ant-dropdown-menu {
      border-radius: 0;
    }
  }

  .text-primary {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  .font-weight-bold {
    font-weight: 600 !important;
  }

  .ant-dropdown-menu,
  .ant-select-dropdown:not(.search-dropdown) {
    border-radius: 0;
  }

  .ant-message,
  .ant-dropdown-menu,
  .ant-select-dropdown,
  .ant-modal,
  .ant-tooltip {
    font-family: ${(props) => props.theme.font.family};
    font-style: ${(props) => props.theme.font.style};
  }

  .ant-slider-tooltip {
    .ant.tooltip-inner {
      background-color: ${(props) => props.theme.colors.secondary};
      font-size: 12px;
    }
  }

  .ant-checkbox-inner {
    border-radius: 4px;
  }

  .ant-modal-footer {
    padding-bottom: 16px;
    padding-top: 16px;
  }
`;

export default GlobalStyle;
