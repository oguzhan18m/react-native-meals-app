import React from 'react';
import { Button, StyleSheet, Text, View,FlatList } from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMealScreen = (props) => {


    const renderMealItem = (itemData) => {
        return(<MealItem 
            title={itemData.item.title} 
            duration={itemData.item.duration} 
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            image={itemData.item.imageUrl}
            onSelectMeal={()=>{}} />)
    }

    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal=>meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList style={{width:'100%'}} data={displayedMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem} />
        </View>
    )
};


CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

    return{
        headerTitle: selectedCat.title,
    }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
  });


export default CategoryMealScreen;
