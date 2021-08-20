import styled from 'styled-components/native';
import {
  TextInput as RNPTextInput,
  Button as RNPButton,
} from 'react-native-paper';

export const Container = styled.SafeAreaView`
  background-color: #e3e3e3;
  flex: 1;
`;

export const ContainerCentered = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const TextInput = styled(RNPTextInput)`
  width: 100%;
  height: 50px;
`;

export const Button = styled(RNPButton)`
  width: 200px;
  height: 40px;
  margin-top: 20px;
`;
