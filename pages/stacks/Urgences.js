import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Styles from "../../styles/styles.scss";
import {Linking} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';



export default function Urgences() {

  const Tel = () =>{
    let phoneNumber = `telprompt:${phone}`;
    return Linking.openURL(phoneNumber);
  }

    const DecoClick = async () => {
        try {
          await firebase.auth().signOut();
          console.log("Deconnexion reussie");
        } catch (error) {
          console.log("error");
        }
      };


  return (
      //Deconnexion Button
    <View style={Styles.container}>
    {/* contenu à remplir Page Urgences LEO*/}
    <View style={StylesUrgences.containerEMS}>
      <Text style={{fontSize : 30, fontWeight: "bold", textAlign: "center", marginTop : 10, marginBottom : 10, color : "#1E3D59" }}>Numéro d'urgences</Text>
      <View style={Styles.buttonList}>
        <TouchableOpacity style={[Styles.emsbuttonContainer, Styles.aquaButton]} activeOpacity={0.5}
          onPress={()=>{Linking.openURL('tel:17');}}
        >
          <Image
          source={require('../../assets/img/police.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>Police-Secours</Text>
          <Text style={Styles.emsbuttonText}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer, Styles.redButton]} activeOpacity={0.5} 
          onPress={()=>{Linking.openURL('tel:18');}}
        >
          <Image
          source={require('../../assets/img/pompier.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>Sapeurs-Pompiers</Text>
          <Text style={Styles.emsbuttonText}>18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer,Styles.greenButton]} activeOpacity={0.5} 
         onPress={()=>{Linking.openURL('tel:15');}}
        >
          <Image
          source={require('../../assets/img/ambulance.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>SAMU</Text>
          <Text style={Styles.emsbuttonText}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer,Styles.orangeButton]} activeOpacity={0.5} 
          onPress={()=>{Linking.openURL('tel:114');}}
        >
          <Image
          source={require('../../assets/img/sourd.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>Numéro d'urgence pour les malentendants</Text>
          <Text style={Styles.emsbuttonText}>114</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer,Styles.blueButton]} activeOpacity={0.5}
        onPress={()=>{Linking.openURL('tel:112');}}

        >
          <Image
          source={require('../../assets/img/112UE.png')}
          style={Styles.emsImagesOfficiel}
          />
          <Text style={Styles.buttonText}>Appel d'urgence européen</Text>
          <Text style={Styles.emsbuttonText}>112</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    </View>
  )
}


const StylesUrgences = StyleSheet.create({
    Container : {
      flex : 1,
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#fffedc",
    }
  })