import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity onPress={()=>{props.onSelect}}>
        <View style={styles.gridItem}>
            <Text>{itemData.item.title}</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        margin:20,
        height:150,
    }
  });
export default CategoryGridTile;
