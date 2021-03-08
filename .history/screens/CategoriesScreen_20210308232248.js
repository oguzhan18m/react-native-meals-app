import React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons';

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

CategoriesScreen.navigationOptions = (navigationData) => {

    return{
        headerTitle:'Meal Categories',
        headerLeft : (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=>{
            navigationData.navigation.openDrawer();  
        }} />
    </HeaderButtons>)
    }
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
