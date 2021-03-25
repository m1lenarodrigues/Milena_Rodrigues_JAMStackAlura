/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Button = styled.button`
    border :0;
    cursor:pointer;
    padding: 12px 26px;
    opacity:1;
    border-radius: 8px;
    font-family:Amatic SC;
    font-size:25px;
  
  &:hover{
    box-shadow: 3px 2px 5px ${({ theme }) => theme.colors.primary.main.color};
    transition: ${({ theme }) => theme.transition};
  }
`;
