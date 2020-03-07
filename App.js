import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/screens/home';
import { Provider } from './src/context/blog';
import { ShowScreen } from './src/screens/blog';
import { CreateScreen } from './src/screens/blog';

const Stack = createStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={() => ({
          title: 'RN Blogs',
          headerTitleAlign: "center"
        })}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
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

const defaultScreenOptions = {
  
}