/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Destaque } from './styles';

export default function CardDestaque() {
  const url = 'https://greys-anatomy-quiz.m1lenarodrigues.vercel.app/';
  const title = 'Destaque';
  const tituloDestaque = 'Quiz - Greys Anatomy';
  const img = '/images/destaque.png';
  const texto = "Projeto desenvolvido durante a Imersão React, oferecido pelo grupo ALURA! O objetivo era desenvolver um quiz e o tema era livre escolha, desenvolvi a partir do seriado Grey's Anatomy. Utilizamos React, nextJs e StyledCompoents.";

  return (
    <Destaque>
      <Destaque.Titulo>
        {' '}
        {title}
        {' '}
      </Destaque.Titulo>
      <Destaque.Link href={url}>
        <Destaque.Imagem src={img} />
      </Destaque.Link>
      <Destaque.Texto>
        <Destaque.SubTitulo>{tituloDestaque}</Destaque.SubTitulo>
        {texto}
      </Destaque.Texto>

    </Destaque>
  );
}
