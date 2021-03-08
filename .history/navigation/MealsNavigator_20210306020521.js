import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories : {screen: CategoriesScreen},
    CategoryMeals : {screen : CategoryMealScreen},
    MealDetail : {screen : MealDetailScreen},
})

const MealsNavigatorCreated = createAppContainer(MealsNavigator);

export default MealsNavigatorCreated;