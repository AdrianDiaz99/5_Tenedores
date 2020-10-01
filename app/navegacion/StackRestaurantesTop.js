import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantesTop from "../screens/RestaurantesTop";

const Stack = createStackNavigator();

export default function StackRestaurantesTop() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top-restaurants"
        component={RestaurantesTop}
        options={{ title: "Top 5" }}
      />
    </Stack.Navigator>
  );
}
