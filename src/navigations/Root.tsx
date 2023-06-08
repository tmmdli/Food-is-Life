import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './drawerNavigator';
import SplashScreen from 'react-native-splash-screen';
import Details from '../screens/details';
import FoodRecipes from '../screens/fooddetails';
import {GetStarted} from '../screens/getStarted';
import {FoodList} from '../screens/foodList';

const Stack = createStackNavigator();

export const Root = () => {
  const onReady = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  };

  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        screenOptions={{header: () => null}}
        initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="MainDrawer" component={DrawerNavigator} />
        <Stack.Screen name="FoodRecipes" component={FoodRecipes} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="FoodList" component={FoodList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
