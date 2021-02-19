import React from 'react';
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
    <MenuWrapper>

      <MenuWrapper.Central>
        {links.map((link) => (
          <li key={link.url}>
            <p>{link.texto}</p>
          </li>
        ))}
      </MenuWrapper.Central>
    </MenuWrapper>
  );
}
