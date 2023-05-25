import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from './navigations/Root';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Root />
    </SafeAreaProvider>
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
