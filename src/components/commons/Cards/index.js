/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const Cards = styled.div`
    width:100%;
    min-height:350px;
    font-family: ${({ theme }) => theme.fontFamily};

    ${breakpointsMedia({
    md: css`
        margin-left:70px;
            `,
  })} 
    
`;

export default Cards;
