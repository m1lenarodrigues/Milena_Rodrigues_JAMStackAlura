import styled from 'styled-components';

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
    
`;

export const TextoPrincipal = styled.p`
font-family: ${({ theme }) => theme.fontFamily};
font-style: normal;
font-weight: normal;
text-align: center;
color: ${({ theme }) => theme.fontColor};
`;
