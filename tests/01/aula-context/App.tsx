import { StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import UserScreen from './src/screens/UserScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export type rootStackParamList = {
  Home: undefined,
  User: {username: string} 
}

const stack = createStackNavigator<rootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="User" component={UserScreen} />
      </stack.Navigator>
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
