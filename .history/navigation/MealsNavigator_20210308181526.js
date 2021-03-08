import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
    Categories : {screen: CategoriesScreen},
    CategoryMeals : {screen : CategoryMealScreen},
    MealDetail : {screen : MealDetailScreen},
}, 
{
    // initialRouteName:'CategoryMeals',
    // mode:'modal',
    defaultNavigationOptions:{
        headerStyle : {
            backgroundColor: Platform.OS==='android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS==='android' ? 'white' : Colors.primaryColor ,
    }
}
);

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals : {screen :MealsNavigator , navigationOptions:{
        tabBarIcon : (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        }
    }},
    Favorites : {screen :FavoritesScreen , navigationOptions :{
        tabBarIcon : (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        }
    }},

},{
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
    }
});


export default createAppContainer(MealsFavTabNavigator);