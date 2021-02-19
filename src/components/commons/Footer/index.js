import React from 'react';
import { FooterGeral } from './styles';
import FooterIcon from '../FooterIcon';

export default function Footer() {
  return (
    <FooterGeral>
      <FooterIcon>

        <a href="https://www.linkedin.com/in/milena-rodrigues-15655350/" rel="noreferrer" target="_blank">
          <img src="/images/icon_linkedin.svg" alt="Linkedin" />
        </a>
        <a href="https://github.com/m1lenarodrigues?tab=repositories" rel="noreferrer" target="_blank">
          <img src="/images/icon_github.svg" alt="Github" />
        </a>
      </FooterIcon>
    </FooterGeral>
  );
}
