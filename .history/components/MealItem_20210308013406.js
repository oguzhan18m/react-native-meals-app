import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const MealItem = (props) => {
    return (
        <TouchableOpacity onPress={props.selectedMeal}>
            <View>

        <View style={styles.mealRow}>
            <Text>{itemData.item.text}</Text>
        </View>
        <View style={styles.mealRow}>

        </View>
            </View>
        </TouchableOpacity>
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


export default MealItem;
