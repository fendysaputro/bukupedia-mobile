import React, { Component } from 'react';
import { View, Text, StyleSheet, 
        AppRegistry } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';
import { getContentPay } from '../services/FetchContent';

export default class HowToPay extends Component {
    static navigationOptions = {
        title: 'How To Pay',
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

    constructor(props){
        super(props);
        this.state = {
            contentHowToPay: {}
        }
    }

    componentDidMount(){
        this.setState({contentHowToPays: []});
        getContentPay() 
        .then((res) => {
            this.setState({ contentHowToPay: res.d });
        }) 
    }

    render (){
        return (
            <View style = {styles.container}>
                <Text>{this.state.contentHowToPay.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center"
    }
});

AppRegistry.registerComponent("HowToPay", () => HowToPay);