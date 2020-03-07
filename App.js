import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/home';
import { Provider } from './src/context/blog';

const Stack = createStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          title: 'RN Blogs',
          headerTitleAlign: "center"
        })}
      />
    </Stack.Navigator>
  </NavigationContainer> 
}

export default function() {
  return <Provider>
    <App />
  </Provider>
}