import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Colors} from "../Colors";
import withState from "../redux/withState";

class ErrorLabel extends Component {
    render() {
        return (
            this.props.error && <View><Text style={styles.label}>{this.props.error.message}</Text></View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        color: Colors.red
    }
});

export default withState(ErrorLabel);
