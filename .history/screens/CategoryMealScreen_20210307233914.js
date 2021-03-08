import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoryMealScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    return (
        <View style={styles.screen}>
            <Text>MEAL SCREEN</Text> 
            <Button title='GO TO DETAILS' onPress={()=>{props.navigation.navigate('MealDetail')}} />
            <Button title='Go Back' onPress={()=>{props.navigation.goBack()}} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default CategoryMealScreen;
