import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Details from './Details'
const App =() => {
    return(
    <SafeAreaView>
        <Details/>
    </SafeAreaView>
    )
}
export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#343743',
        paddingHorizontal:10
    }
})

