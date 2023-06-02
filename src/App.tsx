import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Indregidiens from "./Indregidiens";

const App = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Indregidiens/>

        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(8, 18, 51, 0.54)'
    },
})