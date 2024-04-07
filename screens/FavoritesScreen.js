import {Text,View} from 'react-native'
import MealList from '../components/MealLIST/MealList'
// import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favoriets-context';
import { MEALS } from '../data/dummy-data';
import {useSelector,useDispatch} from 'react-redux'
function FavoritesScreen()
{
    // const FavMealsCtx=useContext(FavoritesContext);
    const favoriteMealsIds=useSelector(state=>state.favoriteMeals.ids);

    const favMeals=MEALS.filter(meal=>favoriteMealsIds.includes(meal.id))
return (<MealList items={favMeals}></MealList>)
}
export default FavoritesScreen