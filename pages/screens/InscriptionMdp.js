import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  Button,
} from "react-native";
import {useState} from "react";
import stylesGlobal from "../../styles/index.scss";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Connexion} from "./Connexion";
import {Inscription} from "./Inscription";


export default function InscriptionMdp({navigation}) {
  //insert code

  const [mdp, setmdp] = useState('');
  const [ConfirmMdp, setConfirmMdp] = useState('');

  const CheckMdpAndConfirmMdp = (()=>{

    //si le champs est vide
    if(!mdp.trim()){
      alert("Veuillez saisir votre mot de passe");
    }else if(!ConfirmMdp.trim()){
      alert("Confirmer votre mot de passe");
    }else{

      if(mdp.length >= 5 && ConfirmMdp.length >= 5){
        if(mdp === ConfirmMdp){

          
          // navigation.navigate('Connexion')
          // a revoir
          // console.log(FirstName);
          //props ?
          console.log(mdp);
          //import de toutes les valeurs saisie sur les champs pour la mettre sur notre base de donnée



         }else{
           alert("mdp et confirmMdp pas identique")
      }
      }else{
        alert("Votre mot de passe n'est pas assez securisé")
      }
      
    }
  })

  return (
    <SafeAreaView style={stylesGlobal.container}>
      {/* recupérer les donnes dans l'inscription */}

      <View style={stylesGlobal.containerMdp}>
        <Text style={stylesGlobal.styleTitle}>Mot de passe *</Text>
        <Text style={stylesGlobal.styleTxt}> Creer votre mot de passe </Text>
        <TextInput
          style={stylesGlobal.input}
          secureTextEntry={true}
          placeholder="Saisir votre mot de passe"
          onChangeText={(value)=> setmdp(value)}
        ></TextInput>

        <Text style={stylesGlobal.styleTitle}>
          Confirmation du mot de passe *
        </Text>
        <Text style={stylesGlobal.styleTxt}>Confirmation du mot de passe</Text>
        <TextInput
          style={stylesGlobal.input}
          placeholder="Confirmer votre mot de passe"
          onChangeText={(value)=> setConfirmMdp(value)}
          secureTextEntry={true}
        ></TextInput>

        <View style={stylesGlobal.buttonContainer}>
          <Pressable
            style={stylesGlobal.buttonSuivant}
            //ajout d'une condition pour verifier le champs
            onPress={CheckMdpAndConfirmMdp}
          >
            <Text style={stylesGlobal.colorBtn}>Suivant</Text>
          </Pressable>
          <Pressable
            style={stylesGlobal.buttonRetour}
            onPress={() => navigation.navigate("InscriptionMail")}
          >
            <Text style={stylesGlobal.colorBtn}>Retour</Text>
          </Pressable>
        </View>
      </View>

      {/* button contianer */}
    </SafeAreaView>
  );
}


export default function eren({}) {

  return (
    
  <>
  </>
  )

}
