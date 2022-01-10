import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fonts, weights, transitions } = theme;

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

    a {
      color: ${colors.lightGrey};
      transition: color ${transitions.base};
      text-decoration: none;
    }
`;

export default GlobalStyles;
