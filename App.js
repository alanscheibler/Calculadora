import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from './src/pages/Calculadora';
import Historico from './src/pages/Historico';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Stack.Navigator initialRouteName='Calculadora'
      screenOptions={{
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor: '#FB930F'
        },
        headerTintColor: '#FFF',

        headerTitleStyle: {
          fontWeight:'bold',
          textAlign: 'center',
          flex: 1,
        }
      }}
      >
          <Stack.Screen name='Calculadora'
          component={Calculadora}
      />
          <Stack.Screen name='Historico'
          component={Historico}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
