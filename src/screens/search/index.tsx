import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackIcon from '../../assets/icons/back-black.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FavoriteCard from '../favorites/components/FavoriteCard';
import BurgerIcon from '../../assets/icons/burger.svg';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoriteFood,
  deleteFavoriteFood,
} from '../favorites/redux/favoriteSlice';
import {RootState} from '../../redux/store';
import {FlatList} from 'react-native-gesture-handler';
import {
  AppBottomSheet,
  AppBottomSheetRef,
} from '../../components/AppBottomSheet';
import FoodRecipes from '../fooddetails';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const Search = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorite);
  const [value, setValue] = useState('');
  const [food, setFood] = useState([]);
  const [search, setSearch] = useState(false);
  const navigation = useNavigation();
  const [idMeal, setIdMeal] = useState(0);
  const appBottomSheetRef = React.useRef<AppBottomSheetRef>(null);
  const scrollRef = useRef<ScrollView>(null);
  const onGetData = async () => {
    const response = await fetch(apiUrl + value, {method: 'GET'});
    const result = await response.json();
    setFood(result.meals);
    setSearch(true);
  };
  const onChangeText = (text: string) => {
    setValue(text);
    setSearch(false);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };
  const onAddFavori = item => {
    dispatch(addFavoriteFood(item));
  };
  const onDeleteFavori = item => {
    dispatch(deleteFavoriteFood(item));
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
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <BurgerIcon width={36} height={36} />
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
      </View>

      <View>
        <Text style={styles.titletext}>Hi THERE!</Text>
        <Text style={styles.questiontext}>What do you want to find today?</Text>
      </View>
      <View style={styles.Searchcontainer}>
        <TextInput
          style={styles.textinput}
          value={value}
          autoFocus
          placeholder=" Search for name..."
          placeholderTextColor={'gray'}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.search} onPress={onGetData}>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={food}
        contentContainerStyle={styles.listContent}
        numColumns={2}
        style={{flex: 1}}
        keyExtractor={item => `${item.idMeal}`}
        ListEmptyComponent={() =>
          value.length && search ? (
            <View style={styles.empty}>
              <Text style={styles.emptyText}>
                The meals was not found :{'('}
              </Text>
            </View>
          ) : null
        }
        renderItem={renderItem}
      />
      <AppBottomSheet ref={appBottomSheetRef} contentHeight={140}>
        <FoodRecipes idMeal={idMeal} />
      </AppBottomSheet>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 16,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
  },
  title: {
    color: '#272D2F',
    textAlign: 'center',
    marginLeft: 16,
    fontSize: 30,
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
  detalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  random: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    marginTop: 15,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 22,
    color: '#272D2F',
    fontWeight: 'bold',
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
  textSearch: {
    alignSelf: 'center',
    color: '#F8F2F2',
    fontWeight: '700',
    fontSize: 34,
  },
  listContent: {
    gap: 30,
    alignItems: 'center',
    paddingVertical: 30,
    flexGrow: 1,
  },
  childcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F4E4CD',
    alignSelf: 'center',
  },
  titletext: {
    width: 150,
    height: 39,
    color: '#272D2F',
    fontSize: 26,
    fontWeight: '600',
  },
  questiontext: {
    width: 288,
    height: 20,
    color: '#272D2F',
    fontSize: 18,
    fontWeight: '400',
  },
  button2: {
    width: 332,
    height: 50,
    backgroundColor: '#F4E4CD',
    borderRadius: 16,
  },
  Searchcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  textinput: {
    width: 332,
    height: 50,
    backgroundColor: '#272D2F',
    borderRadius: 30,
    fontWeight: '400',
    fontSize: 16,
    color: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  button4: {
    width: 332,
    height: 160,
    backgroundColor: '#F4E4CD',
    borderRadius: 20,
  },
  downbutton: {
    width: 340,
    height: 150,
    backgroundColor: '#F4E4CD',
    borderRadius: 20,
  },
  titlecontainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  foodtext: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  noteicon: {
    position: 'absolute',
    right: 40,
    top: 12,
  },
  search: {
    right: 40,
  },
  noResultsText: {
    fontSize: 30,
    color: '#F8F2F2',
    fontWeight: '700',
    alignSelf: 'center',
  },
});
