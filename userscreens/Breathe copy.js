import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, List, ListItem, Card, CardItem, Body } from 'native-base';
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
              <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <Text style={styles.bold}>Breathing tips</Text>
                    <View>
                        <Text style={styles.text}>Breathe from your stomach. Breathing from your chest can increase anxiety, while breathing from your stomach will calm you down.</Text>
                    </View>
                </Body>
                </CardItem>
            </Card>
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
  },
    bold:{
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 7,
      color:'#B6D0DD',
      marginLeft: '25%'
  },
  text:{
      padding:10,
      paddingTop:0,
      color:'#B6D0DD'
  },
  card:{
    justifyContent:'center',
    alignItems:'center'
  }
});
