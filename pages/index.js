import React from 'react';
import styled from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';

export default function Home() {
  // eslint-disable-next-line react/react-in-jsx-scope

  const Geral = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main.color};
    display: flex;
    flex-direction:column;
    justify-content:center;
    min-height: 100vh;
    -webkit-box-align: center;
    align-items: center;
  `;
  return (
    <div>
      <Geral>
        <Capa />
        <Menu />
        <WrapperProjetos />
      </Geral>
    </div>
  );
}
