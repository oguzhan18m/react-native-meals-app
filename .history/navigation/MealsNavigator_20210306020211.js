import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealScreen,
    MealDetail : MealDetailScreen,
})

const MealsNavigatorCreated = createAppContainer(MealsNavigator);

export default MealsNavigatorCreated;