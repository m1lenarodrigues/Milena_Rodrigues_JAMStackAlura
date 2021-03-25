/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Box } from '../../foundation/Box';
import { Grid } from '../../foundation/Grid';
import Text from '../../foundation/Text';
import TextField from '../../commons/input/TextField';
import { Button } from '../../commons/Button';
import FormWrapper from './FormWrapper';
import sucessoAnimation from './animations/sucesso.json';
import erroAnimation from './animations/error.json';

function FormContent({ buttonClose }) {
  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [emailValido, setEmailValido] = React.useState(true);
  const [avisoEmailInvalido, setAvisoEmailInvalido] = React.useState('');

  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };

  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  const [mensagemEnviada, setMensagemEnviada] = React.useState('');

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleEmail(event) {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(event.target.value)) {
      setEmailValido(false);
      setAvisoEmailInvalido('Seu e-mail é inválido.');
    } else {
      setAvisoEmailInvalido('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    setIsFormSubmited(true);

    const userDTO = {
      nome: userInfo.nome,
      email: userInfo.email,
      mensagem: userInfo.mensagem,
    };

    fetch('hhttps://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    }).then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }
      throw new Error('Não foi possível enviar sua mensagem :(');
    })
      .then((respostaConvertidadeEmObjeto) => {
        setSubmissionStatus(formStates.DONE);
        setMensagemEnviada('Sua mensagem foi enviada com sucesso!');
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
        setMensagemEnviada('Não foi possível enviar sua mensagem!');
      });
  }

  const isFormInvalid = !emailValido || userInfo.nome.length === 0 || userInfo.email.length === 0 || userInfo.mensagem.length === 0;

  return (

    <FormWrapper onSubmit={handleSubmit}>
      <Grid.Col>

        {buttonClose}
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
            textAlign="center"
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
            onBlur={handleEmail}
            height="48px"
          />

          {!emailValido && (
            <Text
              marginTop="-15px"
              marginBottom="15px"
              color="red"
            >
              {avisoEmailInvalido}
            </Text>
          )}
        </Grid.Row>

        <Grid.Row>
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
        {isFormSubmited && submissionStatus === formStates.DONE && (
          <Box>
            <Lottie
              width="150px"
              height="150px"
              config={{ animationData: sucessoAnimation, loop: true, autoplay: true }}
            />
          </Box>
        )}

        {isFormSubmited && submissionStatus === formStates.ERROR && (
          <Box>
            <Lottie
              width="150px"
              height="150px"
              config={{ animationData: erroAnimation, loop: true, autoplay: true }}
            />
            <Text
              marginTop="-15px"
              marginBottom="15px"
              color="red"
            >
              {mensagemEnviada}
            </Text>
          </Box>
        )}
      </Grid.Col>
    </FormWrapper>

  );
}

export default function FormContato({ propsDoModal }) {
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
          <FormContent {...propsDoModal} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
