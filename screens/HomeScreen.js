import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native'
import { WebBrowser } from 'expo'
import { createStackNavigator } from 'react-navigation'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        safetyNet: true
    };
}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/logoWith.png')}
              style={styles.logo}
            />
          </View>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Login', {
              safetyNet: true
            })}
            style={styles.button}
            color='white'>
             <Text style={styles.buttonText}>I need a safety net</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Login', {
              safetyNet: false
            })}
            style={styles.button} 
            color='white'>
            <Text style={styles.buttonText}>I want to be a safety net</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B6D0DD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 330, 
    height: 90,
    marginBottom: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 30,
    borderRadius: 10
  },
  buttonText: {
    color: '#B6D0DD',
    fontSize: 17
  }
});