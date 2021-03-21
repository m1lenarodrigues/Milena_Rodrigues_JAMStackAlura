import React from 'react';
import styled, { css }  from 'styled-components';
import Capa from '../src/components/commons/Capa';
import Menu from '../src/components/commons/Menu';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Footer from '../src/components/commons/Footer';
import { breakpointsMedia } from '../src/theme/utils/breakpointsMedia';
import { Button } from '../src/components/commons/Button';
import  Modal  from '../src/components/commons/Modal';
import FormContato from '../src/components/patterns/formContato';

export default function Home() {
  // eslint-disable-next-line react/react-in-jsx-scope

  const Geral = styled.div`
    background-color: ${({ theme }) => theme.colors.background.main.color};
    display: flex;
    flex-direction:column;
    justify-content:center;
    min-height: 100vh;
    align-items: center;
    overflow-x: hidden; 
    
    ${breakpointsMedia({
      lg: css`
      min-width: 1200px;
          `,
      md: css`
      min-width:768px;
          `,
      xl: css`
      min-width: 992px;
          `,
      sm: css`
      min-width: 576px;
        `,
    })} 
  
  `;

  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <Geral>

     {isModalOpen && 
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
          }}  >
          {(propsDoModal) => (
            <FormContato propsDoModal={propsDoModal} />
        )}

        </Modal> 
      }
        <Capa />
        <Menu />
        <WrapperProjetos />

        <Button
          onClick={() => {
            setModalOpen(!isModalOpen);
          }}>
          Entrar em contato
        </Button>
        <Footer />
      </Geral>
    </div>
  );
}
