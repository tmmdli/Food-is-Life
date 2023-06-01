import React, { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BackIcon from '../../assets/icons/Back.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteCard from '../favorites/components/FavoriteCard';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteFood, deleteFavoriteFood } from '../favorites/redux/favoriteSlice';
import { RootState } from '../../redux/store';

const apiUrl = 'http://www.themealdb.com/api/json/v1/1/search.php?s=';

const Search = () => {
  const dispatch = useDispatch();
  const favorite = useSelector((state: RootState) => state.favorite)
  const [value, setValue] = useState('');
  const [food, setFood] = useState([]);
  const navigation = useNavigation();
  const scrollRef = useRef<ScrollView>(null);
  const onGetData = async () => {
    const response = await fetch(apiUrl + value, { method: 'GET' });
    const result = await response.json();
    setFood(result.meals);
  };
  const onChangeText = (text: string) => {
    setValue(text);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };
  const onAddFavori = (item) => {
    dispatch(addFavoriteFood(item));
  }
  const onDeleteFavori = (item) => {
    console.log(item);

    dispatch(deleteFavoriteFood(item));
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.childcontainer}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackIcon width={25} height={24} />
        </TouchableOpacity>
        <Text style={styles.textSearch}>Search</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titletext}>Hi THERE</Text>
        <Text style={styles.questiontext}>
          What do you want to order today?
        </Text>
      </View>
      <View style={styles.Searchcontainer}>
        <TextInput
          style={styles.textinput}
          value={value}
          placeholder=" Search for name..."
          placeholderTextColor="#2C2F38"
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.search} onPress={onGetData}>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <ScrollView ref={scrollRef}>
        {food === null || food.length === 0 ? (
          <Text style={styles.noResultsText}>Food not found !</Text>
        ) : (
          food.map((item, index) => (
            <FavoriteCard
              key={index}
              item={item}
              onAddFavori={onAddFavori}
              onDeleteFavori={onDeleteFavori}
              disabled={favorite.favoriteFoodsId.includes(item.idMeal)} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
    flex: 1,
  },
  textSearch: {
    alignSelf: 'center',
    color: '#F8F2F2',
    fontWeight: '700',
    fontSize: 34,
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
    color: '#FAFDFF',
    fontSize: 24,
    fontWeight: '700',
  },
  questiontext: {
    width: 288,
    height: 20,
    color: '#FAFDFF',
    fontSize: 18,
    fontWeight: '400',
  },
  title: {
    paddingHorizontal: 20,
    marginTop: 10,
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
    marginLeft: 20,
    justifyContent: 'center',
  },
  textinput: {
    width: 332,
    height: 50,
    backgroundColor: '#F4E4CD',
    borderRadius: 16,
    fontWeight: '400',
    fontSize: 16,
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
