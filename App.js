import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen.js'
import Login from './screens/Login'
import Breathe from './screens/user/Breathe'
import Smile from './screens/user/Smile'
import SLandingScreen from './screens/safetyNet/LandingScreen'


 export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen ,
  Login: Login ,
  Breathe: Breathe,
  SLanding: SLandingScreen,
  Smile: Smile
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
