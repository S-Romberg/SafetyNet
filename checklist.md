User table with id, name, email, password

friend table with id, user1id, user2id
    - how to check for mutual friendship?

// "react-navigation": "^2.7.0"
   "react-native-router-flux": "^4.0.0-beta.31"


           // <Router>
        //   <Stack key="root">

        //     <Scene key="home" component={HomeScreen}/>
        //     <Scene key='user' component={Signup} />
        //     <Scene key='support' component={Signup} />
        //     {/* <Scene key='loggedIn' component={ResourcesUser} type={Actions.REPLACE} /> */}
        //     <Scene  hideNavBar key='root'>
        //     <Scene key='tab-bar' tabBarStyle={{backgroundColor: "black"}} tabs={true}>
        //       <Scene key='tab-one' icon={TabIcon}>
        //         <Scene key='loggedIn' title='yay!' component={ResourcesUser} type={Actions.REPLACE} icon={TabIcon}></Scene>
        //       </Scene>
        //       <Scene key='tab-two' title='more' icon={TabIcon}>
        //         <Scene key='loggedIn' title='logged in' component={ResourcesUser} type={Actions.REPLACE} ></Scene>
        //       </Scene>
        //     </Scene>
        //     </Scene>
        //   </Stack>
        // </Router>