import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable , SafeAreaView} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Inscription({ navigation }) {

  //insert code

  return (
  
<SafeAreaView style={stylesGlobal.container}>

<View style={stylesGlobal.containerTxt}>

<Text style={stylesGlobal.styleTitle}>Nom *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre nom ?</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre nom"
></TextInput>

</View>



{/* button contianer */}
<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
//ajout d'une condition pour verifier le champs 
onPress={() => navigation.navigate('InscriptionName')}
>
  <Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}

onPress={() => navigation.navigate('Connexion')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 
      
    </SafeAreaView> 
  );
}


