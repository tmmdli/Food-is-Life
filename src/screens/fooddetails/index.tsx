import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VectorIcon from '../../assets/icons/back-white.svg';
import HeartIcon from '../../assets/icons/heart-black.svg';
import HeartOrangeIcon from '../../assets/icons/heart.svg';
import CaloriesIcon from '../../assets/icons/Calories.svg';
import BasketIcon from '../../assets/icons/Basket.svg';
import TimeIcon from '../../assets/icons/time.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoriteFood,
  deleteFavoriteFood,
} from '../favorites/redux/favoriteSlice';
import {RootState} from '../../redux/store';

const FoodRecipes = ({idMeal}) => {
  const [meals, setMeals] = useState([]);
  const dispatch = useDispatch();
  const {favoriteFoodsId} = useSelector((state: RootState) => state.favorite);

  const request = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const data = await request(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        );
        setMeals(data.meals.slice(0, 1));
      } catch (error) {}
    };

    if (idMeal) {
      fetchRecipeData();
    }
  }, [idMeal]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View>
          <View style={styles.foodheader}>
            <Image
              source={{
                uri: meals[0]?.strMealThumb,
              }}
              style={styles.FoodImage}
            />
          </View>
          <View style={styles.headerContainer}>
            <Text style={[styles.recipestext, {flex: 1, textAlign: 'center'}]}>
              {meals[0]?.strMeal}
            </Text>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => {
                if (favoriteFoodsId.includes(meals[0].idMeal)) {
                  dispatch(deleteFavoriteFood({idMeal: meals[0].idMeal}));
                } else {
                  dispatch(addFavoriteFood(meals[0]));
                }
              }}>
              {favoriteFoodsId.includes(meals[0]?.idMeal) ? (
                <HeartOrangeIcon width={36} height={36} />
              ) : (
                <HeartIcon width={36} height={36} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.recipesscreen}>
          <Text style={styles.ingtext}>Ingredients</Text>
          <View style={styles.elementWrap}>
            {meals?.map((item, index) => (
              <View style={styles.foodheader} key={index}>
                {Object.keys(item).map(key => {
                  if (key.includes('strIngredient') && item[key]) {
                    return (
                      <View style={styles.element}>
                        <Text style={styles.elementText} key={key}>
                          {item[key]}
                        </Text>
                      </View>
                    );
                  }
                  return null;
                })}
              </View>
            ))}
          </View>
          <Text style={styles.ingtext}>Directions</Text>
          <View style={styles.directionsContainer}>
            {meals?.map((item, index) => (
              <View style={styles.foodheader} key={index}>
                <Text style={styles.directions}>{item.strInstructions}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  foodheader: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  scroll: {
    flexGrow: 1,
  },
  recipestext: {
    color: '#272D2F',
    fontSize: 34,
    fontFamily: 'DancingScript-Bold',
  },
  FoodImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  line: {
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  recipesscreen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  ingtext: {
    color: '#000000',
    marginVertical: 24,
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
  },
  ingredientsContainer: {
    paddingHorizontal: 20,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  ingredients: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  elementWrap: {
    flexDirection: 'row',
  },
  elementContent: {
    gap: 10,
    paddingHorizontal: 16,
  },
  element: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FFC529',
  },
  elementText: {
    fontSize: 16,
    fontWeight: '600',
  },
  directext: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
  },
  directionsContainer: {
    alignSelf: 'center',
    fontSize: 30,
    paddingVertical: 5,
  },
  directions: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000000',
  },
});

export default FoodRecipes;
