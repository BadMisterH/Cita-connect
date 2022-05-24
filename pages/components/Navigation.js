//fichier pour creer les chemin des fichiers pour l'authentification
import "react-native-gesture-handler";
//Page Inscription Connexion
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inscription from "../screens/Inscription";
import Connexion from "../screens/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/HomePage";

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
  <NavigationContainer>

    <AuthentificationStack.Navigator
      initialRouteName="Inscription"
      options={{ headerShown: false }}
    >
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

    </NavigationContainer>
);

export const ConnexionEffectue = () => (
  //Si utilisateur est co
  <NavigationContainer>
    <AuthentificationStack.Navigator
      initialRouteName="HomePage"
      options={{ headerShown: false }}
    >
      {/* si utilisateur co */}

      <AuthentificationStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </AuthentificationStack.Navigator>
  </NavigationContainer>

)


// export default {Deconnexion, ConnexionEffectue};
