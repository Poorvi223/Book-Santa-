import React from "react";
import (StyleSheet,Text,View) from "react-native";
import db from "../config";
import firebase from "firebase";

export default class WelcomeScreen extends React.Component{
    render(){
        return(
            <View> 
                <Text> Book Santa App</Text>
            </View>
        )
    }
}