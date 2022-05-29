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

    <View style={Styles.containerHome}>
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
      <View>
        <Text style={{fontSize : 30, fontWeight: "bold"}}>Accueil</Text>
      </View>
      {/* Liste des boutons */}
      <View style={Styles.buttonList}>
        <TouchableOpacity style={[Styles.buttonContainer, Styles.blueButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/favicon.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer, Styles.greenButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/favicon.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Ma ville</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.orangeButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/favicon.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Référendum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.redButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/favicon.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Urgence</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.aquaButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/favicon.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Flux général</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.yellowButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/favicon.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Messages</Text>
        </TouchableOpacity>
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
