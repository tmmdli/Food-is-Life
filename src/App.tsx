import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Favorites from './Favorites';
import Categories from './Categories';
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}  >
    <SafeAreaView  style={{flex: 1}}>
      <Favorites />
      {/* <Categories/> */}
    
    
    </SafeAreaView>
    </Provider>
  );
};


export default App;
