import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { AppProvider } from './context/AppContext'

import HomeScreen from './screens/HomeScreen.js'
import Signup from './screens/Signup'
import Breathe from './userscreens/Breathe'
import Think from './userscreens/Think'
import Resources from './safetyscreens/Resources'
import Login from './screens/Login'
import Messages from './screens/Messages'


 export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen ,
  Signup: Signup ,
  Breathe: Breathe,
  Resources: Resources,
  Think: Think,
  Login: Login,
  Messages: Messages
},
{
  initialRouteName: 'Home',
}
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
