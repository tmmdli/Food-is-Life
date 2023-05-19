import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityComponent, View } from "react-native";
import VectorIcon from './assets/icons/vector.svg';
import IconIcon from './assets/icons/icon.svg';
import KaloriIcon from './assets/icons/kalori.svg';
import SebetIcon from './assets/icons/sebet.svg';
import TimeIcon from './assets/icons/time.svg';

const FoodRecipes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => console.log('')}
          style={{ right: 70 }}>
          <VectorIcon width={28} height={28} />
        </TouchableOpacity>
        <Text style={styles.recipestext}>Banana Pancakes</Text>
        <TouchableOpacity onPress={() => console.log('')}
          style={{ left: 70 }}>
          <IconIcon width={28} height={28} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('./assets/images/pankek.png')}
          style={styles.pankek}
        />
        <View style={styles.button2}>
          <TouchableOpacity onPress={() => console.log('')}
          >
            <TimeIcon width={28} height={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('')}
          >
            <SebetIcon width={28} height={28} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('')}
          >
            <KaloriIcon width={28} height={28} />
          </TouchableOpacity>

        </View>
      </View>

      <ScrollView>

        <TouchableOpacity style={styles.recipesscreen}>
          <Image
            source={require('./assets/images/line.png')}
            style={styles.line}
          />
          <Text style={styles.ingtext}>Ingredients</Text>
          <Text style={styles.ingredients} />
          <Text style={styles.directext}>Directions</Text>
          <Text style={styles.directions}></Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 1,
    flex: 1,
  },
  button: {
    paddingVertical: 20,
    flexDirection: 'row',
  },
  recipestext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  pankek: {
  },
  rectangle: {
    marginTop: 40,
  },
  line: {
    alignSelf: 'center',
    marginTop: 15,
  },
  button2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  recipesscreen: {
    width: 428,
    height: 562,
    backgroundColor: '#F4E4CD',
    borderRadius: 50,
    marginTop: 30,
    right:17,
  },
  ingtext: {
    fontSize: 24,
    marginTop: 25,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft:20,
  },
  ingredients: {
    borderWidth: 1,
    height: 150,
    width: 300,
    alignSelf: 'center'
  },
  directext: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft:20,
  },
  directions: {
    borderWidth: 1,
    height: 150,
    width: 300,
    alignSelf: 'center'
  },
});

export default FoodRecipes;

