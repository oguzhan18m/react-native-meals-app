import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>FAVORITES</Text>
        </View>
    )
};


FavoritesScreen.navigationOptions = {
    headerTitle : 'Favorites',
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default FavoritesScreen;
