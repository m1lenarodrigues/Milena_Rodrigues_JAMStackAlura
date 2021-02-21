/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Text from '../../foundation/Text';
import { Destaque } from './styles';

export default function CardDestaque() {
  const url = 'https://greys-anatomy-quiz.m1lenarodrigues.vercel.app/';
  const title = 'Destaque';
  const tituloDestaque = 'Quiz - Greys Anatomy';
  const img = '/images/destaque.png';
  const texto = "Projeto desenvolvido durante a Imersão React, oferecido pelo grupo ALURA! O objetivo era desenvolver um quiz e o tema era livre escolha, desenvolvi a partir do seriado Grey's Anatomy. Utilizamos React, nextJs e StyledCompoents.";

  return (
    <Destaque>
      <Text variant="title">
        <Destaque.Titulo>
          {' '}
          {title}
          {' '}
        </Destaque.Titulo>
      </Text>
      <Destaque.Link href={url}>
        <Destaque.Imagem src={img} />
      </Destaque.Link>
      <Destaque.Texto>
        <Text variant="subTitle">
          <Destaque.SubTitulo>{tituloDestaque}</Destaque.SubTitulo>
        </Text>
        <Text variant="paragraph1">
          {texto}
        </Text>
      </Destaque.Texto>

    </Destaque>
  );
}
