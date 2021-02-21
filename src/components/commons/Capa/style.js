/* eslint-disable no-undef */
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

// eslint-disable-next-line import/prefer-default-export
export const CapaContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background.light.color};
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    min-height: 30vh;
    width: 90%;

    ${breakpointsMedia({
    xs: css`
          justify-content: center;
          height: 45vh;
        `,
    md: css`
          justify-content: space-around;
          height: 60vh;
        `,
  })}
    
`;

export const TextoPrincipal = styled.p`
font-family: ${({ theme }) => theme.fontFamily};
font-style: normal;
font-weight: normal;
text-align: center;
color: ${({ theme }) => theme.fontColor};
`;
