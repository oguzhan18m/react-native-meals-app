import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FilterScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>FILTERS </Text>
        </View>
    )
};


FilterScreen.navigationOptions = (navigationData) => {

    return{
        headerTitle:'Filter Meals',
        headerLeft : (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={()=>{
            navigationData.navigation.toggleDrawer();  
        }} />
    </HeaderButtons>
    )
    }
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
