import React from 'react';
import { Button, StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native';

const MealList = (props) => {
    return (
        <View style={styles.screen}>
            <FlatList style={{width:'100%'}} data={displayedMeals} keyExtractor={(item,index)=>item.id} renderItem={renderMealItem} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10,
    },
  });

export default MealList;
