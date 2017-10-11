import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";

class Input extends Component {


    constructor(props) {
      super(props)
    }

    render() {
    return(
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>
          {this.props.label}
        </Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          style={styles.inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText} />
      </View>
    )
  }
}


const styles = {
  inputStyle: {
    fontSize: 18,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input }
