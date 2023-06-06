import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './drawerNavigator';
import SplashScreen from 'react-native-splash-screen';
import Details from '../screens/details';
import FoodRecipes from '../screens/fooddetails';

const Stack = createStackNavigator();

export const Root = () => {
  const onReady = () => {
    SplashScreen.hide();
  };

  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="MainDrawer">
        <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
        <Stack.Screen name="FoodRecipes" component={FoodRecipes} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
