/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Destaque = styled.div`
    width:100%:
    background:#eee;
    max-height:300px;
`;

Destaque.Titulo = styled.h2`
    color: ${({ theme }) => theme.colors.fonts.light.color};
    margin:0;
    padding:20px;
    font-size:45px;`;
Destaque.SubTitulo = styled.p`
    color: #888;
    margin:0;
    font-size:45px;
    padding-bottom:8px;
    width: 100%`;
Destaque.Link = styled.a`
    color: #f4aec9;
    font-size:1.5rem;
    font-weight:500;
    margin:5px;
    width:50%;
    border-radius: 15px;    
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily};
`;

Destaque.Imagem = styled.img`
    width:100%;
    max-width: 500px;
    margin:10px;
    border: 2px solid #000;
    float:left;
`;

Destaque.Texto = styled.p`
    color: ${({ theme }) => theme.colors.fonts.light.color};
    margin:0;
    width: 50%;
    float: right;
`;
