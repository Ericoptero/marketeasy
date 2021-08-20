import React, {useState} from 'react';
import {Text} from 'react-native';

import {Container, ContainerCentered, TextInput, Button} from './styles';

const Login: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <Container>
      <Text>Hello</Text>
      <ContainerCentered>
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
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </ContainerCentered>
    </Container>
  );
};

export default Login;
