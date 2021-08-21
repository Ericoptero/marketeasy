import React, {useCallback, useState} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {authToken} from '../../actions/auth';

import {Container, ContainerCentered, TextInput, Button} from './styles';

const Login: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const Logon = useCallback(async () => {
    dispatch(authToken('Eric'));
  }, [dispatch]);

  return (
    <Container>
      <ContainerCentered>
        <Text>token {token}</Text>

        <TextInput
          mode="outlined"
          label="Nome de usuário"
          placeholder="Insira seu nome de usuário"
          value={emailInput}
          onChangeText={value => setEmailInput(value)}
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
