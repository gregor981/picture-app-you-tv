import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {Colors} from "../Colors";
import Gallery from "../components/Gallery";
import { FocusManager } from "@youi/react-native-youi";

class SearchResultScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Gallery/>
            </View>
        );
    }
}

export default SearchResultScreen;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.backgroundApp,
        flex: 1
    }
});
