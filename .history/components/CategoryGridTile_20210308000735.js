import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridItem:{
        margin:20,
        height:150,
    }
  });
export default CategoryGridTile;
