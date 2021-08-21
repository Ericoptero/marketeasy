import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {authToken} from '../../actions/auth';
import api from '../../services/api';
import {RootState} from '../../store';

import {Container, ContainerCentered, TextInput, Button} from './styles';

const Login: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const Logon = useCallback(async () => {
    const {data} = await api.post('v1.1/auth', {
      usuario: userInput,
      senha: passwordInput,
    });

    dispatch(authToken(data.response.token));
  }, [dispatch, passwordInput, userInput]);

  return (
    <Container>
      <ContainerCentered>
        <Text>token {token}</Text>

        <TextInput
          mode="outlined"
          label="Nome de usuário"
          placeholder="Insira seu nome de usuário"
          value={userInput}
          onChangeText={value => setUserInput(value)}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          placeholder="Insira sua senha"
          value={passwordInput}
          onChangeText={value => setPasswordInput(value)}
        />

        <Button mode="contained" onPress={Logon}>
          Press me
        </Button>
      </ContainerCentered>
    </Container>
  );
};

export default Login;
