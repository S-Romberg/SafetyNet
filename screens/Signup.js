import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  keyboardType
} from 'react-native';
import { WebBrowser } from 'expo';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation';
import {  Content, Button, Icon } from 'native-base';

export default class Signup extends React.Component {

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
    var landing = ''
    const { navigation } = this.props;
    const safety = navigation.getParam('safetyNet', 'undefined');
  
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
                secureTextEntry={true}
                ref={(el) => { this.password = el }}
                containerStyle={styles.input} 
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
            <FormValidationMessage></FormValidationMessage>
            </View>
            <View contentContainerStyle={styles.buttons}>
             {safety ? 
              <Button  
                  onPress={() => this.props.navigation.navigate('Breathe')}
                  style={styles.button}
                  color="white">
                <Text style={styles.buttonText}>Sign up!</Text> 
                </Button> :
                <Button  
                  onPress={() => this.props.navigation.navigate('Resources')}
                  style={styles.button}
                  color="white">
                <Text style={styles.buttonText}>Sign up!</Text> 
                </Button>}
                <View style={styles.centerText}>
                    <Text style={styles.already} >Already have an account? </Text>
                </View>
                <View style={styles.centerButton}>
                  <Button 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Login', {
                      safetyNet: safety
                    })}>
                    <Text style={styles.buttonText}>Login</Text>
                  </Button>
                </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#B6D0DD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 350, 
    height: 95,
  },
  buttons:{
    marginTop: 25,
  },
  already:{
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    marginBottom: 5
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    marginLeft:'10%'
  },
  buttonText: {
    color: '#B6D0DD',
    fontSize: 17
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
  },
  centerButton:{
    marginLeft: '8.5%',
    justifyContent:'center',
    alignItems: 'center'
  }
});