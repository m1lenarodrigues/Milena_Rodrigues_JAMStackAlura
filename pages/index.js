import React from 'react';
import styled, { css }  from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Footer from '../src/components/commons/Footer';
import { breakpointsMedia } from '../src/theme/utils/breakpointsMedia';

export default function Home() {
  // eslint-disable-next-line react/react-in-jsx-scope

  const Geral = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main.color};
    display: flex;
    flex-direction:column;
    justify-content:center;
    min-height: 100vh;
    align-items: center;

    ${breakpointsMedia({
      lg: css`
      
          `,
      md: css`
           
          `,
      xl: css`
           
          `,
      sm: css`
        
        `,
    })} 
  
  `;
  return (
    <div>
      <Geral>
        <Capa />
        <Menu />
        <WrapperProjetos />
        <Footer />
      </Geral>
    </div>
  );
}
