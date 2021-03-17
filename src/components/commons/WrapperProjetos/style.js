import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const Projetos = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main.color};
    font-family: ${({ theme }) => theme.fontFamily};
    min-height: 100vh;
    width: 100vw;
    display:table;
`;

export default Projetos;
