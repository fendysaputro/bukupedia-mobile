import React, { Component } from "react";
import { SectionList, AppRegistry, StyleSheet, Text, View, Image, Search, ListView, TouchableOpacity, Dimensions } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import { getCategory, getSubCategory, getProductByCategory } from "../services/FetchCategory";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { Dropdown } from 'react-native-material-dropdown';

var { height, width } = Dimensions.get('window');

export default class Category extends Component {
  static navigationOptions = {
    title: "Pilih Kategori Buku",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerTitleStyle: {
      width: '90%',
      textAlign: 'center'
    },
    headerLeft: null,
  }

  constructor (props){
    super(props);
    this.state = { 
      categories : [], 
      subCategories : []
    }
    this.handleTouchCategory = this.handleTouchCategory.bind(this);
  }

  componentDidMount(){
    var self = this;
    getCategory()
          .then((res) => {
            self.setState({ categories: res.d });
          });
    
    // getSubCategory()
    //       .then((res) => {
    //         self.setState({ subCategories: res.d});
    //       });
  }

  onSelectedItemsChange = (subCategories) => {
    this.setState({ subCategories });
  }

  handleTouchCategory(link) {
    console.log(link)
    this.props.navigation.navigate('ProductCategory', {url: link});
  }


  render () {
    let sections = [];
    let section = {};
    this.state.categories.map((category) => (
      data = [],
      category.sub_category.map((sub) => {
        data.push({name: sub.name, link: sub.link})
      }),
      section = {title: category.name, data: data}, 
      sections.push(section)
    ))
    return (
      <View style={styles.container}>
        {
          <View>
            <SectionList
              renderItem={({item, index, section}) => 
              <TouchableOpacity
                    onPress = {() => this.handleTouchCategory(item.link)}
                  style = {styles.containerTwo}>
                <Text>{item.name}</Text>
              </TouchableOpacity>}
              renderSectionHeader={({section: {title}}) => (
                <TouchableOpacity
                  style = {styles.containerThree}>
                  <Text>{title}</Text>
                </TouchableOpacity>
              )}
              sections={
                sections
              }
              keyExtractor={(item, index) => item + index}/>
          </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDF8FE"
  },
  containerTwo: {
    padding: 10,
    marginTop: 3,
    backgroundColor: 'white' 
  },
  containerThree: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#F1F3F2' 
  },
  text: {
    color: 'black',
    textAlign: 'left',
    marginLeft: '5%'
  },
});

AppRegistry.registerComponent("Category", () => Category);