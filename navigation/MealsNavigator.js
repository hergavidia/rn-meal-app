import React from 'react';
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons} from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";

import Colors from '../constants/Colors';
import FavoritesScreen from "../screens/FavoritesScreen";
import { createMaterialBottomTabNavigator }
    from "react-navigation-material-bottom-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const stackNavObject = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
        screen: MealDetailScreen
    },
  },
    stackNavObject
);

const FavNavigator = createStackNavigator({
    Favourites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, stackNavObject);

const tabScreenConfig = {
    Meals: {screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            }
        }},
    Favourites: { screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }}
};

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    tabScreenConfig, {
        activeColor: Colors.primaryColor,
        shifting: true
}) : createBottomTabNavigator(
    tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, stackNavObject);

const mainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
});

export default createAppContainer(mainNavigator);
