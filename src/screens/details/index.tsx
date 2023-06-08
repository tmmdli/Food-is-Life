import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackIcon from '../../assets/icons/back-white.svg';
import CakeImage from '../../assets/images/cake.svg';

const Details = () => {
  const route = useRoute();
  const [data, setData] = useState([]);

  const navigation = useNavigation();
  console.log(route);
  useEffect(() => {
    fetchData();
  }, [route.params.key]);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?${route.params.key}=list`,
    );
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData.meals);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.75} onPress={handleBackPress}>
          <BackIcon width={36} height={36} />
        </TouchableOpacity>
        <Text style={styles.title}>{route.params.title}</Text>
      </View>
      <ScrollView style={{zIndex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.listContainer}>
          {data.map((elem, index) => (
            <TouchableOpacity
              key={index}
              style={styles.element}
              onPress={() =>
                navigation.navigate({
                  name: 'FoodList',
                  merge: true,
                  params: {
                    title:
                      route.params.title + ' / ' + elem[route.params.itemKey],
                    key: route.params.key,
                    itemKey: elem[route.params.itemKey],
                  },
                })
              }>
              <Text style={styles.elementText}>
                {elem[route.params.itemKey]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.backgroundImage}>
        <CakeImage />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE724C',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  element: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#F2F2F2',
    zIndex: 1,
  },
  elementText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#272D2F',
  },
  title: {
    fontSize: 30,
    fontFamily: 'DancingScript-Bold',
    marginLeft: 15,
    color: '#F2F2F2',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 360,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 34,
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 1,
    gap: 10,
  },
  itemContainer: {
    alignItems: 'center',
    width: 350,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F4E4CD',
    marginBottom: 10,
  },
  itemText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: -400,
    top: 0,
    left: 0,
    right: 0,
  },
});

export default Details;
