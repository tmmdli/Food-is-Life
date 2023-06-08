import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import BurgerIcon from '../../assets/icons/burger.svg';
import {RootState} from '../../redux/store';
import FavoriteCard from './components/FavoriteCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {
  AppBottomSheet,
  AppBottomSheetRef,
} from '../../components/AppBottomSheet';
import FoodRecipes from '../fooddetails';

const Favorites = () => {
  const navigation = useNavigation();
  const [idMeal, setIdMeal] = useState(0);
  const appBottomSheetRef = React.useRef<AppBottomSheetRef>(null);

  const {favoriteFoods} = useSelector((state: RootState) => state.favorite);

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
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <BurgerIcon width={36} height={36} />
        </TouchableOpacity>
        <Text style={styles.title}>Favorites</Text>
      </View>
      {/* <ScrollView>
        {favoriteFoods === null || favoriteFoods.length === 0 ? (
          <Text style={styles.noResultsText}>Food not found !</Text>
        ) : (
          favoriteFoods.map((item, index) => (
            <FavoriteCard key={index} item={item} />
          ))
        )}
      </ScrollView> */}
      <FlatList
        data={favoriteFoods}
        style={{flex: 1}}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        keyExtractor={item => `${item.idMeal}`}
        renderItem={renderItem}
      />
      <AppBottomSheet ref={appBottomSheetRef} contentHeight={140}>
        <FoodRecipes idMeal={idMeal} />
      </AppBottomSheet>
    </SafeAreaView>
  );
};
export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
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
  detailsheder: {
    backgroundColor: '#272D2F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 12,
    width: '100%',
  },
  detalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
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
  backicon: {
    marginTop: 15,
  },
  title: {
    color: '#272D2F',
    textAlign: 'center',
    marginLeft: 16,
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
  },
  listContent: {
    gap: 30,
    alignItems: 'center',
    paddingVertical: 30,
  },
  favtext: {
    fontSize: 34,
    color: '#F8F2F2',
    alignSelf: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 30,
    color: '#F8F2F2',
    fontWeight: '700',
    alignSelf: 'center',
  },
});
