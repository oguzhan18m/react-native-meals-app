import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.selectedMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <Text>{props.title}</Text>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration} m</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#ccc',
    },
    mealRow: {
      flexDirection:'row',
    },
    mealHeader:{
        height:'90%',
    },
    mealDetail:{

    }
  });


export default MealItem;
