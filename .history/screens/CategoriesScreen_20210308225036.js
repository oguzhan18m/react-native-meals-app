import React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons} from 'react-navigation-header-buttons';

const CategoriesScreen = (props) => {


    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={()=>{
                props.navigation.navigate({ 
                    routeName: 'CategoryMeals' , 
                    params : {
                        categoryId : itemData.item.id,
                    },
                })
            }} />
        )
    }


    return (
            <FlatList keyExtractor={(item,index)=>item.id} data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
    )


}; 

CategoriesScreen.navigationOptions ={
    headerTitle:'Meal Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



export default CategoriesScreen;    
