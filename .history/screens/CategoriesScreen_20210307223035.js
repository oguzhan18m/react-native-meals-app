import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {


    const renderGridItem = (itemData) => {
        return(
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={(item,index)=>item.id} data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
        </View>
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
        flex:1,
        margin:15,
    }
  });

export default CategoriesScreen;    
