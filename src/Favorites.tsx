import React from "react"; 
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from './assets/icons/back.svg' 
const Favorites = () => { 
    return ( 
        <View style={styles.container} > 
            <View style={styles.header}> 
            <Text style={styles.favtext}>Favorites</Text> 
                <TouchableOpacity onPress={()=>console.log('')} >
               <BackIcon width={25} height={24}/> 
               </TouchableOpacity> 
                </View>
        
            <ScrollView> 
                <View > 
 
                </View> 
            </ScrollView> 
        </View> 
    ); 
}; 
export default Favorites;
 
const styles = StyleSheet.create({ 
 
    container: { 
        backgroundColor: 'rgba(8, 18, 51, 0.54)', 
        flex: 1 
    }, 
    header:{
        flexDirection:'column-reverse',
        marginLeft:20,
        marginTop:25
    },

    favtext: { 
        fontSize: 40, 
        color: '#F8F2F2', 
        alignSelf: 'center', 
        fontWeight: 'bold' ,
        alignItems:'center'
    
    } 
 
})
