import React, { } from "react";
import { StyleSheet,Text,TouchableOpacity, View } from "react-native";
const apiUrl = 'hppt://www.themealdb.com/api/json/v1/1/list.php?a=';
const Details = () => {
    return(
     <View style={styles.container}>
     <View>
     <Text style={styles.textArea}>Area</Text>
     </View> 
     <View>
     <TouchableOpacity style={styles.button} />
     </View>
     </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#343743',
        paddingHorizontal:10
    },
    textArea:{
        color:'#F8F2F2',
        fontSize:24,
        fontWeight:'700',
        textAlign:'center',
        marginBottom:10
    },
    button:{
        width:'100%',
        height:50,
        backgroundColor:'#F4E4CD',
        borderRadius:10,
        marginTop:10,
        justifyContent:"center"
    },
})