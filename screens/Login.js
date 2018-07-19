import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  keyboardType
} from 'react-native';
import { WebBrowser } from 'expo';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

  static navigationOptions = {
    header: null,
    navigation: null
  };

  handleSubmit(){
    console.log()
  }
  render() {
    const { navigation } = this.props;
    const otherParam = navigation.getParam('safetyNet', 'undefined');
    const safety = JSON.stringify(otherParam)
    console.log(safety)
    if(safety === false){var landing = 'Breathe'} else {var landing = 'SLanding'}
    console.log(landing)
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.container} >
          <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/logoWith.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.form}>
            <FormLabel 
                labelStyle={styles.text}>Name</FormLabel>
            <FormInput 
                ref={(el) => { this.name = el }}
                containerStyle={styles.input} 
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}/>
            <FormLabel 
                labelStyle={styles.text}>Email</FormLabel>
            <FormInput 
                ref={(el) => { this.email = el }}
                keyboardType={'email-address'}
                containerStyle={styles.input} 
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}/>
            <FormLabel 
                labelStyle={styles.text}>Password</FormLabel>
            <FormInput 
                ref={(el) => { this.password = el }}
                containerStyle={styles.input} 
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
            <FormValidationMessage></FormValidationMessage>
            <View style={styles.buttons}>
             {safety ? 
             <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Breathe')}
                style={styles.button}
                color="white">
                <Text style={styles.buttonText} >Sign up!</Text>
              </TouchableOpacity> :
              <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('SLanding')}
                style={styles.button}
                color="white">
                <Text style={styles.buttonText} >Sign up!</Text>
              </TouchableOpacity>}
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.goBack()}> 
                <Text style={styles.buttonText} >Go back</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    width: 350, 
    height: 90,
  },
  buttons:{
    width: '100%',
    justifyContent:'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
    width: 75,
    height: 30
  },
  buttonText:{
    color: '#B6D0DD'
  },
  form:{
      width: 350,
      padding: 20,
  },
  input:{
      borderBottomColor: "white",

  },
  text:{
      color: "white"
  }
});