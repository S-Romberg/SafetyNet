import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';



  export default class LandingScreen extends React.Component {
  render() {
    return (
        <Container style={styles.container}>
          <Content>
            <Text>I dont need a safety net!</Text>
          </Content>
          {/* <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="apps" />
                <Text>Apps</Text>
              </Button>
              <Button vertical>
                <Icon name="camera" />
                <Text>Camera</Text>
              </Button>
              <Button vertical active>
                <Icon active name="navigate" />
                <Text>Navigate</Text>
              </Button>
              <Button vertical>
                <Icon name="person" />
                <Text>Contact</Text>
              </Button> */}
            {/* </FooterTab>
          </Footer> */}
        </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
