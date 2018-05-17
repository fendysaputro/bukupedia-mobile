import React, { Component } from "react";
import { Platform, StyleSheet, StatusBar, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "./styles/common";

import Screen from "./components/Screen";
import Swiper from "./components/Swiper";
import Main from "./components/Main";
import LoginMain from "./components/LoginMain";
import Password from "./components/Password";
import MyOrderMain from "./components/MyOrderMain";

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Screen navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
    }
  },
  Screen: {
    screen: Screen,
    navigationOptions: {
      title: "Screen"
    }
  },
  Swiper: {
    screen: Swiper,
    navigationOptions: {
      title: "Swiper"
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      
    }
  },
  LoginMain: {
    screen: LoginMain,
    navigationOptions: {
      title: "Login/Daftar"
    }
  },
  Password: {
    screen: Password,
    navigationOptions: {
      title: "Password"
    }
  },
  MyOrderMain: {
    screen: MyOrderMain,
    navigationOptions: {
      title: "Pesanan Saya"
    }
  }
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLOR_PRIMARY
  },
  welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10
  },
  instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5
  }
});