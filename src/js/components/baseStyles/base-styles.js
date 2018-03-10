import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

import OpenSansBold from '../../../fonts/OpenSans-Bold.ttf';

const baseStyles = () => injectGlobal`  
  @font-face {
    font-family: OpenSans;
    src: url('${OpenSansBold}') format('truetype');
    font-weight: bold;
  }

  ${reset}
  body, html, #root {
    height: 100%;  
  }
  
  body {
    font-family: OpenSans sans-serif;
    font-weight: bold;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;

export default baseStyles