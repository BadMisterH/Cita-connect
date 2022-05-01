import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable , SafeAreaView} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function InscriptionFirstName({navigation}) {

  //insert code

  const [prenomInput, setPrenomInput] = useState('');

  const CheckInputFirstName = (()=>{
  
    if(!prenomInput.trim()){
      alert("Veuillez saisir un prénom")
    }else if (prenomInput.length < 3){
      alert("Veuillez saisir un prénom (3 caractère minimum)")
    }else{
      navigation.navigate('InscriptionMail')
    }
  })

  return (
  
<SafeAreaView style={stylesGlobal.container}>

<View style={stylesGlobal.containerInscription}>

<Text style={stylesGlobal.styleTitle}>Prénom *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre prénom ?</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre prenom"
  onChangeText={(value) => setPrenomInput(value)} 
  //onChangeText : permet de recuperer la valeur du champs
></TextInput>

<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
onPress={CheckInputFirstName}
>
  <Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
onPress={() => navigation.navigate('Inscription')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 
</View>



{/* button contianer */}

      
    </SafeAreaView> 
  );
}


