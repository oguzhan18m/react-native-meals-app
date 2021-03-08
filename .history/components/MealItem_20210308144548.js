import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.selectedMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri : props.image}} />
                <Text>{props.title}</Text>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
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
        paddingHorizontal:10,
        justifyContent:'space-between',

    }
  });


export default MealItem;
