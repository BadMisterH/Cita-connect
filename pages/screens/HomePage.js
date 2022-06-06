import {
  TouchableOpacity,
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
  
} from "react-native";
import { firebase } from "../../firebase";
import Styles from "../../styles/styles.scss"; //utilises du scss si tu veux
import Mairie from "../stacks/Mairie";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";


// const Stack = createStackNavigator();

const DecoClick = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Deconnexion reussie");
  } catch (error) {
    console.log("error");
  }
};

// const StackNavigator = createBottomTabNavigator();

const HomePage = ({navigation}) => {
  return (
    
    <View style={Styles.containerHome}>
      <ScrollView>
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
      <View style={Styles.imageContainer}>
        <Image
          source={require('../../assets/img/massy.png')}
          style={Styles.imageCity}
          />
        <View style={Styles.citytextContainer}>
          <Text style={Styles.cityText}>Bienvenue dans votre ville <Text style={Styles.italic}>(Mairie de Massy)</Text></Text>
        </View>
      </View>
      {/* Liste des boutons */}
      <View style={Styles.buttonList}>
        <TouchableOpacity style={[Styles.buttonContainer, Styles.blueButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/info.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer, Styles.greenButton]} activeOpacity={0.5} onPress={()=>{
          navigation.navigate('Mairie');
        }}>
          <Image
          source={require('../../assets/img/mairie.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Ma Mairie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.orangeButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/referendum.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Référendum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.redButton]} activeOpacity={0.5} onPress={()=>{
          navigation.navigate('Urgences');
        }}>
          <Image
          source={require('../../assets/img/urgence.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Urgences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.aquaButton]} activeOpacity={0.5} onPress={()=>{
          navigation.navigate('FluxGeneral');
        }}>
          <Image
          source={require('../../assets/img/flux.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Flux général</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[Styles.buttonContainer,Styles.yellowButton]} activeOpacity={0.5}>
          <Image
          source={require('../../assets/img/messages.png')}
          style={Styles.ImageIconStyle}
          />
          <Text style={Styles.buttonText}>Messages</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
