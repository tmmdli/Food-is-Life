import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Search from './Search';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
  },
});

