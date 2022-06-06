import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import Styles from "../../../styles/styles.scss";
import Ionicons from "react-native-vector-icons/Ionicons"
import { firebase } from '../../../firebase';

export default function Compte() {
  const DecoClick = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Deconnexion reussie");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <View style={Styles.containerLogout}>
     <Pressable titleSize={20} >
          <TouchableOpacity onPress={DecoClick}>
          <Ionicons name="enter-outline" size={50} color="#73788B" />
          <Text style={{color : "#1E3D59", fontWeight : "bold"}}>DECONNEXION</Text>
          </TouchableOpacity>
        </Pressable>
    </View>
  )
}