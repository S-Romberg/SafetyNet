import React from 'react';
import { StyleSheet, View, Image, Linking } from 'react-native';
import { createStackNavigator} from 'react-navigation'
import { Container, Content, Icon, Text, List, ListItem, Card, CardItem, Body} from 'native-base';




export default class Anxiety extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
            <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <Text style={styles.bold}>How to help someone with Anxiety</Text>
                    <View>
                        <Text style={styles.boldText}>Anxiety strategies with an accountability partner</Text>
                        <Text style={styles.text} >Work through a hierarchy of things someone is avoiding or putting off due to anxiety. Each person would have their own list. Start with things that feel mildly anxiety provoking, and work up. A practical way to do this is as a weekly "power hour," where you have an hour once a week in which you tackle something you've each been avoiding due to feeling anxious or overwhelmed.</Text>
                        <Text style={styles.text}>Spotting and balancing anxiety thoughts. For example, if you don't get an email reply back from someone straight away, does that automatically imply bad news? </Text>
                    </View>
                </Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <List>
                        <Text style={styles.boldText}>Help your anxious friend break free of avoidance behavior.</Text>
                        <Text>Making phone calls</Text>
                        <Text>Getting started on a task that feels intimidating (which could be anything from writing an essay, to completing an annual review for work, to choosing a new dishwasher when the current one has broken)</Text>
                        <Text>Repairing mistakes</Text>
                        <Text>Making requests (such as asking a boss for time off)</Text>
                    </List>
                </Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <List>
                        <Text style={styles.boldText}>Destigmatize your friend's experience of anxiety.</Text>
                        <Text>Communicate that you don't see their anxiety as a weakness, character flaw, or a sign of them being incompetent in their life, work, or other roles (such as being a parent or friend). Normalize any types of thoughts you can relate to. There are many kinds of anxiety-based thoughts people with anxiety disorders experience that even relatively non-anxious people also experience from time to time. For example, most people can relate to the fear of being judged or of asking for something and being told no.</Text>
                    </List>
                </Body>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://www.helpguide.org/articles/depression/helping-someone-with-depression.htm')}>
                    More help
                    </Text>
                </CardItem>
            </Card>
        </Content>
     </Container>
    )
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
  bold:{
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 7
  },
  boldText:{
      fontWeight: 'bold'
  },
  text:{
      padding:10,
      paddingTop:0
  }
});
