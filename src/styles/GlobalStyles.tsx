import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors, fonts } = theme;

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
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
      box-sizing: inherit;
    }

    h1 {
      color: ${colors.white};
    }
`;

export default GlobalStyles;
