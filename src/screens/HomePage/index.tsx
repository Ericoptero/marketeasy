import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react';
import {Alert, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

import api from '../../services/api';
import {RootState} from '../../store';
import {logout} from '../../actions/auth';

import Loader from '../../components/ContentLoader';

import {
  Container,
  StyledFlatList,
  Button,
  Item,
  ProductDescriptionText,
  UnitValueText,
  Icon,
} from './styles';

interface ProductProps {
  id: number;
  description: string;
  unitValue: number;
  barCode: string;
}

const HomePage: React.FC = () => {
  const token = useSelector<RootState>(state => state.auth.token);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const {data} = await api.get(
        'v2.0/produtounidade/listaprodutos/0/unidade/83402711000110',
        {
          headers: {
            token,
          },
        },
      );

      if (data.response.status === 'ok') {
        const {produtos} = data.response;

        // Mapeando para modificar os key values dos objetos, mantendo o padrão em inglês.
        const newProducts = produtos.map(
          ({
            Codigo: id,
            Descricao: description,
            Preco: unitValue,
            CodigoBarras: barCode,
          }: any) => ({id, description, unitValue, barCode}),
        );

        setProducts(newProducts);
      } else {
        const error = data;
        Alert.alert('Oops, ocoreu um erro: ' + error);
      }
    } catch (error) {
      Alert.alert('Oops, ocoreu um erro: ' + error);
    }

    setIsLoading(false);
  }, [token]);

  const LogoutButton = useCallback(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="logout"
          color="#FFF"
          size={24}
          onPress={() => dispatch(logout())}
        />
      ),
    });
  }, [navigation, dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [token, fetchProducts]);

  useLayoutEffect(() => {
    LogoutButton();
  }, [LogoutButton]);

  const renderItem = ({item}: {item: ProductProps}) => (
    <Item>
      <View>
        <ProductDescriptionText>{item.description}</ProductDescriptionText>
        <UnitValueText>
          R$ {String(item.unitValue).replace('.', ',')}
        </UnitValueText>
      </View>
      <Icon name="angle-double-right" />
    </Item>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <StyledFlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => String(item.id)}
        onRefresh={fetchProducts}
        refreshing={false}
      />
      <Button mode="contained" onPress={fetchProducts}>
        Recarregar Lista
      </Button>
    </Container>
  );
};

export default HomePage;
