import {
    TouchableOpacity,
    Pressable,
    View,
    Text,
    StyleSheet,
    Image, 
  } from "react-native";
  import { firebase } from "../../firebase";
  import Styles from "../../styles/styles.scss";
  
  const DecoClick = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Deconnexion reussie");
    } catch (error) {
      console.log("error");
    }
    return(
      <View style={Styles.Header}>
      <Pressable titleSize={20}>
        <TouchableOpacity onPress={DecoClick}>
          <Image
            style={Styles.Logout}
            source={require("../../assets/img/logo_cita_connect_orange_transparent.png")}
          />
        </TouchableOpacity>
      </Pressable>
    </View>
    )
  };

  export default DecoClick;