import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

import OpenSansBold from '../../../fonts/OpenSans-Bold.ttf';
import OpenSansSemiBold from '../../../fonts/OpenSans-SemiBold.ttf';

const baseStyles = () => injectGlobal`
  @font-face {
    font-family: OpenSans;
    src: url('${OpenSansSemiBold}') format('truetype');
  }
  
  @font-face {
    font-family: OpenSans;
    src: url('${OpenSansBold}') format('truetype');
    font-weight: bold;
  }

  ${reset}
  body, html, #root {
    height: 100%;  
  }
`;

export default baseStyles