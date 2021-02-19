import styled from 'styled-components';

export const Projetos = styled.div`
background-color: ${({ theme }) => theme.colors.background.light.color};
width: 90%;
min-height: 30vh;
font-family: ${({ theme }) => theme.fontFamily};`;

export default Projetos;
