import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Platform,
    FlatList,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

import MealList from "../components/MealList";
import {useSelector} from "react-redux";

const CategoryMealsScreen = (props) => {


    const catId = props.navigation.getParam("categoryId");

    const avaiableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = avaiableMeals.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    };
};


export default CategoryMealsScreen;
