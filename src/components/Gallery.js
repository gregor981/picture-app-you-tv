import React, {Component} from "react";
import {FlatList, SafeAreaView} from "react-native";
import withState from "../redux/withState";
import {FocusManager} from "@youi/react-native-youi";
import {Dimensions} from 'react-native';
import {GalleryItem} from './GalleryItem';

export const numOfColumns = 4;
export const cellDimension = Math.round(Dimensions.get('window').width / numOfColumns);

const imageDimension = cellDimension - 20;
const dimensions = {
    width: cellDimension,
    height: cellDimension
}
const imageDimensions = {
    width: imageDimension,
    height: imageDimension
}

class Gallery extends Component {
    flatListRef = React.createRef();

    componentDidMount() {
        FocusManager.focus(this.flatListRef.current);
    }

    renderItem = ({item}) => (
        <GalleryItem
            item={item}
            dimensions={dimensions}
            imageDimensions={imageDimensions}
        />
    )

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    ref={this.flatListRef}
                    data={this.props.imageResults}
                    renderItem={this.renderItem}
                    numColumns={numOfColumns}
                    keyExtractor={({id}) => id}
                />
            </SafeAreaView>
        );
    }
}

export default withState(Gallery);
