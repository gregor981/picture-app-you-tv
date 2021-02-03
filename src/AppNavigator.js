import React from 'react'
import SearchScreen from "./screens/SearchScreen";
import SearchResultScreen from "./screens/SearchResult";
import {createStackNavigator} from "react-navigation";

export const RouteNames = {
    Search: 'Search',
    SearchResult: 'SearchResult',
}

export const AppNavigator = createStackNavigator(
    {
        [RouteNames.Search]: {screen: SearchScreen},
        [RouteNames.SearchResult]: {screen: SearchResultScreen},
    },
    {
        headerMode: 'none'
    },
)
