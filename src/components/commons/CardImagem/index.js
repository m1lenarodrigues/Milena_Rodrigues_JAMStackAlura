import styled, { css } from 'styled-components';

import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const CardImagem = styled.img`
   
    margin:10px;
    border: 2px solid #000;

    ${breakpointsMedia({
        xs: css`
          `,
        md: css`
         
          `,
      })}
`;

export default CardImagem;
