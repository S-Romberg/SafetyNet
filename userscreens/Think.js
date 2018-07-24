import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation'
import { Font } from 'expo'
import { AppConsumer } from '../context/AppContext'


export default class Think extends React.Component {


  render() {
    return (
      <Container contentContainerStyle={styles.container}>
      <ScrollView>
        <Content contentContainerStyle={styles.background}>
              <AppConsumer>
                {(context) => {
                  console.log(context.state.quotes)
                  return context.state.quotes.map(quote => {
                  return (
                  <Card key={quote.id} style={styles.card}>
                    <CardItem >
                      <Body style={styles.body}>
                        <Text style={styles.quote}>{quote.quote}</Text>
                        <Text style={styles.author}>-{quote.author}</Text>
                      </Body>
                    </CardItem>
                  </Card> 
                  )})
                }}
              </AppConsumer>
        </Content>
        </ScrollView>
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
    backgroundColor:'#B6D0DD',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  quote:{
    fontSize: 23,
    textAlign: 'center',
    color: '#B6D0DD',
    padding: 10
  },
  author:{
    fontSize: 15,
    textAlign: 'center',
    color: '#B6D0DD',
  },
  card:{
    marginTop: 150,
    width: 300
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
