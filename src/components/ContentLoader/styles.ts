import styled from 'styled-components/native';
import RNIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
`;

export const Box = styled.View`
  background-color: #fff;
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  height: 60px;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled(RNIcon)`
  position: absolute;
  top: 16px;
  right: 15px;
  font-size: 25px;
  color: #ff1657;
`;
