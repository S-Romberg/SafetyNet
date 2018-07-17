import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { Actions } from 'react-native-router-flux'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import t from 'tcomb-form-native'
var _ = require('lodash');

const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});
const options = {
    fields: {
      name: {
        stylesheet: formStyles // overriding the style of the textbox
      }
    }
  };

  const formStyles = {
    ...Form.stylesheet,
    textbox: {
      normal: {
        borderColor: "#FFFFFF"
      }
    }
};

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
    navigation: null
  };
  handleSubmit(){
    //   Actions.pop()
    //   Actions.loggedIn()
  }
  handleChange(){
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
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
          <View style={styles.form}>
            <Form 
            ref={c => this._form = c}
            type={User} 
            options={options}/> 
            <Button 
                onPress={this.handleSubmit}
                style={styles.button}
                color="white"
                title="Sign up!">
            </Button>
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
    justifyContent: 'center',
    marginTop: 50,
    // width: 350
  },
  logo: {
    width: 350, 
    height: 90,
    // marginLeft: -350
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
    fontSize: 20
  },
  form:{
      width: 350,
      padding: 20,
  }
});