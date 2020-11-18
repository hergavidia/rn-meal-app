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
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {


    const catId = props.navigation.getParam("categoryId");

    const avaiableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = avaiableMeals.filter(
        (meal) => meal.categoryIds.indexOf(catId) >= 0
    );

    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    if (displayedMeals.length === 0 ) {
        return <View style={styles.content}>
            <DefaultText>No meals found, maybe check your filters!</DefaultText>
        </View>
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;
