// <<<<<<< HEAD
import "react-native-gesture-handler";
import * as React from "react";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);
// import AppliAfficheSignInSignUp from "./pages/stacks/ApplicationAffichages";
// import AuthStackAffichages from './pages/stacks/AuthStackAffichages';
// import { NavigationContainer } from "@react-navigation/native";
// import ApplicationScreen from './pages/stacks/ApplicationAffichages';
// import Inscription from './pages/screens/Inscription';
import AutoNav from "./AutoNav"; 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LottieView from "lottie-react-native";
// import BottomNav from "./pages/components/BottomNav";
// import Navigation from "./pages/components/"
import { Text, View, Image, StyleSheet } from "react-native";
// import Styles from "../../styles/styles.scss"
// import Connnexion from './pages/screens/Connexion'
import HomePage from "./pages/screens/HomePage";
import BottomNav from "./pages/components/BottomNav";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreenLoading = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('AutoNav')
  }, 6000);
  return (
    <View style={Styleez.LogoLoader}>
      <Image style={{height : 300, width : 300}}  source={require("./assets/img/test_anim_cita_2.gif")} />
    </View>
  );


};

const Styleez = StyleSheet.create({
  LogoLoader : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#fffedc"
  }
})


const App = () => {

  const StackNavigator = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName="SplashScreenLoading"
        options={{ headerShown: false }}
        >
          <StackNavigator.Screen
            name="SplashScreenLoading"
            component={SplashScreenLoading}
            options={{ headerShown: false }}
          />

            <StackNavigator.Screen
            name="AutoNav"
            component={AutoNav}
            options={{ headerShown: false }}
          />
        </StackNavigator.Navigator>
      </NavigationContainer>
  );
};

export default App;



// =======
// import 'react-native-gesture-handler';
// import * as React from 'react';
// // import AppliAfficheSignInSignUp from "./pages/stacks/ApplicationAffichages";
// import AuthStackAffichages from './pages/stacks/AuthStackAffichages';
// import { NavigationContainer } from "@react-navigation/native";
// import ApplicationScreen from './pages/stacks/ApplicationAffichages';

//  const App = () => {

//   return (
//     <NavigationContainer>
//         <ApplicationScreen/>
//     </NavigationContainer>
//   );
// };

// export default App;
// >>>>>>> 2a7c6a124f7de1d58a982f1a7544b007c134c414
