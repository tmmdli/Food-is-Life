/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import VectorIcon from '../../assets/icons/Vector.svg';

const Detels = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchCategories();
    fetchAreas();
    fetchIngredients();
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const fetchCategories = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    );
    const data = await response.json();
    setCategories(data.meals);
  };

  const fetchAreas = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
    const data = await response.json();
    setAreas(data.meals);
  };

  const fetchIngredients = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
    );
    const data = await response.json();
    setIngredients(data.meals);
  };


  const renderList = (list) => {
    if (list.length === 0) {
      return null;
    }

    return (
      <ScrollView>
        <View style={styles.listContainer}>
            <TouchableOpacity onPress={handleBackPress}>
          <VectorIcon width={25} height={24} />
        </TouchableOpacity>
          {list.map((item, index) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Detels', { item })}
              key={index}
            >
              <Image
                style={styles.itemImage}
                source={{ uri: item.strCategoryThumb || item.strAreaThumb || item.strIngredientThumb }}
              />
              <Text style={styles.itemText}>{item.strCategory || item.strArea || item.strIngredient}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.hedercontainer}>
          <TouchableOpacity  onPress={handleBackPress}>
          <VectorIcon width={30} height={30} />
        </TouchableOpacity>
      <Text style={styles.header}>Category/Area/Ingredient</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* {renderCategoryButton()}
        {renderAreaButton()}
        {renderIngredientButton()} */}
      </View>
      {selectedCategory && renderList(selectedCategory)}
      {selectedArea && renderList(selectedArea)}
      {selectedIngredient && renderList(selectedIngredient)}
    </SafeAreaView>
  );
};
 

export default Detels;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
  },
  hedercontainer: {
    flexDirection:'row',
    marginTop: 10,
    justifyContent: 'space-between'
 
  },
  header: {
    fontSize: 24,
    marginRight: 25,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4b7bec',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


