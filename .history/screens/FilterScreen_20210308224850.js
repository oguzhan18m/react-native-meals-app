import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FilterScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>FILTERS </Text>
        </View>
    )
};


FilterScreen.navigationOptions = {
    headerTitle: 'Filters',
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default FilterScreen;
