import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryGridTile = (props) => {

    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCmp = TouchableNativeFeedback;
    }


    return (
        <View style={styles.gridItem}>
        <TouchableCmp style={{flex:1}} onPress={props.onSelect}>
        <View style={{...styles.container , ...{backgroundColor:props.color}}}>
            <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
        </TouchableCmp>
        </View>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:10,
        height:150,
        borderRadius:10,
        overflow: Platform.OS==='android' && Platform.Version>=21 ? 'hidden' : 'visible',
        elevation:3,
    },
    container:{
        flex:1,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset: {width:0, height:2},
        shadowRadius:10,
        borderRadius:10,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    title:{
        fontFamily:'didact-gothic',
        fontSize:18,
        color:'white',
        textAlign:'right',
        fontWeight:'bold',
    }
  });
export default CategoryGridTile;
