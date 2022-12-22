import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorDetails from './screens/ColorDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Homepage' }} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} options={{ title: 'Color Palette' }} />
        <Stack.Screen 
          name="ColorDetails" 
          component={ColorDetails} 
          options={({ route }) => ({ title: route.params.colorName })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
