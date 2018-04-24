import React, { Component } from "react";
import { Text, Alert, Button, TextInput, View, StyleSheet } from "react-native";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../styles/common";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin(){
        const { username, password } = this.state;

        Alert.alert('testing', `${username} + ${password}`);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});

