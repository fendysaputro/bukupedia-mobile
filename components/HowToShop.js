import React, { Component } from 'react';
import { AppRegistry, Text, View, 
        StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../styles/common';
import { getContentShop } from '../services/FetchContent';

export default class HowToShop extends Component {
    static navigationOptions = {
        title: 'How to shop',
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
            contentHowToShop: {}
        }
    }

    componentDidMount(){
        this.setState({howToShops: []});
        getContentShop()
        .then((res) => {
            this.setState({ contentHowToShop: res.d });
        })
    }

    render (){
        return (
            <View style={styles.container}>
                <Text>{this.state.contentHowToShop.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    }
});

AppRegistry.registerComponent("HowToShop", () => HowToShop);

