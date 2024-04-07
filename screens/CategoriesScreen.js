import { FlatList, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function presshandler() {
      navigation.navigate('MealsOverView',{
        categoryId: itemData.item.id,
      });

    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={presshandler}
      ></CategoryGridTile>
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      ></FlatList>
    </View>
  );
}
export default CategoriesScreen;
const styles = StyleSheet.create({});
