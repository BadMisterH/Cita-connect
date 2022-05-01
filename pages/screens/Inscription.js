import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable , SafeAreaView, } from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import React from "react";
import {useState} from "react";
import {useForm} from 'react-hook-form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {InscriptionMdp} from "./InscriptionMdp";

export default function Inscription({ navigation }) {

  //insert code
  
  const [PrenomInputName, setPrenomInputName] = useState('');
  //setTextInputName permet la nouvelle valeur de textInput qu'on verifie
 
  const checkTextInput = () => {
    //Check for the Name TextInput
    if(!PrenomInputName.trim()){
      alert("Veuillez saisir un nom")
    }else if (PrenomInputName.length < 3){
      alert("Veuillez saisir un nom 3 caractère minimum")
    }else{
      navigation.navigate('InscriptionMail')
    }
   
  };




  // const validationSchemaInputName = Yup.object({
  //   email : Yup.string().required("Veuillez saisir votre nom").required('Veuillez saisir un nom')
  // }).required();

  // const {control, handleSubmitn formState : {errors}} = 
  // useForm({
  //   resolver: yupResolver(validationSchema),
  // })


return (
  
<SafeAreaView style={stylesGlobal.container}>

<View style={stylesGlobal.containerInscription}>

<Text style={stylesGlobal.styleTitle}>Nom *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre nom ?</Text>

<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre nom"
  onChangeText={(value) => setPrenomInputName(value)}
></TextInput>


<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
//ajout d'une condition pour verifier le champs 
//btnsuivant 

onPress={
checkTextInput

}
>
<Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
//btnretour
onPress={() => navigation.navigate('Connexion')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 


</View>



{/* button contianer */}

      

</SafeAreaView> 
  );
}


