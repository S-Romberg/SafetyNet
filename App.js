import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux'

import HomeScreen from './components/HomeScreen.js'
import Login from './components/Login'
import LandingScreenUser from './components/LandingScreenUser'



export default class App extends React.Component {
  render() {
    return (
        <Router>
          <Stack key="root">
            {/* <Scene key="login" component={Login} title="Login"/>
            <Scene key="register" component={Register} title="Register"/> */}
            <Scene key="home" component={HomeScreen}/>
            <Scene key='user' component={Login} />
            <Scene key='support' component={Login} />
            <Scene key='loggedIn' component={LandingScreenUser} type={Actions.REPLACE} />
          </Stack>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
