import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favoritos from "../screens/Favoritos";

const Stack = createStackNavigator();

export default function StackFavoritos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favoritos"
        component={Favoritos}
        options={{ title: "Restaurantes Favoritos" }}
      />
    </Stack.Navigator>
  );
}
