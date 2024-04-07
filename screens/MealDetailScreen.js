import React, { useContext, useLayoutEffect } from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import IconButton from '../components/IconButton';
import { addFavorites, removeFavorites } from '../store/redux/favorites';

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const favoriteMealsId = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealIsFav = favoriteMealsId.includes(mealId);

  function HeaderButtonPress() {
    if (mealIsFav) {
      dispatch(removeFavorites({ id: mealId }));
    } else {
      dispatch(addFavorites({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFav ? 'star' : 'star-outline'}
          color="white"
          onPress={HeaderButtonPress}
        />
      ),
    });
  }, [navigation, mealIsFav]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        textStyle={styles.detailText}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
        </View>
        <View style={styles.listContainer}>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
    textAlign: 'center',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;