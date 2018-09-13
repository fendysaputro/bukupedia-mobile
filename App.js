import React, { Component } from "react";
import { Platform, StyleSheet, StatusBar, Text, View, 
        AsyncStorage, BackHandler, BackAndroid, ToastAndroid } from "react-native";
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
import Checkout from "./components/Checkout";
import ReviewOrder from './components/ReviewOrder';
import EditProfile from './components/EditProfile';
import AddressMain from './components/AddressMain';
import NewRating from './components/NewRating';
import Wishlist from './components/Wishlist';
import ContentFormFaq from "./components/ContentFormFaq";
import HowToShop from "./components/HowToShop";
import HowToPay from "./components/HowToPay";
import Blog from "./components/Blog";
import Webview from "./components/Webview";
import WebviewBanner from "./components/WebviewBanner";
// import { MainStack } from "./config/Router";

let listener = null;
let index = 0;
let backButtonPressFunction = () => false;

class App extends Component {

  
  componentDidMount() {
    if (Platform.OS == "android" && listener == null) {
      listener = BackAndroid.addEventListener("hardwareBackPress", () => {
        return backButtonPressFunction()
      });
    }
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
      // <MainStack/>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: SplashScreen,
    navigationOptions: {
    }
  },
  app: {
    screen: Screen,
    navigationOptions: {
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {

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
      title: "Category"
    }
  },
  WelcomeAccount: {
    screen: WelcomeAccount,
    navigationOptions: {
      
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      
    }
  },
  ReviewOrder: {
    screen: ReviewOrder,
    navigationOptions: {
  
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {

    }
  },
  AddressMain: {
    screen: AddressMain,
    navigationOptions:{
      title: "Alamat"
    }
  },
  NewRating: {
    screen: NewRating,
    navigationOptions: {

    }
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: {
      
    }
  },
  ContentFormFaq: {
    screen: ContentFormFaq,
    navigationOptions: {
      
    }
  },
  HowToShop: {
    screen: HowToShop,
    navigationOptions: {

    }
  },
  HowToPay: {
    screen: HowToPay,
    navigationOptions: {
      
    }
  },
  Blog: {
    screen: Blog,
    navigationOptions: {

    }
  },
  WebviewBanner: {
    screen: WebviewBanner,
    navigationOptions: {

    }
  }
},{
  headerMode: 'screen'
});

const prevGetStateForActionApp = App.router.getStateForAction;
App.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
  }
  return prevGetStateForActionApp(action, state);
};

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