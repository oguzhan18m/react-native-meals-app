import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Categories screen</Text>
            <Button title='GO TO MEALS' onPress={() => {props.navigation.navigate({routerName: 'CategoryMeals'})}} />
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
