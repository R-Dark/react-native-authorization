import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class Button extends Component {
    constructor(props) {
      super(props)
    }

    render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#fff",
    borderColor: "#007aff"
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  }
};

export { Button }
