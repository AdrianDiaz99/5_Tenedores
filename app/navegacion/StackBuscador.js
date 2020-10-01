import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Buscador from "../screens/Buscador";

const Stack = createStackNavigator();

export default function StackBuscador() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="buscador"
        component={Buscador}
        options={{ title: "Buscador" }}
      />
    </Stack.Navigator>
  );
}
