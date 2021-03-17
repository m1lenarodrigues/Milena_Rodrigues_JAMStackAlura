/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const Cards = styled.div`
    min-height:350px;
    margin: 0 auto;
    width: 75%;
    font-family: ${({ theme }) => theme.fontFamily};

    ${breakpointsMedia({
    md: css`
        padding-left:40px;
            `,
    xl: css`
        padding-left:40px;
            `,
    lg: css`
        padding-left:50;
        `,
  })} 
    
`;

export default Cards;
