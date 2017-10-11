//import a a library to help create a component
import React, { Component } from "react"
import { View } from "react-native"
import firebase from "firebase"
import { Header, Button, Spinner, CardSection } from "./components/common"
import LoginForm from "./components/LoginForm"

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: null,
      headerText: "Firebase Auth App"
    }
  }


  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyAIp9eBuTifJiHCt0cNsmQUDrUVJ41syDU",
    authDomain: "authentication-ad679.firebaseapp.com",
    databaseURL: "https://authentication-ad679.firebaseio.com",
    projectId: "authentication-ad679",
    storageBucket: "authentication-ad679.appspot.com",
    messagingSenderId: "524780895566"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
                Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <View style={{ paddingTop: '50%' }}><Spinner size="large" /></View>
    }
  }



  render() {
    return (
      <View>
        <Header headerText={this.state.headerText} />
        {this.renderContent()}
      </View>
    )
  }
}


export default App
