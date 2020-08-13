import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";

const App = () => (
  <NavigationContainer>{
    
  }</NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    position: "relative",
    alignItems: "center"
  },
  inside: {
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginHorizontal: 40,
    top: -100
  
  },
  logo: {
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    position: "absolute",
    marginHorizontal: 40,
  }
});

export default App;
