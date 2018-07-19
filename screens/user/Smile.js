import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation'



export default class Smile extends React.Component {
  render() {
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
            <Text>smile</Text>
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button vertical
              onPress={() => this.props.navigation.push('Breathe')}>
              <Icon ios='ios-cloud' android='md-cloud'/>
              <Text>Breathe</Text>
            </Button>
            <Button vertical active>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(218,218,218)',
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
