import { View, Text, StyleSheet } from "react-native";

function MealDetails({textStyle,style, duration, complexity, affordability }) {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}
export default MealDetails;
const styles = StyleSheet.create({
    details:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
