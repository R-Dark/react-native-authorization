import React, { Component } from "react";
import { Text, View } from "react-native";

class Header extends Component {
  render() {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle} className="test">
          {this.props.headerText}
        </Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: "rgb(21, 126, 196)",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: "relative"
  }
};

export { Header }
