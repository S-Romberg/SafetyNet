import React from 'react';
import { StyleSheet, View, Image, Linking } from 'react-native';
import { createStackNavigator} from 'react-navigation'
import { Container, Content, Icon, Text, List, ListItem, Card, CardItem, Body} from 'native-base';




export default class Depression extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container contentContainerStyle={styles.container}>
        <Content style={styles.background}>
            <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <Text style={styles.bold}>Understanding depression in a friend or family member</Text>
                    <View>
                        <Text style={styles.boldText}>Depression is a serious condition. </Text>
                        <Text style={styles.text} >Don’t underestimate the seriousness of depression. Depression drains a person’s energy, optimism, and motivation. Your depressed loved one can’t just “snap out of it” by sheer force of will.</Text>
                        <Text style={styles.boldText}>Symptoms of depression aren’t personal.</Text>
                        <Text style={styles.text} >Depression makes it difficult for a person to connect on a deep emotional level with anyone, even the people he or she loves most. In addition, depressed people often say hurtful things and lash out in anger. Remember that this is the depression talking, not your loved one, so try not to take it personally.</Text>
                        <Text style={styles.boldText}>Hiding the problem won’t make it go away. </Text>
                        <Text style={styles.text} >Don’t be an enabler. It doesn’t help anyone involved if you are making excuses, covering up the problem, or lying for a friend or family member who is depressed. In fact, this may keep the depressed person from seeking treatment.</Text>
                        <Text style={styles.boldText}>You can’t “fix” someone else’s depression.</Text>
                        <Text style={styles.text} >Don’t try to rescue your loved one from depression. It’s not up to you to fix the problem, nor can you. You’re not to blame for your loved one’s depression or responsible for their happiness (or lack thereof). Ultimately, recovery is in the hands of the depressed person.</Text>
                    </View>
                </Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <List>
                        <Text style={styles.boldText}>What you CAN say that helps</Text>
                        <Text>"You are not alone in this. I’m here for you."</Text>
                        <Text>"I can't possibly understand what you are going through, and I'm here to help."</Text>
                        <Text>"When you want to give up, tell yourself you will hold on for just one more day, hour, minute - whatever you can manage."</Text>
                        <Text>"You are important to me. Your life is important to me."</Text>
                    </List>
                </Body>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <CardItem >
                <Body style={styles.body}>
                    <List>
                        <Text style={styles.boldText}>What you should AVOID saying</Text>
                        <Text>"It’s all in your head."</Text>
                        <Text>"We all go through times like this."</Text>
                        <Text>"Look on the bright side."</Text>
                        <Text>"You have so much to live for, why do you want to die?"</Text>
                        <Text>"I can’t do anything about your situation."</Text>
                        <Text>"Just snap out of it."</Text>
                        <Text>"What’s wrong with you?"</Text>
                        <Text>"Shouldn’t you be better by now?"</Text>
                        <Text>"You know when I was sad I just tried ___ and it helped"</Text>
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
