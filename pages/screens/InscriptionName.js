import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable , SafeAreaView} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function InscriptionName({navigation}) {

  //insert code

  return (
  
<SafeAreaView style={stylesGlobal.container}>

<View style={stylesGlobal.containerTxt}>

<Text style={stylesGlobal.styleTitle}>Prénom *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre prénom ?</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre prenom"
></TextInput>
</View>



{/* button contianer */}
<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
onPress={() => navigation.navigate('InscriptionMail')}
>
  <Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
onPress={() => navigation.navigate('Inscription')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 
      
    </SafeAreaView> 
  );
}


