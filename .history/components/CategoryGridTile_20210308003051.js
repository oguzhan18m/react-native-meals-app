import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={()=>{props.onSelect}}>
        <View style={{...styles.container , ...{backgroundColor:props.color}}}>
            <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        margin:20,
        height:150,
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset: {width:0, height:2},
        shadowRadius:10,
        elevation:3,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    title:{
        fontFamily:'didact-gothic',
        fontSize:18,
        color:'white',
        textAlign:'right',
    }
  });
export default CategoryGridTile;
