import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from './navigations/Root';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import FoodRecipes from './screens/fooddetails/index';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <Root />
      
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
    paddingHorizontal: 10,
  },
});
