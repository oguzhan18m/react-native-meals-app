import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam('mealId');
    console.log(mealId);
    return (
        <View style={styles.screen}>
            <Text>MEAL DETAILS</Text>
            <Button title='GO BACK TO CATEGORIES' onPress={()=>{props.navigation.popToTop()}} />
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
export default MealDetailScreen;
