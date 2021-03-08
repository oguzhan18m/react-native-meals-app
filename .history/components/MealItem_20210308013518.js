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
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#ccc',
    },
    mealRow: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default MealItem;
