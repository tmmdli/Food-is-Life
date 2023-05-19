import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import VectorIcon from './assets/icons/vector.svg';
import IconIcon from './assets/icons/icon.svg';
import KaloriIcon from './assets/icons/kalori.svg';
import SebetIcon from './assets/icons/sebet.svg';
import TimeIcon from './assets/icons/time.svg';

const FoodRecipes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => console.log('')}
        style={{right:70}}>
          <VectorIcon width={28} height={28} />
        </TouchableOpacity>
        <Text style={styles.text}>Banana Pancakes</Text>
        <TouchableOpacity onPress={() => console.log('')}
        style={{left:70}}>
          <IconIcon width={28} height={28} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require('./assets/images/pankek.png')}
          style={styles.pankek}
        />
        <View style={styles.button2}>
        <TouchableOpacity onPress={() => console.log('')}
        >
          <TimeIcon width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('')}
        >
          <SebetIcon width={28} height={28} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('')}
        >
          <KaloriIcon width={28} height={28} />
        </TouchableOpacity>
       
        </View>
      </View>

      <ScrollView>
        
        <View style={styles.button3}>
            
          <Image
            source={require('./assets/images/line.png')}
            style={styles.line}
          />
          <Text style={styles.text1}>Ingredients</Text>
          <Text style={styles.text2}>Directions</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 1,
    flex: 1,
  },
  button: {
    paddingVertical: 20,
    flexDirection: 'row',
   
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  pankek: {

  },
  rectangle: {
    marginTop: 40,
  },
  line: {
    alignSelf: 'center',
    top:20,
  
    
  },
  button2:{
 flexDirection:'row',
 justifyContent:'space-between',
 top: 20,

 
  },
  button3: {
    width: 400,
    height: 500,
    backgroundColor: '#F4E4CD',
    borderRadius: 40,
    marginTop: 30,
  
  },
  text1:{
fontSize: 24,
top:30,
left:40,
fontWeight:'bold',
color:'#000000'
  },
  text2:{
    fontSize: 24,
   top:100,
    left:40,
    fontWeight:'bold',
    color:'#000000',
   
    
      },
});

export default FoodRecipes;

