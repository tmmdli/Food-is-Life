import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import NoteIcon from '../../../assets/icons/Note.svg';
import UnnoteIcon from '../../../assets/icons/Unnote.svg';
import {mealFormatter} from '../../../utils/helpers/mealFormatter';
import {useNavigation} from '@react-navigation/native';

const FavoriteCard = ({item, disabled, onAddFavori, onDeleteFavori}) => {
  const navigation = useNavigation();

  const onPress = () => {
    disabled ? onDeleteFavori(item) : onAddFavori(item);
  };

  return (
    <View style={styles.titlecontainer}>
      <TouchableOpacity
        style={styles.downbutton}
        onPress={() =>
          navigation.navigate('FoodRecipes', {idMeal: item.idMeal})
        }>
        <Image style={styles.image} source={{uri: item.strMealThumb}} />
        <Text style={styles.foodtext}>{mealFormatter(item.strMeal)}</Text>
      </TouchableOpacity>
      {onAddFavori && onDeleteFavori && (
        <TouchableOpacity style={styles.noteicon} onPress={onPress}>
          {disabled ? (
            <UnnoteIcon width={40} height={35} />
          ) : (
            <NoteIcon width={40} height={35} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(8 ,18 , 51,  0.54)',
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F4E4CD',
    alignSelf: 'center',
  },

  downbutton: {
    width: 340,
    height: 150,
    backgroundColor: '#F4E4CD',
    borderRadius: 20,
  },
  titlecontainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  foodtext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  noteicon: {
    position: 'absolute',
    right: 40,
    top: 12,
  },
});
