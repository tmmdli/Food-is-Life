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

const Favorites = () => {

  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backicon} onPress={handleBackPress}>
          <BackIcon width={25} height={24} />
        </TouchableOpacity>
        <Text style={styles.favtext}>Favorites</Text>
      </View>
      <ScrollView>
        <View />
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
    fontSize: 40,
    color: '#F8F2F2',
    alignSelf: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
