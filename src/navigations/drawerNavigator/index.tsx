import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home';
import Search from '../../screens/search';
<<<<<<< HEAD
import favorites from '../../screens/favorites';
=======
import Favorites from '../../screens/favorites';
>>>>>>> f663a024faa938531b25d9b5c3b2707152145aa9

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
