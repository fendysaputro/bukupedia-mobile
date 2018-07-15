import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import WelcomeAccount from '../components/WelcomeAccount';

export const MainStack = StackNavigator ({
  Home: {
      screen: Home,
      navigationOptions:{
          title: "Home"
      }
  },
  Welcome: {
    screen: WelcomeAccount,
    navigationOptions:{
        title: "Welcome"
    }
  }  
});

export const MainTabs = TabNavigator ({

});

export const Root = StackNavigator ({
    Tabs : {
        screen: MainTabs,
    }
});