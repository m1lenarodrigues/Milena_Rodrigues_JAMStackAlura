import React from 'react';
import get from 'lodash/get';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const titleModal = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const subTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
  `}
`;

const titulo1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titulo1.fontSize};
    font-weight: ${theme.typographyVariants.titulo1.fontWeight};
    line-height: ${theme.typographyVariants.titulo1.lineHeight};
  `}
`;
const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  paragraph1,
  titulo1,
  subTitle,
  title,
  smallestException,
  titleModal

};

const TextBase = styled.span`
    color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
    ${propToStyle('textAlign')}
    font-size:25px;
    font-weight:bold;
    font-family:Amatic SC;
    
  `;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase
      variant={variant}
      as={tag}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};