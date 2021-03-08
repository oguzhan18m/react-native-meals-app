import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.selectedMeal}>
        <View>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri : props.image}} style={styles.bgImage}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </ImageBackground>
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
        borderRadius:5,
        backgroundColor:'#dedede',
        overflow:'hidden',
        marginVertical:10,
    },

    mealRow: {
      flexDirection:'row',
      
    },
    mealHeader:{
        height:'85%',
        borderRadius:5,
    },
    mealDetail:{
        height:'15%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#f5f5f5'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',

    },
    title:{
        fontFamily:'didact-gothic',
        fontSize:20,
        color:'white',
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:10,
        textAlign:'center'
    }
  });


export default MealItem;
