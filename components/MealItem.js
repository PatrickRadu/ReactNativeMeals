import {
  Platform,
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
} from "react-native"
import {useNavigation} from '@react-navigation/native'
import MealDetails from "./MealDetails";
function MealItem({ id,title, imageUrl, duration, complexity, affordability }) {
  const navigation=useNavigation()
  function selectMealItemHandler()
  {
    navigation.navigate('MealDetail',{
        mealId:id
      })
  }
  
    return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => 
          pressed ? styles.buttonPressed : null
        }
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }}></Image>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability}></MealDetails>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;
const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 4,
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
