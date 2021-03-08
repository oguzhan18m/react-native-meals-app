import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.selectedMeal}>
        <View style={styles.cardsContainer}>
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
    },
    cardsContainer:{
        marginVertical:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#dedede',
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
        borderWidth:1,
        borderRadius:5,
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
