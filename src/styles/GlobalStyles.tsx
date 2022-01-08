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
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    h1 {
      color: ${colors.white};
      font-weight: ${weights.normal};
    }

    a {
      color: ${colors.lightGrey};
      transition: ${transitions.base};
      text-decoration: none;
    }
`;

export default GlobalStyles;
