import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createStackNavigator} from 'react-navigation'
import { Container, Header, Content, Button, Icon, Text } from 'native-base';



export default class Chat extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
            <Text>Hey talk to me</Text>
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
  }
});
