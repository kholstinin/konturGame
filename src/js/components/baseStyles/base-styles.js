import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  body, html, #root {
    height: 100%;  
  }
`;

export default baseStyles