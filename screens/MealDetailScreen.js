import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {MEALS} from "../data/dummy-data";
import Colors from "../constants/Colors";
import { HeaderButtons, Item} from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");

    const selecteddMeal = MEALS.find(
        (meal) => meal.id === mealId
    );

    return (
        <View style={styles.screen} >
            <Text>{ selecteddMeal.title }</Text>
            <Button title='Go Back at All!' onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
}

MealDetailScreen.navigationOption = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find(
        (meal) => meal.id === mealId
    );
    return {
        headerTitle: selectedMeal.title,
        headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='ios-star' onPress={()=> {}}/>
        </HeaderButtons>),
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;