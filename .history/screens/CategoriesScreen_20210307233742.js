import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {


    const renderGridItem = (itemData) => {
        return(
            <TouchableOpacity onPress={()=>{props.navigation.navigate({ routeName: 'CategoryMeals' , params :{
                categoryId : itemData.item.id,
            }})}}>
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={(item,index)=>item.id} data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
        </View>
    )


}; 

CategoriesScreen.navigationOptions ={
    headerTitle:'Meal Categories',
    headerStyle : {
        backgroundColor: Platform.OS==='android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS==='android' ? 'white' : Colors.primaryColor ,
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



export default CategoriesScreen;    
