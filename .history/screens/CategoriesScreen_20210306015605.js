import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Categories screen</Text>
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
