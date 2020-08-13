import 'react-native-gesture-handler';
import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './DetailsScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("./assets/bg.jpg")} style={styles.image}>
          
          <Image
              style={styles.inside}
              source={require("./assets/logo.png")}
              onPress={() => {
                return navigation.navigate('Details');
              }}
          />
           <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
          />
        </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
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

