import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, Pressable , SafeAreaView, Button} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Connexion({ navigation }) {

  //insert code

  return (
  
<SafeAreaView style={stylesGlobal.container}>
{/* recupérer les donnes dans l'inscription */}

<Image
        style={stylesGlobal.Img}
        source={require('../../assets/img/logo_cita_connect_orange_transparent.png')}
     />

<View style={stylesGlobal.containerConnexion}>
<Text style={stylesGlobal.styleTitle}>Adresse-mail *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre e-mail ?</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre mail"
></TextInput>
<Text style={stylesGlobal.styleTitle}>Mot de passe *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre mot de passe ?</Text>
<TextInput style={stylesGlobal.input}
secureTextEntry={true}
  type= "password"
  placeholder="Saisir votre mot de passe"
></TextInput>

</View>




{/* button contianer */}
<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
//ajout d'une condition pour verifier le champs 
>
  <Text style={stylesGlobal.colorBtn}>Connexion</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
onPress={() => navigation.navigate('Inscription')}
>
  <Text style={stylesGlobal.colorBtn}>Pas inscrit ?</Text>
</Pressable>    

</View> 



    </SafeAreaView> 
  );
}


