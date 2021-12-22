import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const { colors } = theme;

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        background: ${colors.black}
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }    
`;

export default GlobalStyles;
