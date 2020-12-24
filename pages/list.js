import React from "react";
import {View,Text, StyleSheet} from "react-native";

export default function List(){
    return(
        <View>
            <Text>List Ready...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})