/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import AppButton from '../../components/AppButton';
import BurgerIcon from '../../assets/icons/Burger.svg';
import VectorIcon from '../../assets/icons/Vector.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
  const [randomFood, setRandomFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const navigation = useNavigation();


  const requestRandomFood = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const data = await response.json();
    return data.meals.flat(0);
  };

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      requestRandomFood().then((res) =>
        setRandomFood(function (prev) {
          return [...prev, res[0]];
        })
      );
    }
    return () => {
      setRandomFood([]);
    };
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
    const data = await response.json();
    setCategories(data.meals.slice(0, 3));
  };

  const fetchAreas = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
    const data = await response.json();
    setAreas(data.meals.slice(0, 3));
  };

  const fetchIngredients = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );
    const data = await response.json();
    setIngredients(data.meals.slice(0, 3));
  };

  useEffect(() => {
    fetchCategories();
    fetchAreas();
    fetchIngredients();
  }, []);

  return (
    <SafeAreaView style={styles.Header}>
      <ScrollView>
        <View style={styles.container}>
          <AppButton
            onPress={() => {
              navigation.toggleDrawer();
            }}
            icon={<BurgerIcon />}
          />
          <View style={styles.containerhader}>
            <Text style={styles.hader}>Food Recipes</Text>
          </View>
        </View>
        <View style={styles.logo}>
          <Image source={require('../../assets/images/food.png')} />
        </View>
        <View>
          <Text style={styles.RandomText}>Random Meals</Text>
        </View>
        <View style={styles.random}>
          {randomFood.map((item, index) => (
            <TouchableOpacity
              style={styles.random1}
              key={index}
            >
              <Image
                style={styles.randomImage}
                source={{ uri: item.strMealThumb }}
              />
              <Text style={styles.random1text} numberOfLines={3}>
                {item.strMeal}
              </Text>
              <Text style={styles.detalText}>See Details</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Categories</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{ justifyContent: 'center' }}>
                <AppButton
                  icon={<VectorIcon height={33} width={33} />}
              onPress={() => navigation.navigate('Detels')}
                />
              </View>
            </View>
          </View>
          <View style={styles.blok}>
            {categories.map((category, index) => (
              <TouchableOpacity  onPress={() => navigation.navigate('Detels')}>
              <View style={styles.blok1} key={index}>
                <Image
                source={{ uri: `https://www.themealdb.com/images/category/${category.strCategory}.png` }}
                  style={styles.categoryImage}
                />
                <Text style={styles.textcategoria}>{category.strCategory}</Text>
              </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Area</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{ justifyContent: 'center' }}>
                <AppButton
                  icon={<VectorIcon height={33} width={33} />}
                  onPress={() => navigation.navigate('Detels')}
                />
              </View>
            </View>
          </View>
          <View style={styles.blok}>
            {areas.map((area, index) => (
              <TouchableOpacity  onPress={() => navigation.navigate('Detels')}>
              <View style={styles.blok2} key={index}>
                <Text style={styles.textcategoria2}>{area.strArea}</Text>
              </View>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Ingredients</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{ justifyContent: 'center' }}>
                <AppButton
                  icon={<VectorIcon height={33} width={33} />}
                  onPress={() => navigation.navigate('Detels')}
                />
              </View>
            </View>
          </View>
          <View style={styles.blok}>
            {ingredients.map((ingredient, index) => (
               <TouchableOpacity  onPress={() => navigation.navigate('Detels')}>
              <View style={styles.blok3} key={index}>
                <Text style={styles.textcategoria2}>{ingredient.strIngredient}</Text>
              </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  Header: {
    flex: 1,
    backgroundColor: 'rgba(8, 18, 51, 0.54)',
  },
  hader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    verticalAlign: 'middle',
  },
  containerhader: {
    marginLeft: 70,
  },
  logo: {
    alignItems: 'center',
  },
  RandomText: {
    fontWeight: '800',
    fontSize: 22,
    color: 'white',
  },
  random: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  random1: {
    backgroundColor: 'white',
    width: 140,
    height: 240,
    borderRadius: 20,
    gap: 10,
    alignItems: 'center',
  },
  randomImage: {
    width: 140,
    height: 120,
    borderRadius: 20,
  },
  random1text: {
    fontSize: 22,
    fontWeight: '900',
    color: 'black',
  },
  detalText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 10,
  },
  catigoriaText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  categoriheder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  Alltext: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  AllButton: {
    flexDirection: 'row',
  },
  blok: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginTop: 15,
  },
  blok1: {
    backgroundColor: 'white',
    width: 110,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  blok2: {
    backgroundColor: 'white',
    width: 110,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  blok3: {
    backgroundColor: 'white',
    width: 110,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryImage: {
    width: 40,
    height: 30,
    borderRadius: 15,
    // marginBottom: 10,
  },
  areaImage: {
    width: 40,
    height: 30,
    borderRadius: 15,
  },
  ingredientImage: {
    width: 40,
    height: 30,
    borderRadius: 15,
  },
  textcategoria: {
    fontSize: 15,
    fontWeight: '800',
    color: 'black',
  },
  textcategoria2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});


