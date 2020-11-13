import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import FavoritesScreen from "./FavoritesScreen";

const FiltersScreen = (props) => {
    return (
        <View style={StyleSheet.screen} >
            <Text>The FiltersScreen screen</Text>
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    };
};

export default FiltersScreen;