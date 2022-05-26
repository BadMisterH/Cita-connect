import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Styles from "../../styles/styles.scss";




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
    <View style={StylesUrgences.Container}>
      <Text style={{fontSize : 30, fontWeight: "bold"}}>Urgences</Text>
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