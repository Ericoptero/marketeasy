import styled from 'styled-components/native';
import {Button as RNPButton} from 'react-native-paper';
import {FlatList} from 'react-native';
import RNIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f8f8f8;
`;

export const StyledFlatList = styled(FlatList)`
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
` as React.ComponentType as new <T>() => FlatList<T>;

export const Item = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  height: 60px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Icon = styled(RNIcon)`
  position: absolute;
  top: 16px;
  right: 15px;
  font-size: 25px;
  color: #ff1657;
`;

export const ProductDescriptionText = styled.Text`
  font-size: 16px;
  line-height: 18px;
`;

export const UnitValueText = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
`;

export const Button = styled(RNPButton)`
  border-radius: 0;
  background-color: #ff1657;
`;
