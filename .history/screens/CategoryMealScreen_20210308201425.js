import React from 'react';
import { Button, StyleSheet, Text, View,FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal=>meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <MealList listData={displayedMeals} />
        </View>
    )
};


CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

    return{
        headerTitle: selectedCat.title,
    }
};


export default CategoryMealScreen;
