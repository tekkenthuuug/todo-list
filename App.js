import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Start, Main } from './screens';
import theme from './theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={theme.backgroundColor} />
        <Stack.Navigator initialRouteName="Start" headerMode="none">
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
