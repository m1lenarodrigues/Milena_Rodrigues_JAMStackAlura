import React from 'react';
import { Box } from '../../foundation/Box';
import { Grid } from '../../foundation/Grid';
import  Text  from '../../foundation/Text';
import TextField from '../../commons/input/TextField';
import { Button } from '../../commons/Button';
import FormWrapper from './FormWrapper';
import {
  CloseIcon
} from './icons';

function FormContent(){

    const [userInfo, setUserInfo] = React.useState({
        nome: '',
        email: '',
        mensagem: ''
      });

      function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        setUserInfo({
          ...userInfo,
          [fieldName]: event.target.value,
        });
      }    

    const isFormInvalid = userInfo.nome.length === 0 || userInfo.email.length === 0 || userInfo.mensagem.length ===0;
    
    return(

      
      <FormWrapper  onSubmit={(event) => {
                event.preventDefault();
                console.log("Formulário enviado");
        }}>
      <Grid.Col >
          <Grid.Row
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{
              xs: 'column-reverse',
              md: 'row',
            }}

          >
          <Text
              tag="h1"
              variant="titleModal"
              textAlign= "center"
          >
              Deixe aqui sua mensagem...
          </Text>
      </Grid.Row>

      <Grid.Row
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}

      > 
        <TextField
          variant="titleModal"
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          tag="input"
          onChange={handleChange}
          height="48px"
        />

        </Grid.Row>
        
        <Grid.Row
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{
              xs: 'column-reverse',
              md: 'row',
            }}

          > 
          <TextField
            variant="titleModal"
            tag="input"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            height="48px"
          />
      </Grid.Row>

        <Grid.Row >
          <TextField
            variant="titleModal"
            tag="textarea"
            placeholder="Mensagem"
            name="mensagem"
            value={userInfo.mensagem}
            onChange={handleChange}
            height="120px"
            resize="none"
          />
        </Grid.Row>


        <Button 
          type="submit"
          disabled={isFormInvalid}
          fullWidth
        > 
          Enviar           
        </Button>
      

      </Grid.Col>
       </FormWrapper>

    );
}

export default function FormContato({ propsDoModal }){
    return (
      <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
    );
}