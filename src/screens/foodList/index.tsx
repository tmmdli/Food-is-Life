import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../../assets/icons/back-black.svg';
import {
  AppBottomSheet,
  AppBottomSheetRef,
} from '../../components/AppBottomSheet';
import FoodRecipes from '../fooddetails';
import AnimatedLottieView from 'lottie-react-native';

export const FoodList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [idMeal, setIdMeal] = useState(0);
  const appBottomSheetRef = React.useRef<AppBottomSheetRef>(null);
  console.log(route);
  useEffect(() => {
    fetchData();
  }, [route.params.key]);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?${route.params.key}=${route.params.itemKey}`,
    );
    const responseData = await response.json();
    console.log('aaaaa', responseData);
    setData(responseData.meals);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.random1}>
        <Image style={styles.randomImage} source={{uri: item.strMealThumb}} />
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
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.goBack()}>
          <BackIcon width={36} height={36} />
        </TouchableOpacity>
        <Text style={styles.title}>{route.params.title}</Text>
      </View>
      {data.length ? (
        <FlatList
          data={data}
          contentContainerStyle={styles.listContent}
          numColumns={2}
          keyExtractor={item => `${item.idMeal}`}
          renderItem={renderItem}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <AnimatedLottieView
            source={require('../../assets/lottie/loader.json')}
            autoPlay
            loop
          />
        </View>
      )}
      <AppBottomSheet ref={appBottomSheetRef}>
        <FoodRecipes idMeal={idMeal} />
      </AppBottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
    marginLeft: 15,
    color: '#272D2F',
  },
  detalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  listContent: {
    gap: 30,
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: 10,
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
    marginHorizontal: 20,
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
});
