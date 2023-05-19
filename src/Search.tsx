import React, { useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {} from 'react-test-renderer';
import VectorIcon from './Vector.svg';
import NoteIcon from './Note.svg';
import SearchIcon from './Search.svg';
const apiUrl = 'http://www.themealdb.com/api/json/v1/1/search.php?s=';

const Search = () => {
  const [value, setValue] = useState('');
  const [food, setFood] = useState([]);
  const scrollRef = useRef<ScrollView>(null);
  const onGetData = async () => {
    const response = await fetch(apiUrl + value, {method: 'GET'});
    const result = await response.json();
    console.log(result);
    setFood(result.meals);
  };
  const onChangeText = (text: string) => {
    setValue(text);
  };
  const meal = strMeal => {
    if ( strMeal.length > 30 ){
      return (strMeal.substring(0,30) + '...');
    }
    else {
      return (strMeal);
     }


  };
  return (
    <View>
      <View style={styles.childcontainer}>
        <TouchableOpacity onPress={() => console.log('')}>
          <VectorIcon width={25} height={24} />
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
          style={styles.texting}
          value={value}
          placeholder=" Search for name..."
          placeholderTextColor="#2C2F38"
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={onGetData} >
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <ScrollView ref={scrollRef}>
        {food?.map((item, index) => (
          <View style={styles.titlecontainer} key={index}>
            <TouchableOpacity style={styles.downbutton}>
              <Image style={styles.image} source={{uri: item.strMealThumb}} />
              <Text style={styles.foodtext}>{ meal(item.strMeal)}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('')}>
              <NoteIcon
                width={25}
                height={24}
                position={'absolute'}
                left={120}
                right={0}
                top={-130}
                bottom={0}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  textSearch: {
    alignSelf: 'center',
    color: '#F8F2F2',
    fontWeight: '700',
    fontSize: 24,
  },
  childcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'60%',
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
    fontSize: 16,
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
    gap: -35,
    marginTop: 20,
    marginLeft: 25,
  },
  texting: {
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
    marginTop: 30,
    gap: -10,
  },
  foodtext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
});
