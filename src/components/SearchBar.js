import React, {Component} from "react";
import {TextInput, TouchableHighlight, StyleSheet, Text, View, Button} from "react-native";
import {FocusManager} from "@youi/react-native-youi";
import {Colors} from "../Colors";
import ErrorLabel from "./ErrorLabel";
import withState from "../redux/withState";

const inputHeight = 35;
const inputWidth = 250;

class SearchBar extends Component {
    state = {
        inputFocused: false,
        buttonFocused: false,
    }

    searchInputRef = React.createRef();
    buttonSearch = React.createRef();

    componentDidMount() {
        FocusManager.focus(this.searchInputRef.current);
    }

    handleChange = (event) => {
        this.props.updateString(event.nativeEvent.text);
    };

    handlePress = async () => {
        try {
            const searchResult = await this.props.searchImages(this.props.searchString);
            if (searchResult.payload.length > 0) {
                this.props.onResults();
            }
        } catch (e) {
            console.warn(e);
        }
    };

    toggleInputFocus = (element) => {
        this.setState(state => ({[element]: !state[element]}));
    }

    onInputFocus = () => {
        this.toggleInputFocus('inputFocused');
    }

    onInputBlur = () => {
        this.toggleInputFocus('inputFocused');
        FocusManager.focus(this.buttonSearch.current);
    }

    onButtonFocus = () => {
        console.log('on focus');
        this.toggleInputFocus('buttonFocused');
    }

    onButtonBlur = () => {
        this.toggleInputFocus('buttonFocused');
    }

    render() {
        return (
            <View style={styles.bodyContainer}>
                <View style={[styles.inputContainer, this.state.inputFocused ? styles.inputFocused : null]}>
                    <TextInput
                        style={styles.input}
                        placeholder={this.props.searchString}
                        onChange={this.handleChange}
                        ref={this.searchInputRef}
                        onFocus={this.onInputFocus}
                        onBlur={this.onInputBlur}
                    />
                </View>
                <TouchableHighlight
                    onFocus={this.onButtonFocus}
                    onBlur={this.onButtonBlur}
                    style={[styles.buttonContainer, this.state.buttonFocused ? styles.buttonContainerFocused : null]}
                    onPress={this.handlePress}
                    ref={this.buttonSearch}
                >
                    <Text
                        style={this.state.buttonFocused ? styles.buttonTextFocused : null}
                    >Search</Text>
                </TouchableHighlight>
                <ErrorLabel/>
            </View>
        );
    }
}

export default withState(SearchBar);

const styles = StyleSheet.create({
    bodyContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    buttonContainer: {
        margin: 10,
        padding: 5,
        borderRadius: 5,
        backgroundColor: Colors.element.normal,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainerFocused: {
        backgroundColor: Colors.element.focused,
    },
    buttonTextFocused:{
      color: Colors.white,
    },
    inputContainer: {
        height: inputHeight,
        width: inputWidth,
        borderRadius: Math.round(inputHeight / 2),
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: Colors.element.normal
    },
    input: {
        height: inputHeight,
        width: inputWidth,
        color: Colors.grey,
        fontSize: Math.round(inputHeight / 3),
        backgroundColor: Colors.white
    },
    inputFocused: {
        borderColor: Colors.element.focused
    }
});
