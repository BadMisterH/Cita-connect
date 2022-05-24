import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Pressable, View, Text, StyleSheet, Image } from "react-native";
import {firebase} from "../../firebase";
import Styles from "../../styles/styles.scss"
import Mairie from "../stacks/Mairie";

const AuthentificationStack = createBottomTabNavigator();

const DecoClick = async () => {
  try{
    await firebase.auth().signOut();
    console.log("Deconnexion reussie")
  }catch(error){
    console.log("error")
  }
}


const HomePage = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.Header}>
       <Pressable titleSize={20}>
                <TouchableOpacity onPress={DecoClick}>
                <Image
            style={Styles.Logout}
            source={require("../../assets/img/IconLogout.png")}
                      />
                </TouchableOpacity>
              </Pressable>
      </View>
    </View>
  );
}

const NavBottom = () => {
 return(
   <NavigationContainer>
     <AuthentificationStack.Navigator>
       <AuthentificationStack.Navigator name="Mairie" component={Mairie}></AuthentificationStack.Navigator>
     </AuthentificationStack.Navigator>
     </NavigationContainer>

 )
}

export default HomePage;