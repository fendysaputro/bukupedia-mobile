import React, { Component } from "react";
import { SectionList, AppRegistry, StyleSheet, Text, View, Image, Search, ListView, TouchableOpacity, Dimensions } from "react-native";
import { COLOR_PRIMARY } from "../styles/common";
import TabNavigator from "react-native-tab-navigator";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import { getCategory, getSubCategory, getProductByCategory } from "../services/FetchCategory";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { Dropdown } from 'react-native-material-dropdown';
import { SearchBar, Icon, Header } from "react-native-elements";

var { height, width } = Dimensions.get('window');
const arrayHolder = [];

export default class Category extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 
      <SearchBar
        lightTheme
        // type="text"
        // ref={this.searchFilterFunction(text)}
        onChangeText={function(text){
          console.log("ini text");
          console.log(text);
          console.log("============");
          console.log(arrayHolder);
          // dataSearch = this.getCategory.filter(i => {
          //   return i.category.name.toLowerCase().match( searchText );
          // });
        }}
        // onChangeText={this.searchFilterFunction}
        // value={this.focusTextInput}
        autoCorrect={false}
        round
        // onClearText={someMethod}
        placeholder='Cari Kategori' 
        containerStyle={{width: '100%', backgroundColor: COLOR_PRIMARY}}
      />,
    headerStyle: {
      backgroundColor: COLOR_PRIMARY,
      elevation: null
    },
    headerLeft: null
  })

  constructor (props){
    super(props);
    this.state = { 
      categories : [], 
      subCategories : [],
      dataSearch : [],
    }
    this.handleTouchCategory = this.handleTouchCategory.bind(this);
    this.searchFilterFunction = this.searchFilterFunction.bind(this);
  }

  componentDidMount(){
    var self = this;
    getCategory()
          .then((res) => {
            self.setState({ categories: res.d });
          });
  }

  onSelectedItemsChange = (subCategories) => {
    this.setState({ subCategories });
  }

  handleTouchCategory = link => { 
    console.log('product_link');
    console.log(link);
    console.log('---');
    this.props.navigation.navigate('ProductCategory', {url: link});
  }

  searchFilterFunction = text => {
    console.log("ini text");
    console.log(text);
    console.log("============");
    // searchText = event.nativeEvent.text;
    // dataSearch = this.state.categories;
    // searchText = searchText.trim().toLowerCase();

    // dataSearch = dataSearch.filter(i => {
    //   return i.category.name.toLowerCase().match( searchText );
    // });

    // this.setState({
    //   dataSearch : dataSearch
    // });

    // const newData = this.arrayHolder.filter(item => {
    //   const itemData = `${item.category.name.toUpperCase()}`;
    //   const TextData = text.toUpperCase();
    //   return itemData.indexOf(textData) > -1;
    // });
    // this.setState({
    //   dataSearch: newData,
    // })
  }

  render () {
    console.log(section);
    let sections = [];
    let section = {};
    this.state.categories.map((category) => (
      data = [],
      category.sub_category.map((sub) => {
        data.push({name: sub.name, link: sub.product_link})
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