import styled from 'styled-components';

export const CardTitulo = styled.p`

    color: #f4aec9;
    font-size:1.5rem;
    font-weight:500;
    margin:5px;
    text-align: center;
    width:100%;
    border-radius: 15px;    
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily};
`;

export default CardTitulo;
