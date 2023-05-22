import React from "react";
import { SafeAreaView } from 'react-native';
import FoodRecipes from './FoodRecipes'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(8, 18, 51, 0.54)', }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        < FoodRecipes />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
};
export default App;




