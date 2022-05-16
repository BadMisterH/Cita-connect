//fichier pour creer les chemin des fichiers pour l'authentification

import "react-native-gesture-handler";
//Page Inscription Connexion
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inscription from "../screens/Inscription";
import Connexion from "../screens/Connexion";
// import { NavigationContainer } from "@react-navigation/native";

export default function AuthStackScreen() {
  const AuthentificationStack = createNativeStackNavigator();
  return (
    <AuthentificationStack.Navigator initialRouteName="Landing">
      <AuthentificationStack.Screen
        name="Inscription"
        component={Inscription}
        options={{ headerShown: false }}
      />
      <AuthentificationStack.Screen
        name="Connexion"
        component={Connexion}
        options={{ headerShown: false }}
      />
    </AuthentificationStack.Navigator>
  );
}
