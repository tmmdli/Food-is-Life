import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RightIcon from '../../../assets/icons/right.svg';
import {useNavigation} from '@react-navigation/native';

export const Filters = ({title, itemKey, item, itemIndex}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {title, key: itemIndex, itemKey})
          }>
          <RightIcon fill="#272D2F" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        style={styles.elementWrap}
        contentContainerStyle={styles.elementContent}
        showsHorizontalScrollIndicator={false}>
        {item.map((elem, index) => (
          <TouchableOpacity
            key={index}
            style={styles.element}
            onPress={() =>
              // navigation.navigate('Details', {title, key: indexKey})
              navigation.navigate({
                name: 'FoodList',
                merge: true,
                params: {
                  title: title + ' / ' + elem[itemKey],
                  key: itemIndex,
                  itemKey: elem[itemKey],
                },
              })
            }>
            <Text style={styles.elementText}>{elem[itemKey]}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 30,
    color: '#272D2F',
  },
  elementWrap: {
    flexDirection: 'row',
    marginTop: 16,
  },
  elementContent: {
    gap: 10,
    paddingHorizontal: 16,
  },
  element: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#FFC529',
  },
  elementText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
