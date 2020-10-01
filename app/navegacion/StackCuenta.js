import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cuenta from "../screens/Cuenta";

const Stack = createStackNavigator();

export default function StackCuenta() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cuenta"
        component={Cuenta}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}
