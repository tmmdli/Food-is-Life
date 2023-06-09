import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';

type Props = {
  style: ViewStyle;
  icon: any;
  onPress: () => void;
};
const AppButton = ({icon, onPress}: Props) => {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
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
