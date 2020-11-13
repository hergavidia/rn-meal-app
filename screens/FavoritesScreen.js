import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from "../components/MealList";
import {CATEGORIES, MEALS} from "../data/dummy-data";

const FavoritesScreen = props => {

    const favMeals = MEALS.filter(
        (meal) => meal.id === 'm1' || meal.id === 'm2');

    return <MealList listData={favMeals} navigation={props.navigation}/>;
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites'
};

export default FavoritesScreen;