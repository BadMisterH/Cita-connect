import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable , SafeAreaView} from 'react-native';
import stylesGlobal from "../../styles/index.scss";
import {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function InscriptionMail({navigation}) {

  //insert code

  const [MailInput, setMailInput] = useState('');

  const CheckMailInput = (()=>{
    const regEmailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(!MailInput.trim()){
      //si le champsInputMail est vide
      alert("Veuillez saisir une adresse mail");
    }else {
      if(!MailInput.match(regEmailCheck)){
        alert("Veuillez saisir une adresse mail invalide")
      }else{
        navigation.navigate('InscriptionMdp')
      }

    }
    
  })

 

  return (
  
<SafeAreaView style={stylesGlobal.container}>

<View style={stylesGlobal.containerInscription}>

<Text style={stylesGlobal.styleTitle}>Adresse mail *</Text>
<Text style={stylesGlobal.styleTxt}>Quel est votre email ?</Text>
<TextInput style={stylesGlobal.input}
  placeholder="Saisir votre email"
  onChangeText={(value) => setMailInput(value)}
></TextInput>
<View style={stylesGlobal.buttonContainer}>
<Pressable  style={stylesGlobal.buttonSuivant}
  onPress={CheckMailInput}
>
  <Text style={stylesGlobal.colorBtn}>Suivant</Text>
</Pressable>
<Pressable  style={stylesGlobal.buttonRetour}
  onPress={() => navigation.navigate('InscriptionPrenom')}
>
  <Text style={stylesGlobal.colorBtn}>Retour</Text>
</Pressable>    
</View> 
</View>




{/* button contianer */}

      
    </SafeAreaView> 
  );
}


// const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 