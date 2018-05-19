import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  TouchableOpacity, // Pressable container
  View // Container component
} from "react-native";

export default class Button extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
        lastButton: false
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('lastButton').then((lastButton) => {
      console.log(lastButton);  
        if (lastButton !== 'null') {
            this.setState({ lastButton: true })
        }else{
            this.setState({ lastButton: false })
        }
    });
  }

  render({ onPress } = this.props) {
    const lastButton = this.state.index === this.state.total - 1;
    if (lastButton === this.state.total - 1){
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.text}>Lewati ></Text>
          </View>
        </TouchableOpacity>
      );
    }else{
      return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.text}>Tutup</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderColor: "#FFFFFF", // White colored border
    paddingHorizontal: 50, // Horizontal padding
    paddingVertical: 40 // Vertical padding
  },
  // Button text
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
  }
});