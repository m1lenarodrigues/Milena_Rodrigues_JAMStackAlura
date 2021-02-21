import React from 'react';
import Text from '../../foundation/Text';
import { MenuWrapper } from './styles/MenuWrapper';

export default function Menu() {
  const links = [
    {
      texto: 'HOME',
      url: '/',
    },
    {
      texto: 'Sobre Mim',
      url: '/faq',
    },
    {
      texto: 'Contato',
      url: '/sobre',
    },
  ];

  return (
    <MenuWrapper teste="teste">

      <MenuWrapper.Central>
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" href={link.url}>{link.texto}</Text>
          </li>
        ))}
      </MenuWrapper.Central>
    </MenuWrapper>
  );
}
