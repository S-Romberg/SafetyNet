import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Smile from './Smile'
import Chat from '../Chat'


class Breathe extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
          <Image style={styles.gif} source={{uri: 'https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif'}} />
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon ios='ios-cloud' android='md-cloud'/>
              <Text>Breathe</Text>
            </Button>
            <Button vertical 
              onPress={() => this.props.navigation.push('Smile')}>
              <Icon ios='ios-happy-outline' android='md-happy'/>
              <Text>Smile</Text>
            </Button>
            <Button vertical>
              <Icon active ios='ios-chatboxes' android='md-chatboxes'/>
              <Text>Chat</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

export default createBottomTabNavigator({
  Breathe: Breathe,
  Smile: Smile,
  Chat: Chat
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Breathe') {
        iconName = `cloud`;
      } else if (routeName === 'Smile') {
        iconName = `happy`;
      } else if (routeName === 'Chat'){
        iconName = `chatboxes`
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
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
    backgroundColor:'rgb(218,218,218)',
    width: '100%'
  },
  gif:{
    height:400,
    flex:1,
    width:'100%',
    marginTop: '20%'
  }
});
