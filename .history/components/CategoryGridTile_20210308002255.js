import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={()=>{props.onSelect}}>
        <View style={{...styles.container , ...{backgroundColor:props.color}}}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:20,
        height:150,
    },
    container:{
        flex:1,
        borderRadius:10,
    }
  });
export default CategoryGridTile;
