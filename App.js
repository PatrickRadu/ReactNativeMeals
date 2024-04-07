import { StatusBar } from "expo-status-bar";
import { StyleSheet,Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/favoriets-context";
import {Provider} from 'react-redux'
import {store} from './store/redux/store'
const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();
function DrawerNavigator()
{
  return <Drawer.Navigator screenOptions={{
    headerStyle:
    {
      backgroundColor:'#351401'
    },
    headerTintColor:'white',
    sceneContainerStyle:{backgroundColor:"#3f2f25"},
    drawerContentStyle:{backgroundColor:"#351401"},
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#3f2f25'
  }}>
    <Drawer.Screen component={CategoriesScreen} name="Categories"/>
    <Drawer.Screen component={FavoritesScreen} name="Favorites"/>
  </Drawer.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:
          {
            backgroundColor:'#351401'
          },
          headerTintColor:'white',
          contentStyle:{backgroundColor:"#3f2f25"},

        }}>
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
              headerShown:false,
            }}
          ></Stack.Screen>
           <Stack.Screen name="MealsOverView" component={MealsOverviewScreen} /*options={({route,navigation}) =>{
            const catId=route.params.categoryId;
            return 
            {
              title:catId,
            }
          }} */
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
