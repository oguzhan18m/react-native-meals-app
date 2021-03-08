import React from 'react';
import { Button, StyleSheet, Text, View, Platform } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';


const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>{selectedCat.title}</Text> 
            <Button title='GO TO DETAILS' onPress={()=>{props.navigation.navigate('MealDetail')}} />
            <Button title='Go Back' onPress={()=>{props.navigation.goBack()}} />
        </View>
    )
};


CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

    return{
        headerTitle: selectedCat.title,
        headerStyle : {
            backgroundColor: Platform.OS==='android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS==='android' ? 'white' : Colors.primaryColor ,
    }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default CategoryMealScreen;
