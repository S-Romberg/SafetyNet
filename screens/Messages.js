import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { createStackNavigator } from 'react-navigation';
import Chatkit from "@pusher/chatkit";

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a8cfd717-c48c-4264-9897-cf6ad8f4251a/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:a8cfd717-c48c-4264-9897-cf6ad8f4251a";
const CHATKIT_ROOM_ID = 12439876;
const CHATKIT_USER_NAME = "Savannah";

export default class Messages extends React.Component {
    state = {
    messages: []
    };

    componentDidMount() {
      const { navigation } = this.props;
      const name = navigation.getParam('name', 'undefined');
      const profile = navigation.getParam('profile', 'undefined');
      const tokenProvider = new Chatkit.TokenProvider({
        url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
      });

      const chatManager = new Chatkit.ChatManager({
        instanceLocator: CHATKIT_INSTANCE_LOCATOR,
        userId: CHATKIT_USER_NAME,
        tokenProvider: tokenProvider
      });

      chatManager.connect().then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: CHATKIT_ROOM_ID,
          hooks: {
            onNewMessage: message => this.onReceive(message)
          }
        });
      });
    }
    onReceive = (data) => {
      console.log(data)  
      const { id, senderId, text, createdAt } = data;
      const incomingMessage = {
        _id: id,
        text: text,
        createdAt: new Date(createdAt),
        user: {
          _id: senderId,
          name: senderId,
          avatar: this.profile
        }
      };

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, incomingMessage)
      }));
    }

    onSend([message]) {
      this.currentUser.sendMessage({
        text: message.text,
        roomId: CHATKIT_ROOM_ID
      });
    }

    render() {

    return (
         <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
           _id: CHATKIT_USER_NAME
        }}
        />
    );
    }
}