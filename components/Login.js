import React, { Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";
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
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState
                        ({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState
                        ({password})}
                    placeholder={'Password'}
                    style={styles.input}
                />
                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_PRIMARY,
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

