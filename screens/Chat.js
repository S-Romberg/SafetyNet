import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator} from 'react-navigation'
import { Container, Header, Content, Button, Icon, Text, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import { AppConsumer } from '../context/AppContext'



export default class Chat extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
          <List>
            <AppConsumer>
              {(context) => {
                return context.state.users.map(user => {
                  return (
                    <ListItem onPress={() => this.props.navigation.navigate('Messages', {
                      name: user.name,
                      profile: user.profile
                    })} style={styles.listItem} key={user.id} avatar>
                      <Left>
                        <Thumbnail source={{ uri: user.profile }} />
                      </Left>
                      <Body>
                        <Text>{user.name}</Text>
                        <Text note>I dunno man youll probably have some old messages or somethin</Text>
                      </Body>
                      <Right>
                        <Text note>12:00pm</Text>
                      </Right>
                    </ListItem>
                )})
              }}
            </AppConsumer>
          </List>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    backgroundColor:'white',
    width: '100%'
  }
});
