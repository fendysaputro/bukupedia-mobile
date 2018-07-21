import React, { Component } from "react";
import { AppRegistry, 
  StyleSheet, 
  Text, 
  ScrollView,
  View,
  Button, 
  Dimensions,
  TouchableOpacity,
  AsyncStorage } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";

export default class ReviewOrder extends Component {

    render() {
        return (
        <ScrollView contentContainer={styles.contentContainer}>
            <View>
                <Text>ReviewOrder</Text>
            </View>
        </ScrollView>
            );
    }

}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20
    }
});