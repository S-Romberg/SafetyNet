import React from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT, COMMUNITY_CHAT } from './Events';
const uuidv4 = require('uuid/v4')

const initialState = {
    socket: null,
    user: null
}

export const AppContext = React.createContext()
export const AppConsumer = AppContext.Consumer

const quoteURL = 'https://powerful-atoll-95284.herokuapp.com/quotes'
const userURL = 'https://powerful-atoll-95284.herokuapp.com/users'
const socketUrl = "localhost:3231"


export class AppProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }
    componentWillMount(){
        this.initSocket()
    }
    
    componentDidMount(){
        fetch(quoteURL)
          .then(response => response.json())
          .then(data => {
            this.setState({ quotes: data.quotes})
          })

        fetch(userURL)
          .then(response => response.json())
          .then(data => {
              this.setState({ users: data.data })
          })
        }
    
    initSocket = () => {
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log("Connected")
        })
        this.setState({socket})
    }
    
    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user)
        this.setState({user})
    }

    logout = (user) => {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})
    }
    
    render() {

        const createUser = ({name = ""} = {})=>({
                id:uuidv4(),
                name	
            })

        const createMessage = ({message = "", sender = ""} = { })=>({
                id:uuidv4(),
                time:getTime(new Date(Date.now())),
                message,
                sender	
            })

        const createChat = ({messages = [], name = "Community", users = []} = {})=>({
                id:uuidv4(),
                name,
                messages,
                users,
                typingUsers:[]
            })

        const getTime = (date)=>{
            return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
        }

        return (
            <AppContext.Provider value={{
                state: {
                    quotes: this.state.quotes,
                    users: this.state.users,
                    socket: this.state.socket,
                    createChat: this.createChat,
                    createMessage: this.createMessage,
                    createUser: this.createUser
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

