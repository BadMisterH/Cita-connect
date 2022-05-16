import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//page contenant l'inscription et la connexion d'hestia
import AuthStackAffichages from "./AuthStackAffichages";

//tu importes les différentes screens connexion inscription sur cette page.
//sign up : s'inscrire
//sign in : s'identifier

export default function ApplicationScreen() {
  const AppStack = createNativeStackNavigator();

  return (
      <AppStack.Navigator initialRouteName="Landing">
        <AppStack.Screen
          name="AuthStackAffichages"
          component={AuthStackAffichages} // montrer le chemins pour afficher les fichier pour le systeme d'authentification
          options={{headerShown: false}}
          //permet de caché l'entete de header stack navigation
        />
      </AppStack.Navigator>
  );
}

{
  /* on a mis dans ce fichier le fichier comportenant les liens menant vers Inscription/Connexion */
}
