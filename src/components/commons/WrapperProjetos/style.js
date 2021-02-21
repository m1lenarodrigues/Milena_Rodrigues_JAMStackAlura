import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const Projetos = styled.div`
background-color: ${({ theme }) => theme.colors.background.light.color};
width: 90%;
min-height: 30vh;
font-family: ${({ theme }) => theme.fontFamily};
${breakpointsMedia({
    xs: css`
            flex-direction: column;
            width: 80%;
            padding-bottom: 20px;
        `,
    md: css`
            justify-content: center;
            width: 90%;
        `,
  })}
`;

export default Projetos;
