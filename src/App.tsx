import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Favorites from './Favorites';
import Categories from './Categories';

const App = () => {
  return (
    <SafeAreaView  style={{flex: 1}}>
      <Favorites />
      {/* <Categories/> */}
    
    
    </SafeAreaView>
  );
};


export default App;
