import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodHome from './FoodHome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Search from './Search';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name="Home" component={FoodHome} />
      <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName="FoodHome">
          {/* <Stack.Screen name="FoodHom" component={FoodHome} /> */}
          <Stack.Screen name="FoodHome" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
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
