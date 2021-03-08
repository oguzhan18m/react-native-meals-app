import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props) => {


    const renderGridItem = () => {
        return;
    }


    return (
        <View style={styles.screen}>
            <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
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
  });

export default CategoriesScreen;    
