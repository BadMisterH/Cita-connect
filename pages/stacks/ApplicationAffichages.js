import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//page contenant toute la navigation pour l'inscription et la connexion d'hestia
// import AuthStackAffichages from "./AuthStackAffichages";
import { NavigationContainer } from "@react-navigation/native";
import Inscription from "../screens/Inscription";
import Navigation from "../components/Navigation"
import Nav from "./AutoNav";

//tu importes les différentes screens connexion inscription sur cette page.
//sign up : s'inscrire
//sign in : s'identifier

export default function ApplicationScreen() {
  const AppStack = createNativeStackNavigator();

  return (
      <AppStack.Navigator initialRouteName="Nav">
        <AppStack.Screen
          name="Affichages"
          component={Navigation} // montrer le chemins pour afficher les fichier pour le systeme d'authentification
          options={{headerShown: false}}
          //permet de caché l'entete de header stack navigation
        />
      </AppStack.Navigator>
  );
}

{
  /* on a mis dans ce fichier le fichier comportenant les liens menant vers Inscription/Connexion */
}
