import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackRestaurantes from "../navegacion/StackRestaurantes";
import StackFavoritos from "../navegacion/StackFavoritos";
import StackRestaurantesTop from "../navegacion/StackRestaurantesTop";
import StackBuscador from "../navegacion/StackBuscador";
import StackCuenta from "../navegacion/StackCuenta";

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurantes"
          component={StackRestaurantes}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favoritos"
          component={StackFavoritos}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={StackRestaurantesTop}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="buscador"
          component={StackBuscador}
          options={{ title: "Buscador" }}
        />
        <Tab.Screen
          name="cuenta"
          component={StackCuenta}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
