import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './drawerNavigator';
import SplashScreen from 'react-native-splash-screen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
