import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import Styles from "../../styles/styles.scss";
import {Linking} from 'react-native'



export default function Urgences() {

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
      <View style={Styles.HeaderBtnDeconnexion}>
        <Pressable titleSize={20}>
          <TouchableOpacity onPress={DecoClick}>
            <Image
              style={Styles.Logout}
              source={require("../../assets/img/logo_cita_connect_orange_transparent.png")}
            />
          </TouchableOpacity>
        </Pressable>
      </View>

    {/* contenu à remplir Page Urgences LEO*/}
    <View style={StylesUrgences.containerEMS}>
      <Text style={{fontSize : 30, fontWeight: "bold", textAlign: "center" }}>Numéro d'urgences</Text>
      <View style={Styles.buttonList}>
        <TouchableOpacity style={[Styles.emsbuttonContainer, Styles.aquaButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/police.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>Police-Secours</Text>
          <Text style={Styles.emsbuttonText}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer, Styles.redButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/pompier.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>Sapeurs-Pompiers</Text>
          <Text style={Styles.emsbuttonText}>18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer,Styles.greenButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/ambulance.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>SAMU</Text>
          <Text style={Styles.emsbuttonText}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer,Styles.orangeButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/sourd.png')}
          style={Styles.emsImages}
          />
          <Text style={Styles.buttonText}>Numéro d'urgence pour les malentendants</Text>
          <Text style={Styles.emsbuttonText}>114</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.emsbuttonContainer,Styles.blueButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/112UE.png')}
          style={Styles.emsImages}
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