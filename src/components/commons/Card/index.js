/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import styled, { css } from 'styled-components';
import CardLink from '../CardLink';
import CardTitulo from '../CardTitulo';
import CardImagem from '../CardImagem';

import Text from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export default function Card(props) {
  const Geral = styled.div`
    align-items: center;
    max-width:350px;
    min-width: 280px;
    background-color: #ffffffE6;
    border: 2px groove #f06292;
    box-shadow: 1px 1px 8px 1px black;
    flex-direction:row;
    margin:11px;
    display: -webkit-inline-box;
    

    ${breakpointsMedia({
    xs: css`
        justify-content: initial;
      `,
    md: css`
        justify-content: center;
        align-items: center;
      `,
  })}


    &:hover{
      box-shadow: 3px 2px 5px ${({ theme }) => theme.colors.primary.main.color};
      transition: ${({ theme }) => theme.transition};
    }

  `;

  return (
    <Geral>
      <CardLink href={props.url} target="_blank">
        <Text tag="a" variant="subTitle">
          <CardTitulo tag="a" variant="subTitle">
            {props.titulo}
          </CardTitulo>
        </Text>
        <CardImagem src={props.img} />
      </CardLink>
    </Geral>

  );
}
