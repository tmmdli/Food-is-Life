/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import VectorhomeIcon from '../../assets/icons/Vectorhome.svg';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    fetchCategories();
    fetchAreas();
    fetchIngredients();
  }, []);

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

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCategoryPress = () => {
    setSelectedCategory(categories);
    setSelectedArea(null);
    setSelectedIngredient(null);
  };

  const handleAreaPress = () => {
    setSelectedCategory(null);
    setSelectedArea(areas);
    setSelectedIngredient(null);
  };

  const handleIngredientPress = () => {
    setSelectedCategory(null);
    setSelectedArea(null);
    setSelectedIngredient(ingredients);
  };

  const renderCategoryButton = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={handleCategoryPress}
    >
      <Text style={styles.buttonText}>Categories</Text>
    </TouchableOpacity>
  );

  const renderAreaButton = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={handleAreaPress}
    >
      <Text style={styles.buttonText}>Areas</Text>
    </TouchableOpacity>
  );

  const renderIngredientButton = () => (
    <TouchableOpacity
      style={styles.button}
      onPress={handleIngredientPress}
    >
      <Text style={styles.buttonText}>Ingredients</Text>
    </TouchableOpacity>
  );

  const renderList = (list) => {
    if (list.length === 0) {
      return null;
    }

    return (
      <ScrollView>
        <View style={styles.listContainer}>
          {list.map((item, index) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => navigation.navigate('Details', { item })}
              key={index}
            >
              <Text style={styles.itemText}>{item.strCategory || item.strArea || item.strIngredient}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
      <TouchableOpacity onPress={handleBackPress}>
          <VectorhomeIcon width={33} height={33} />
        </TouchableOpacity>
      <Text style={styles.header}>Categoria/Area/Ingredient</Text>
      </View>
      <View style={styles.buttonContainer}>
        {renderCategoryButton()}
        {renderAreaButton()}
        {renderIngredientButton()}
      </View>
      {selectedCategory && renderList(selectedCategory)}
      {selectedArea && renderList(selectedArea)}
      {selectedIngredient && renderList(selectedIngredient)}
    </SafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
  },
  containerheader: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 25,
    color: 'white'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems: 'center',
  
    borderRadius: 10,
    width: 360,
    height: 50, 
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3,
    marginTop: 10
  },
  itemContainer: {
    alignItems: 'center',
    width: 360,
    height: 40,
    borderRadius: 15,
    gap: 5,
    backgroundColor: 'green'
  },
  itemText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
});


