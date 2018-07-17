import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Scene, Stack, Router, Actions } from 'react-native-router-flux'


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>sup bish</Text>
        </View>
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
