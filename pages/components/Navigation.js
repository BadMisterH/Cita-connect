//fichier pour creer les chemin des fichiers pour l'authentification
import "react-native-gesture-handler";
//Page Inscription Connexion
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inscription from "../screens/Inscription";
import Connexion from "../screens/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/HomePage";
import BottomNav from "./BottomNav"; //HOME PAGE DE L'APPLI
import { SafeAreaView } from "react-native";
import Mairie from "../stacks/Mairie";
import Urgences from "../stacks/Urgences";
import ListesPosts from "../stacks/Posts/ListesPosts"

const AuthentificationStack = createNativeStackNavigator();


//  function Navigation (){
//   return(
//      <AuthentificationStack.Navigator
//       initialRouteName="Inscription"
//       options={{ headerShown: false }}
//     >
//       <AuthentificationStack.Screen
//         name="Inscription"
//         component={Inscription}
//         options={{ headerShown: false }}
//       />
//       <AuthentificationStack.Screen
//         name="Connexion"
//         component={Connexion}
//         options={{ headerShown: false }}
//       />




//     </AuthentificationStack.Navigator>
//   )
// }

// export default Navigation;


export const Deconnexion = () => (
  //si l'utilisateur est pas co

    <AuthentificationStack.Navigator
      initialRouteName="Inscription"
      options={{ headerShown: false }}
    >
      {/* <AuthentificationStack.Screen
        name="Inscription"
        component={Inscription}
        options={{ headerShown: false }}
      /> */}
      <AuthentificationStack.Screen
        name="Connexion"
        component={Connexion}
        options={{ headerShown: false }}
      />
    </AuthentificationStack.Navigator>
);

export const ConnexionEffectue = () => (
  //Si utilisateur est co
    <AuthentificationStack.Navigator
      initialRouteName="HomePage"
      options={{ headerShown: false }}
    >
      {/* si utilisateur co */}

      <AuthentificationStack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{ headerShown: false }}
      />

      <AuthentificationStack.Screen
        name="Mairie"
        component={Mairie}
        options={{ headerShown: true, headerStyle : {
          backgroundColor : "#FFFEDC"
        } }}
      />

      <AuthentificationStack.Screen
        name="Urgences"
        component={Urgences}
        options={{ headerShown: true, headerStyle : {
          backgroundColor : "#FFFEDC"
        } }}

      />

      <AuthentificationStack.Screen
        name="Flux General"
        component={ListesPosts}
        options={{ headerShown: true, headerStyle : {
          backgroundColor : "#FFFEDC"
        } }}

      />

    </AuthentificationStack.Navigator>
)


// export default {Deconnexion, ConnexionEffectue};