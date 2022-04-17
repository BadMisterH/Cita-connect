import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Pressable , SafeAreaView, Button} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function InscriptionMdp({ navigation }) {
  //insert code

  return (
  
<SafeAreaView style={stylesGlobal.container}>
{/* recupérer les donnes dans l'inscription */}


<View style={stylesGlobal.containerMdp}>
<Text style={stylesGlobal.styleTitle}>Mot de passe *</Text>
<Text style={stylesGlobal.styleTxt}>  Creer votre mot de passe </Text>
<TextInput style={stylesGlobal.input}
secureTextEntry={true}
  placeholder="Saisir votre mot de passe"
></TextInput>

<Text style={stylesGlobal.styleTitle}>Confirmation du mot de passe *</Text>
<Text style={stylesGlobal.styleTxt}>Confirmation du mot de passe</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre mot de passe"
  secureTextEntry={true}

></TextInput>

</View>




{/* button contianer */}
<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
//ajout d'une condition pour verifier le champs 
>
  <Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
onPress={() => navigation.navigate('InscriptionMail')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 



    </SafeAreaView> 
  );
}


