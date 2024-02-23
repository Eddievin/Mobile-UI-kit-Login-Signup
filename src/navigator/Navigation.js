import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home.js";
import Detail from "../screens/Details.js";
import Signup from "../screens/Signup.js";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Signup" component={Signup} />
      
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
