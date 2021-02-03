import React, { Component } from "react";
import { StyleSheet, View ,Button} from "react-native";
import SearchBar from "../components/SearchBar";
import {Colors} from "../Colors";
import {RouteNames} from "../AppNavigator";
import withState from "../redux/withState";

class SearchScreen extends Component {
  moveToResults = () => {
    this.props.navigation.navigate(RouteNames.SearchResult);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <SearchBar onResults={this.moveToResults}/>
      </View>
    );
  }
}

export default withState(SearchScreen);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.backgroundApp,
    flex: 1
  }
});
