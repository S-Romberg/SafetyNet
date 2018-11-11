import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs, ScrollableTab, Icon } from 'native-base';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import Depression from './Depression'
import Bipolar from './Bipolar'
import Chat from '../screens/Chat'
import Anxiety from './Anxiety'

class Resources extends React.Component {
  render() {
    const { navigation } = this.props;
      return (
        <Container style={styles.container} >
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Depression">
            <Depression />
          </Tab>
          <Tab heading="Bipolar">
            <Bipolar />
          </Tab>
          <Tab heading="Anxiety">
            <Anxiety />
          </Tab>
          <Tab heading="PTSD">
            {/* <Tab4 /> */}
          </Tab>
          <Tab heading="Eating Disorders">
            {/* <Tab5 /> */}
          </Tab>
        </Tabs>
      </Container>
      );
    }
  }
  
  export default createBottomTabNavigator({
    Resources: Resources,
    Chat: Chat
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Resources') {
          iconName = `archive`;
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
  