import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";


const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require("./assets/bg.jpg")} style={styles.image}>
      <Image
          style={styles.inside}
          source={require("./assets/logo-grey.png")}
      />
      <Image
          style={styles.logo}
          source={require("./assets/logo.png")}
      />
    </ImageBackground>
  </View>
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
    height: "60%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  
  },
  logo: {
    height: "60%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    position: "absolute",
  }
});

export default App;
