import { createStackNavigator, createBottomTabNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories : {screen: CategoriesScreen},
    CategoryMeals : {screen : CategoryMealScreen},
    MealDetail : {screen : MealDetailScreen},
}, 
{
    // initialRouteName:'CategoryMeals',
    // mode:'modal',
    defaultNavigationOptions:{
        headerStyle : {
            backgroundColor: Platform.OS==='android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS==='android' ? 'white' : Colors.primaryColor ,
    }
}
);

const MealsFavTabNavigator = createBottomTabNavigator();


export default createAppContainer(MealsNavigator);