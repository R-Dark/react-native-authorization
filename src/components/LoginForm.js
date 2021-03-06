import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Card, CardSection, Input, TextInput, Spinner } from "./common"
import firebase from "firebase"


class LoginForm extends Component {


  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    }
  }

  onButtonPress = () => {
    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword( this.state.email, this.state.password )
    .then(this.onLoginSuccess)
    .catch(this.onLoginFail)
  }

  //  implement this code above to allow new users to signup
  //   firebase.auth().signInWithEmailAndPassword( this.state.email, this.state.password )
  //     .then(this.onLoginSuccess)
  //     .catch(() => {
  //       firebase.auth().createUserWithEmailAndPassword( this.state.email, this.state.password )
  //       .then(this.onLoginSuccess)
  //         .catch(this.onLoginFail)
  //     })
  // }


  onLoginFail = () => {
    this.setState({ error: 'Authentication Failed', loading: false })
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }
      return (
        <Button onPress={this.onButtonPress}>
          Log in
        </Button>
      )

  }


  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
}

export default LoginForm
