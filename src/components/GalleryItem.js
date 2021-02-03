import React, {Component} from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {Colors} from "../Colors";

export class GalleryItem extends Component {
    state = {
        focused: false
    }

    onFocusChange = () => {
        this.setState(state => ({focused: !state.focused}));
    }

    render() {
        const {item, imageDimensions, dimensions} = this.props;
        return (
            <TouchableHighlight onFocus={this.onFocusChange} onBlur={this.onFocusChange}>
                <View key={item.id}
                      style={[styles.itemContainer, dimensions, this.state.focused ? styles.focused : null]}>
                    <View style={styles.itemContainerImage}>
                        <Image
                            style={[styles.image, imageDimensions]}
                            source={{uri: item.urls.small}}
                        />
                    </View>
                    <View style={styles.itemContainerFlex}>
                        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainerImage: {
        flex: 3,
        overflow: 'hidden'
    },
    itemContainerFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    description: {
        fontSize: 10,
    },
    image: {
        resizeMode: "cover",
    },
    focused: {
        backgroundColor: Colors.focusedElement
    }
});
