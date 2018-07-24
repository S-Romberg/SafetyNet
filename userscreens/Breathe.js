import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Think from './Think'
import Chat from '../screens/Chat'


class Breathe extends React.Component {


  render() {
    const { navigation } = this.props;
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
          <ScrollView>
            <View style={styles.gifContainer}>
              <Image style={styles.gif} source={require('./breathe.gif')} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Dont breathe like an idiot, use your stomach</Text>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

export default createBottomTabNavigator({
  Breathe: Breathe,
  Think: Think,
  Chat: Chat
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Breathe') {
        iconName = `cloud`;
      } else if (routeName === 'Think') {
        iconName = `happy`;
      } else if (routeName === 'Chat'){
        iconName = `chatboxes`
      }
      return <Icon name={iconName} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    backgroundColor:'#B6D0DD',
    width: '100%'
  },
  gif:{
    height:400,
    flex:1,
    width:'100%',
    marginTop: '20%'
  },
  textContainer:{
    marginTop: 400,
    height: 300
  }
});
