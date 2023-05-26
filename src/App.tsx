import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FoodRecipes from './FoodRecipes';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        < FoodRecipes />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8, 18, 51, 0.54)'
  },
  title: {
    flex: 1,
  },
});

export default App;
