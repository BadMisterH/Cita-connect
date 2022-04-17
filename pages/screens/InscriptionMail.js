import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable , SafeAreaView} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function InscriptionMail({navigation}) {

  //insert code

  return (
  
<SafeAreaView style={stylesGlobal.container}>

<View style={stylesGlobal.containerTxt}>

<Text style={stylesGlobal.styleTitle}>Adresse mail *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre email ?</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre email"
></TextInput>
</View>




{/* button contianer */}
<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
>
  <Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
  onPress={() => navigation.navigate('InscriptionName')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 
      
    </SafeAreaView> 
  );
}


// const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 