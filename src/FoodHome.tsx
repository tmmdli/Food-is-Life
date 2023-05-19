import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AppButton from './AppButton';
import BurgerIcon from './assets/icons/Burger.svg';
import VectorIcon from './assets/icons/Vector.svg';
const apiUrl = 'www.themealdb.com/api/json/v1/1/random.php'; //tesadufi yemek axtarin
// const apiUrl = 'www.themealdb.com/api/json/v1/1/list .php?c=list'; //kategoriya
// const apiUrl = 'www.themealdb.com/api/json/v1/1/list.php?a=list'; //erazi
// const apiUrl = 'www.themealdb.com/api/json/v1/1/list.php?i=list'; //terkibi
const FoodHome = () => {
  const [food, setFood] = useState('null');

  const fetchUser = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data.results[0];
  };
  useEffect(() => {
    fetchUser()
      .then(userData => setUser(userData))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <AppButton icon={<BurgerIcon />} />
          </View>
          <View style={styles.containerhader}>
            <Text style={styles.hader}>Food Recipes</Text>
          </View>
        </View>
        <View style={styles.logo}>
          <Image source={require('./assets/images/yemek.png')} />
        </View>
        <View>
          <Text style={styles.RandomText}>Random Meals</Text>
        </View>
        <View style={styles.random}>
          <View style={styles.random1}>
            <Text source={{uri: food}} />{' '}
          </View>
          <View style={styles.random2} />
        </View>
        <View>
          <View style={styles.categoriheder}>
            <Text style={styles.catigoriaText}>Categories</Text>
            <View style={styles.AllButton}>
              <Text style={styles.Alltext}>All</Text>
              <View style={{justifyContent: 'center'}}>
                <AppButton icon={<VectorIcon height={28} width={28} />} />
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
                <AppButton icon={<VectorIcon height={28} width={28} />} />
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
                <AppButton icon={<VectorIcon height={28} width={28} />} />
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
    </View>
  );
};

export default FoodHome;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#E7DFDF',
    marginTop: 15,
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
  },
  random2: {
    backgroundColor: 'white',
    width: 140,
    height: 240,
    borderRadius: 20,
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
    width: 100,
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
