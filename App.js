import React, { Component } from "react";
import { Platform, StyleSheet, StatusBar, Text, View, AsyncStorage } from "react-native";
import { StackNavigator } from "react-navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "./styles/common";

import Screen from "./components/Screen";
import Swiper from "./components/Swiper";
import Main from "./components/Main";
import LoginMain from "./components/LoginMain";
import Password from "./components/Password";
import MyOrderMain from "./components/MyOrderMain";
import SplashScreen from "./components/SplashScreen";
import ProductDetail from "./components/ProductDetail";
import Basket from "./components/Basket";
import { CategoryTwo } from "./components/Category";
import ProductCategory from "./components/ProductCategory";
import WelcomeAccount from "./components/WelcomeAccount";
import Account from "./components/Account";

class App extends Component {

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true });
      console.log("ambil token1");
      console.log(this.state.hasToken);
    });
  }

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

console.log("ambil token");
AsyncStorage.getItem('id_token').then((token) => {
  console.log(token)
});
const test = WelcomeAccount;

export default App = StackNavigator({
  Home: {
    screen: SplashScreen,
    navigationOptions: {
    }
  },
  app: {
    screen: Main,
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
  ProductDetail: {
    screen: ProductDetail,
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
  },
  Basket: {
    screen: Basket,
    navigationOptions: {
      
    }
  },
  ProductCategory: {
    screen: ProductCategory,
    navigationOptions: {
      
    }
  },
  WelcomeAccount: {
    screen: test,
    navigationOptions: {

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