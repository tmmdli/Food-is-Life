import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackIcon from '../../assets/icons/Back.svg';

const Details = () => {
  const route = useRoute();
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchData();
  }, [route.params.key]);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?${route.params.key}=list`,
    );
    const data = await response.json();
    setData(data.meals);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getKey = () => {
    if (route.params.title === 'Categories') {
      return 'strCategory';
    } else if (route.params.title === 'Area') {
      return 'strArea';
    } else {
      return 'strIngredient';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <TouchableOpacity onPress={handleBackPress}>
          <BackIcon width={33} height={33} />
        </TouchableOpacity>
        <Text style={styles.header}>{route.params.title}</Text>
      </View>
      <ScrollView>
        <View style={styles.listContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => console.log(item[getKey()])}
            >
              <Text style={styles.itemText}>{item[getKey()]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
  },
  containerheader: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'white',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    alignItems: 'center',
    width: 350,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#2ecc71',
    marginBottom: 10,
  },
  itemText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Details;

