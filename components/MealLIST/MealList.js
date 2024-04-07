
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../MealItem";
function MealList({items}){
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemprops = {
          id:item.id,
          title: itemData.item.title,
          imageUrl: item.imageUrl,
          affordability: item.affordability,
          complexity: item.complexity,
          duration: item.duration,
        };
        return <MealItem {...mealItemprops}></MealItem>;
      }

   return <View style={styles.container}>
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    ></FlatList>
  </View>
    
}

export default MealList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  