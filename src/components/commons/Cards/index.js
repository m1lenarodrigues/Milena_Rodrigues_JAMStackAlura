/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Cards = styled.div`
    
    background-color: #eee;
    width: 90%;
    min-height: 30vh;
    font-family: ${({ theme }) => theme.fontFamily};
`;

export default Cards;
