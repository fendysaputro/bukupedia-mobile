import React, { Component } from 'react';
import { AppRegistry, 
    StyleSheet, Text, View, 
    Image, Search, TextInput, 
    TouchableOpacity, ScrollView,
    AsyncStorage,
    Alert } from "react-native";
import { COLOR_PRIMARY, sliderWidth, itemWidth } from "../styles/common";
import { getContentFaq } from "../services/FetchContent";

export default class ContentFormFaq extends Component{
    static navigationOptions = {
        title: 'Content Faq',
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
            contentFaq: {}
        }
      }

    componentDidMount(){
    this.setState({contentFaqs: []});
    getContentFaq()
        .then((res) => {
        this.setState({ contentFaq: res.d });
        });
    }

    render (){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textNew}>
                        {this.state.contentFaq.content}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center"   
    },
    textNew: {
        color: 'black',
        textAlign: 'left',
        marginLeft: 30
    }
})

AppRegistry.registerComponent("ContentFormFaq", () => ContentFormFaq);