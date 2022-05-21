//fichier pour creer les chemin des fichiers pour l'authentification
import 'react-native-gesture-handler';
//Page Inscription Connexion
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inscription from "../screens/Inscription";
import Connexion from "../screens/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import Connnexion from '../screens/Connexion';
import HomePage from '../screens/HomePage';

export default function AuthStackScreen() { //deconnexion
  const AuthentificationStack = createNativeStackNavigator();
  return (

      <AuthentificationStack.Navigator initialRouteName="Auth" options={{ headerShown: false }}>

{/* si utilisateur co */}
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


{<AuthentificationStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    }

{/* 
        <AuthentificationStack.Screen
          name = "HomePage"
          component={HomePage}
          options={{headerShown: false}}
        /> */}
      </AuthentificationStack.Navigator>

  );
}

export const Connecter = () => {


  <AuthentificationStack.Navigator initialRouteName="Home" options={{ headerShown: false }}>

      {<AuthentificationStack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
    }
    </AuthentificationStack.Navigator>

}
