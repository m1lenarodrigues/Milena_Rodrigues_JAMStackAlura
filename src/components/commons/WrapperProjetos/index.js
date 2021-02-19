/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import Cards from '../Cards';
import SectionTitle from '../SectionTitle';
import Projetos from './style';
import projetos from '../../../../projetos.json';
import Card from '../Card';
import CardDestaque from '../CardDestaque';

export default function WrapperProjetos() {
  const listaDeProjetos = projetos.lista;

  console.log('ne array n?', listaDeProjetos);
  return (
    <Projetos>
      <SectionTitle>MEUS PROJETOS</SectionTitle>
      <Cards>
        {listaDeProjetos.map((projeto, index) => (
          <Card key={index} url={projeto.url} titulo={projeto.title} img={projeto.img} />
        ))}
      </Cards>

      <CardDestaque />
    </Projetos>
  );
}
