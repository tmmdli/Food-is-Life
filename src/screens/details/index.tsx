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
import NextIcon from '../../assets/icons/Next.svg';

const Details = () => {
  const route = useRoute();
  console.log(route);
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
    console.log(data);
    setData(data.meals);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const getKey = () => {
    switch (route.params.title) {
      case 'Categories':
        return 'strCategory';
      case 'Area':
        return 'strArea';
      default:
        return 'strIngredient';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <TouchableOpacity onPress={handleBackPress}>
          <NextIcon width={33} height={33} />
        </TouchableOpacity>
        <Text style={styles.header}>{route.params.title}</Text>
      </View>
      <ScrollView>
        {data.map(item => (
          <Text>{item[getKey()]}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Details;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
  },
  containerheader: {
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 25,
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
    gap: 3,
    marginTop: 10,
  },
  itemContainer: {
    alignItems: 'center',
    width: 360,
    height: 40,
    borderRadius: 15,
    gap: 5,
    backgroundColor: 'green',
  },
  itemText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
