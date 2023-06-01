import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../assets/icons/Back.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FavoriteCard from './components/FavoriteCard';

const Favorites = () => {

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const {favoriteFoods}= useSelector((state:RootState)=>state.favorite);
  console.log(favoriteFoods)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backicon} onPress={handleBackPress}>
          <BackIcon width={25} height={24} />
        </TouchableOpacity>
        <Text style={styles.favtext}>Favorites</Text>
      </View>
      <ScrollView >
        {favoriteFoods === null || favoriteFoods.length === 0 ? (
          <Text style={styles.noResultsText}>Food not found !</Text>
        ) : (
          favoriteFoods.map((item, index) => (
            <FavoriteCard  key={index}  item={item}/>
          ))
        )}
      </ScrollView>
    </View>
  );
};
export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(8, 18, 51, 0.54)',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    width:'70%'
  
  },
  backicon:{
    marginTop:15
  },

  favtext: {
    fontSize: 34,
    color: '#F8F2F2',
    alignSelf: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 30,
    color: '#F8F2F2',
    fontWeight: '700',
    alignSelf: 'center',
  },
});
