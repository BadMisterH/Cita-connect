import {
  TouchableOpacity,
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { firebase } from "../../firebase";
import Styles from "../../styles/styles.scss"; //utilises du scss si tu veux

const DecoClick = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Deconnexion reussie");
  } catch (error) {
    console.log("error");
  }
};

// const StackNavigator = createBottomTabNavigator();

const HomePage = () => {
  return (

    <View style={Styles.container}>
          {/* Bouton de deconnexion  */}
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
      <View style={StylesMairie.Container}>
    <Text style={{fontSize : 30, fontWeight: "bold"}}>Accueil</Text>
  </View>
    </View>
  );
};


// Styles CSS de la home Page
const StylesMairie = StyleSheet.create({
  Container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#fffedc"
  }
})

export default HomePage;
