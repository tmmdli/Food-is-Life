import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import VectorIcon from './assets/icons/Vector.svg';
import FavoriteIcon from './assets/icons/Favorite.svg';
import CaloriesIcon from './assets/icons/Calories.svg';
import BasketIcon from './assets/icons/Basket.svg';
import TimeIcon from './assets/icons/Time.svg';
import {useRoute} from '@react-navigation/core';

const FoodRecipes = () => {
  // const route = useRoute();
  // console.log(route.params?.id);
  const [imag, setImag] = useState([]);
  const request = async (url: RequestInfo) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      //www.themealdb.com/api/json/v1/1/lookup.php?i=52772
      const foodData = await request(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=Beef',
      );
      setImag(foodData.meals.slice(0, 1));
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => console.log('')}
          style={styles.righticonButton}>
          <VectorIcon width={28} height={28} />
        </TouchableOpacity>
        {imag?.map(item => (
          <Text style={[styles.recipestext, {flex: 1, textAlign: 'center'}]}>
            {item.strMeal}
          </Text>
        ))}
        <TouchableOpacity
          onPress={() => console.log('')}
          style={styles.lefticonButton}>
          <FavoriteIcon width={28} height={28} />
        </TouchableOpacity>
      </View>

      <View>
        {imag?.map((item, index) => (
          <View style={styles.foodheader} key={index}>
            {/* <Text style={styles.recipestext}>{item.strMeal}</Text> */}
            <Image
              source={{
                uri: item.strMealThumb,
              }}
              style={styles.FoodImage}
            />
          </View>
        ))}

        <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log('')}>
            <TimeIcon width={28} height={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('')}>
            <BasketIcon width={28} height={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CaloriesIcon width={28} height={28} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.recipesscreen}>
          <Image
            source={require('./assets/images/line.png')}
            style={styles.line}
          />
          <Text style={styles.ingtext}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
            {imag?.map((item, index) => (
              <View style={styles.foodheader} key={index}>
                <Text style={styles.ingredients}>{item.strInstructions}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.directext}>Directions</Text>
          <View style={styles.directionsContainer}>
            {imag?.map((item, index) => (
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
    width: '95%',
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foodheader: {
    alignItems: 'center',
    marginTop: 15,
  },
  scroll: {
    flexGrow: 1,
  },
  recipestext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  FoodImage: {
    width: 210,
    height: 210,
    borderRadius: 100,
  },
  line: {
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  recipesscreen: {
    flex: 1,
    backgroundColor: '#F4E4CD',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: 10,
  },
  ingtext: {
    fontSize: 24,
    marginTop: 25,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
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
  directext: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 20,
  },
  directionsContainer: {
    paddingHorizontal: 20,
    alignSelf: 'center',
    fontSize: 30,
    paddingVertical: 5,
  },
  directions: {
    fontSize: 16,
    textAlign: 'left',
    color: '#000000',
  },
});

export default FoodRecipes;
