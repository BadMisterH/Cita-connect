import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import Styles from "../../styles/styles.scss";


export default function Mairie() {

  const DecoClick = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Deconnexion reussie");
    } catch (error) {
      console.log("error");
    }
  };
  
  return (
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

    {/* contenu à remplir Page Mairire LEO*/}
  <View style={Styles.Container}>
    <Image
      style={Styles.cityImage}
      source={require("../../assets/img/massy.png")}
    />
    <View style={Styles.citypageText}>
      <Text style={Styles.citypagetextTitle}>INFORMATIONS</Text>
      <Text style={Styles.citypagetextInfo}>1 Av. du Général de Gaulle, 91300 Massy</Text>
      <Text style={Styles.citypagetextInfo}>01 60 13 30 00</Text>
      <Text style={[Styles.citypagetextInfo,Styles.underline]} onPress={() => Linking.openURL('https://www.ville-massy.fr/')}>
      ville-massy.fr</Text>
    </View>
    <View style={Styles.citypageText}>
      <Text style={Styles.citypagetextTitle}>HORAIRES D’OUVERTURES</Text>
      <Text style={Styles.citypagetextInfo}>Lundi   08:30–12:00, 13:30–18:00</Text>
      <Text style={Styles.citypagetextInfo}>Mardi   08:30–12:00, 13:30–18:00</Text>
      <Text style={Styles.citypagetextInfo}>Mercredi   08:30–12:00, 13:30–18:00</Text>
      <Text style={Styles.citypagetextInfo}>Jeudi   08:30–12:00, 13:30–18:00</Text>
      <Text style={Styles.citypagetextInfo}>Vendredi   08:30–12:00, 13:30–18:00</Text>
      <Text style={Styles.citypagetextInfo}>Samedi   09:30–12:00</Text>
    </View>
  </View>
    
  </View>
  )
}


const StylesMairie = StyleSheet.create({
    Container : {
      flex : 1,
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#fffedc"
    }
  })