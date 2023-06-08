import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import GetStartedImage from '../../assets/images/get-started-image.svg';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.infoContainer}>
        <GetStartedImage width={400} height={400} />
        <Text style={styles.title}>Find your {'\n'} favorite recipes</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>
          Just tell us what ingredients do you have and we will show you what
          can you make.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.button}
        onPress={() => navigation.navigate('MainDrawer')}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE724C',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 55,
    lineHeight: 55,
    fontFamily: 'DancingScript-Bold',
  },
  description: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  separator: {
    backgroundColor: 'white',
    height: 2,
    marginVertical: 18,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#272D2F',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
