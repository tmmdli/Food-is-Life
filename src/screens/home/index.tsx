/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import AppButton from '../../components/AppButton';
import BurgerIcon from '../../assets/icons/burger.svg';
import Forwardİcon from '../../assets/icons/Forward.svg';
import RightIcon from '../../assets/icons/right.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/images/logo.svg';
import {Filters} from './components/Filters';
import Lottie from 'lottie-react-native';
import {
  AppBottomSheet,
  AppBottomSheetRef,
} from '../../components/AppBottomSheet';
import FoodRecipes from '../fooddetails';

const Home = () => {
  const [randomFood, setRandomFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const navigation = useNavigation();
  const [idMeal, setIdMeal] = useState(0);
  const appBottomSheetRef = React.useRef<AppBottomSheetRef>(null);

  const requestRandomFood = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    const data = await response.json();
    return data.meals.flat(0);
  };

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      requestRandomFood().then(res =>
        setRandomFood(prev => {
          return [...prev, res[0]];
        }),
      );
    }
    return () => {
      setRandomFood([]);
    };
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
    );
    const data = await response.json();
    setCategories(data.meals);
  };

  const fetchAreas = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    );
    const data = await response.json();
    setAreas(data.meals);
  };

  const fetchIngredients = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    );
    const data = await response.json();
    setIngredients(data.meals);
  };

  useEffect(() => {
    fetchCategories();
    fetchAreas();
    fetchIngredients();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <BurgerIcon width={36} height={36} />
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
      </View>
      {randomFood.length == 2 &&
      categories.length &&
      areas.length &&
      ingredients.length ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}>
          {/* <View style={styles.logo}>
            <Logo width={200} height={150} />
          </View> */}
          <View>
            <Text style={styles.RandomText}>Random Meals</Text>
          </View>
          <View style={styles.random}>
            {randomFood.map((item, index) => (
              <View style={styles.random1} key={index}>
                <Image
                  style={styles.randomImage}
                  source={{uri: item.strMealThumb}}
                />
                <View
                  style={{
                    alignItems: 'center',
                    flex: 1,
                    marginHorizontal: 10,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.random1text} numberOfLines={3}>
                    {item.strMeal}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.detailsheder}
                    onPress={() => {
                      setIdMeal(item.idMeal);
                      appBottomSheetRef.current?.open();
                    }}>
                    <Text style={styles.detalText}>See Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          <Filters
            title="Categories"
            itemIndex="c"
            itemKey="strCategory"
            item={categories}
          />
          <Filters title="Areas" itemIndex="a" itemKey="strArea" item={areas} />
          <Filters
            title="Ingredients"
            itemIndex="i"
            itemKey="strIngredient"
            item={ingredients}
          />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Lottie
            source={require('../../assets/lottie/loader.json')}
            autoPlay
            loop
          />
        </View>
      )}
      <AppBottomSheet ref={appBottomSheetRef} contentHeight={140}>
        <FoodRecipes idMeal={idMeal} />
      </AppBottomSheet>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginBottom: 16,
  },
  hader: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white',
    verticalAlign: 'middle',
  },
  containerhader: {
    marginLeft: 70,
  },
  title: {
    color: '#272D2F',
    textAlign: 'center',
    marginLeft: 16,
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
  },
  logo: {
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    backgroundColor: 'yellow',
  },
  RandomText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#272D2F',
    textAlign: 'center',
    marginVertical: 16,
    fontFamily: 'DancingScript-Bold',
  },
  detailsheder: {
    backgroundColor: '#272D2F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 12,
    width: '100%',
  },
  random: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  random1: {
    width: 140,
    backgroundColor: '#FFC529',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 140,
    borderTopLeftRadius: 140,
  },
  randomImage: {
    width: 140,
    height: 140,
    borderRadius: 120,
    borderWidth: 6,
    borderColor: '#F2F2F2',
  },
  random1text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#272D2F',
    marginVertical: 16,
  },
  detalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
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
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
  },
  AllButton: {
    flexDirection: 'row',
    gap: 7,
  },
  blok: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginTop: 15,
  },
  blok1: {
    backgroundColor: '#F4E4CD',
    width: 110,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  blok2: {
    backgroundColor: '#F4E4CD',
    width: 110,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  blok3: {
    backgroundColor: '#F4E4CD',
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
