import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const AppButton = ({style, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default AppButton;

// const style = StyleSheet.create({
//   button: {
//     width: 50,
//     height: 50,
//      backgroundColor: 'white',
//      justifyContent: 'center',
//     alignItems: 'center',
//   },
// });