import React, { Component } from 'react';
import { WebView, AsyncStorage,
        View, Text, StyleSheet, AppRegistry } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';

export default class Blog extends Component {
    static navigationOptions = {
        title: 'Blog Kami',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: COLOR_PRIMARY,
          elevation: null,
        },
        headerTitleStyle: {
          width: '90%',
          textAlign: 'center'
        }
    }

    render (){
        return(
            <WebView
            source={{uri: 'https://www.bukupedia.com/'}}
            style={{marginTop: 20}}
          />
        )
    }
}

AppRegistry.registerComponent("Blog", () => Blog);