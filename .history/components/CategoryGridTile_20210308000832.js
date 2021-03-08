import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryGridTile = () => {
    return (
        <TouchableOpacity onPress={()=>{props.navigation.navigate({ routeName: 'CategoryMeals' , params :{
            categoryId : itemData.item.id,
        }})}}>
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
