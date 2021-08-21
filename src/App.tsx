import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {RootState} from './store';

import Login from './screens/Login';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();

const App = () => {
  const isAuth = useSelector((state: RootState) => state.auth.token);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          {isAuth ? (
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{
                title: 'Lista de Produtos',
                headerStyle: {backgroundColor: '#ff1657'},
                headerTintColor: '#FFF',
              }}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
