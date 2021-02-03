import {connect} from "react-redux";
import {searchImages, updateString} from "./imageStore";

export default connect(
    state => ({
        searchString: state.search.searchString,
        imageResults: state.search.imageResults,
        error: state.search.error
    }),
    {updateString, searchImages}
)
