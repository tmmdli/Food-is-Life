import React from "react";
import { SafeAreaView, StyleSheet, View,Text,TouchableOpacity } from "react-native";

const Indregidiens = () => {
    return (
       <SafeAreaView style={styles.container}>
        <View>
                <View>
                <Text style={styles.textCatagories}>Categories / FastFood</Text>
                </View>
               <View>
                <TouchableOpacity style={styles.button}>

                </TouchableOpacity>
               </View>
        </View>

       </SafeAreaView>
    )
}

export default Indregidiens;

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(8, 18, 51, 0.54)'
    },
    textCatagories:{
        color:'#F8F2F2',
        fontSize:24,
        fontWeight:'700',
        alignSelf:'center'
    },
   button:{
    backgroundColor:'#F4E4CD',
    width:332,
    height:160
   }
})