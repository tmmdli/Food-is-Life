import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home';
import Search from '../../screens/search';
import Favorites from '../../screens/favorites';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};
