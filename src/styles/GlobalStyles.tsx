import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fonts, weights, transitions, breakpoints } = theme;

const GlobalStyles = createGlobalStyle`
    html {
        background: ${colors.darkBlue};
    }

    body {
      margin: 0;
      color: ${colors.white};
      font-family: ${fonts.primary};

      & * {
        letter-spacing: .5px;
      }
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    h1,
    h2,
    h3 {
      color: ${colors.white};
      font-weight: ${weights.bold};
    }



    h1 {
      font-size: 1.5em;

      @media screen and ${breakpoints.md} {
        font-size: 2em;
      }
    }

    h2 {
      font-size: 1.25em;

      @media screen and ${breakpoints.md} {
        font-size: 1.5em;
      }
    }

    a {
      color: ${colors.lightGrey};
      transition: color ${transitions.base};
      text-decoration: none;
    }
`;

export default GlobalStyles;
