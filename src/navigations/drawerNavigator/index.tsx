import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home';
import Search from '../../screens/search';
import Favorites from '../../screens/favorites';
import HomeIcon from '../../assets/icons/home-active.svg';
import HomeBlack from '../../assets/icons/home-black.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import SearchBlack from '../../assets/icons/Search-black.svg';
import HeartIcon from '../../assets/icons/heart-filled.svg';
import HeartBlackIcon from '../../assets/icons/heart-black.svg';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
        drawerType: 'slide',
        drawerActiveBackgroundColor: '#272D2F',
        drawerContentStyle: {
          backgroundColor: '#FE724C',
        },
        drawerItemStyle: {
          borderRadius: 30,
          paddingHorizontal: 10,
        },
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: -15,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) =>
            !focused ? (
              <HomeBlack width={24} height={24} />
            ) : (
              <HomeIcon width={24} height={24} />
            ),
        }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) =>
            !focused ? (
              <SearchBlack width={24} height={24} />
            ) : (
              <SearchIcon width={24} height={24} />
            ),
        }}
        name="Search"
        component={Search}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) =>
            !focused ? (
              <HeartBlackIcon width={24} height={24} />
            ) : (
              <HeartIcon width={24} height={24} />
            ),
        }}
        name="Favorites"
        component={Favorites}
      />
    </Drawer.Navigator>
  );
};
