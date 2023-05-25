/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from '../../components/AppButton';
import BurgerIcon from '../../assets/icons/Burger.svg';
import VectorIcon from '../../assets/icons/Vector.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
//
const Home = ({}) => {
  const [randomFood, setRandomFood] = useState([]);
  const navigation = useNavigation();
  // const [meals, setMeals] = useState([]);
  const requestRandomFood = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    const data = await response.json();
    return data.meals.flat(0);
  };

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      requestRandomFood().then(res => setRandomFood(prev => [...prev, res[0]]));
    }

    return () => {
      setRandomFood([]);
    };
  }, []);

  const Categories = () => {};
  const Area = () => {};
  const Ingredients = () => {};

  return (
    <SafeAreaView style={styles.Header}>
      <ScrollView>
        <View style={styles.container}>
          <AppButton
            onPress={() => {
              navigation.toggleDrawer();
            }}
            icon={<BurgerIcon />}
            // style={undefined}
          />
          {/* </View> */}
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
          {randomFood?.map((item, index) => (
            <View style={styles.random1} key={index}>
              <Image
                style={{
                  width: 140,
                  height: 120,
                  borderRadius: 20,
                  alignItems: 'center',
                }}
                source={{uri: item.strMealThumb}}
              />

              <Text style={styles.random1text}>{item.strMeal}</Text>
              <View>
                <Text style={styles.detalText}>See Details</Text>
              </View>
            </View>
          ))}
        </View>
        <View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Categories</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{justifyContent: 'center'}}>
                <AppButton
                  icon={<VectorIcon height={28} width={28} />}
                  onPress={Categories}
                />
              </View>
            </View>
          </View>
          <View style={styles.blok}>
            <View style={styles.blok1} />
            <View style={styles.blok2} />
            <View style={styles.blok3} />
          </View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Area</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{justifyContent: 'center'}}>
                <AppButton
                  icon={<VectorIcon height={28} width={28} />}
                  onPress={Area}
                />
              </View>
            </View>
          </View>
          <View style={styles.blok}>
            <View style={styles.blok1} />
            <View style={styles.blok2} />
            <View style={styles.blok3} />
          </View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Ingredients</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{justifyContent: 'center'}}>
                <AppButton
                  icon={<VectorIcon height={28} width={28} />}
                  onPress={Ingredients}
                />
              </View>
            </View>
          </View>
          <View style={styles.blok}>
            <View style={styles.blok1} />
            <View style={styles.blok2} />
            <View style={styles.blok3} />
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
    // backgroundColor: 'black',
    marginTop: 15,
  },
  Header: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
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
    // justifyContent: 'center',
  },
  icon: {
    backgroundColor: 'yellow',
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
    // justifyContent: 'center',
  },
  random1text: {
    fontSize: 22,
    fontWeight: '900',
    color: 'black',
  },
  random2: {
    backgroundColor: 'white',
    width: 140,
    height: 240,
    borderRadius: 20,
    gap: 10,
    // justifyContent: 'center',
  },
  random2text: {
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
    height: 50,
    borderRadius: 10,
  },
  blok2: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 10,
  },
  blok3: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 10,
  },
});
