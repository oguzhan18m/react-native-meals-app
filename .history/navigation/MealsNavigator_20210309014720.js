import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Platform } from 'react-native';


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

const FavNavigator =  createStackNavigator({
    Favorites : FavoritesScreen,
    MealDetail : MealDetailScreen,
}, {
    defaultNavigationOptions:{
        headerStyle : {
            backgroundColor: Platform.OS==='android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS==='android' ? 'white' : Colors.primaryColor ,
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen,
},{
    // navigationOptions:{
    //     drawerLabel : 'Filters!'
    // }
})

const tabScreenConfig = {
    Meals : {screen :MealsNavigator , navigationOptions:{
        tabBarIcon : (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.primaryColor,
    }},
    Favorites : {screen :FavNavigator , navigationOptions :{
        tabBarIcon : (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
        },
        tabBarColor: Colors.accentColor,
    }},

};

const MealsFavTabNavigator = Platform.OS==='android'? createMaterialBottomTabNavigator(tabScreenConfig,{
        activeTintColor: 'white',
        shifting: true,
}) : createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
    }
});


const MainNavigator = createDrawerNavigator({
    MealsFavs : {screen: MealsFavTabNavigator , navigationOptions:{
        drawerLabel: 'Meals'
    }},
    Filters: FiltersNavigator,
})


export default createAppContainer(MainNavigator);