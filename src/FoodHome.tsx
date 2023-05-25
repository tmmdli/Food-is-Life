/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from './AppButton';
import BurgerIcon from './assets/icons/Burger.svg';
import VectorIcon from './assets/icons/Vector.svg';
import EllipseIcon from './assets/icons/Ellipse.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const FoodHome = ({route: {params}}) => {
  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [area, setArea] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const navigation = useNavigation();

  const request = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const foodData = await request(
        'https://www.themealdb.com/api/json/v1/1/random.php',
      );
      setFood(foodData.meals);

      const categoryData = await request(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
      );
      setCategories(categoryData.meals.slice(0, 3));

      const areaData = await request(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
      );
      setArea(areaData.meals.slice(0, 3));

      const ingredentData = await request(
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
      );
      setIngredients(ingredentData.meals.slice(0, 3));
    };

    fetchData();
  }, []);

  const showCategories = () => {
    console.log('Categories');
  };

  const showArea = () => {
    console.log('Area');
  };

  const showIngredients = () => {
    console.log('Ingredients');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <AppButton
            onPress={() => {
              navigation.toggleDrawer();
            }}
            icon={<BurgerIcon />}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Food Recipes</Text>
          </View>
        </View>
        <View style={styles.logo}>
          <Image source={require('./assets/images/yemek.png')} />
        </View>
        <View>
          <Text style={styles.randomText}>Random Meals</Text>
        </View>
        <View style={styles.random}>
          {food?.map((item, index) => (
            <View style={styles.random1} key={index}>
              <Image
                source={{uri: item.strMealThumb}}
                style={{
                  width: 140,
                  height: 120,
                  borderRadius: 20,
                  alignItems: 'center',
                }}
              />

              <Text style={styles.random1text}>{item.strMeal}</Text>
              <View>
                <Text style={styles.detalText}>See Details</Text>
              </View>
            </View>
          ))}
          {food?.map((item, index) => (
            <View style={styles.random2} key={index}>
              <Image
                source={{uri: item.strMealThumb}}
                style={{
                  width: 140,
                  height: 120,
                  borderRadius: 20,
                  alignItems: 'center',
                }}
              />

              <Text style={styles.random2text}>{item.strMeal}</Text>
              <Text style={styles.detalText}>See Details</Text>
            </View>
          ))}
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>Categories</Text>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>All</Text>
            <View style={styles.button}>
              <AppButton
                icon={<VectorIcon height={28} width={28} />}
                onPress={showCategories}
              />
            </View>
          </View>
        </View>
        <View style={styles.blockContainer}>
          {categories.map((category, index) => (
            <View style={styles.blockItem} key={index}>
              <Image
                source={{
                  uri: `https://www.themealdb.com/images/category/${category.strCategory}.png`,
                }}
                style={styles.blockImage}
              />
              <Text style={styles.blockText}>{category.strCategory}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  logo: {
    alignItems: 'center',
    marginVertical: 10,
  },
  randomText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  random: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  randomItem: {
    // alignItems: 'center',
  },
  randomImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  detailsText: {
    fontSize: 16,
    color: 'blue',
    marginTop: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginRight: 5,
  },
  button: {
    borderRadius: 15,
    backgroundColor: 'lightgray',
    padding: 5,
  },
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  blockItem: {
    alignItems: 'center',
  },
  blockImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  blockText: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default FoodHome;

// export default FoodHome;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     // backgroundColor: 'black',
//     marginTop: 15,
//   },
//   Header: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   hader: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: 'black',
//     verticalAlign: 'middle',
//   },
//   containerhader: {
//     marginLeft: 70,
//   },
//   logo: {
//     alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   icon: {
//     backgroundColor: 'yellow',
//   },
//   RandomText: {
//     fontWeight: '800',
//     fontSize: 22,
//     color: 'white',
//   },
//   random: {
//     flexDirection: 'row',
//     gap: 30,
//     justifyContent: 'center',
//     marginTop: 15,
//   },
//   random1: {
//     backgroundColor: 'white',
//     width: 140,
//     height: 240,
//     borderRadius: 20,
//     gap: 10,
//     // justifyContent: 'center',
//   },
//   random1text: {
//     fontSize: 22,
//     fontWeight: '900',
//     color: 'black',
//   },
//   random2: {
//     backgroundColor: 'white',
//     width: 140,
//     height: 240,
//     borderRadius: 20,
//     gap: 10,
//     // justifyContent: 'center',
//   },
//   random2text: {
//     fontSize: 22,
//     fontWeight: '900',
//     color: 'black',
//   },
//   detalText: {
//     fontSize: 13,
//     fontWeight: '400',
//     color: '#000000',
//     marginLeft: 10,
//   },
//   catigoriaText: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: 'white',
//   },
//   categoriheder: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },
//   Alltext: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: 'white',
//   },
//   AllButton: {
//     flexDirection: 'row',
//   },
//   blok: {
//     flexDirection: 'row',
//     gap: 20,
//     justifyContent: 'center',
//     marginTop: 15,
//   },
//   blok1: {
//     backgroundColor: 'white',
//     width: 110,
//     height: 50,
//     borderRadius: 10,
//   },
//   blok2: {
//     backgroundColor: 'white',
//     width: 100,
//     height: 50,
//     borderRadius: 10,
//   },
//   blok3: {
//     backgroundColor: 'white',
//     width: 100,
//     height: 50,
//     borderRadius: 10,
//   },

// });
