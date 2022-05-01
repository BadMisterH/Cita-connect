import 'react-native-gesture-handler';
import Inscription from "../screens/Inscription";
import Connexion from "../screens/Connexion"
import InscriptionPrenom from "../screens/InscriptionFirstName"
import InscriptionMail from "../screens/InscriptionMail"
import InscriptionMdp from "../screens/InscriptionMdp"

import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StyleSheet} from 'react-native';

// import {Provider as PaperProvider} from 'react-native-paper';


// const  {Navigator, Screen } = createStackNavigation();

const Stack = createNativeStackNavigator();

const Navigation = () =>{
return(
<NavigationContainer>
  <Stack.Navigator  style={styles.nav} initialRouteName='Connexion'>
    <Stack.Screen  
    options={{
      title: 'Connexion',
      headerStyle: {
        backgroundColor: '#FFFEDC',
      },
      headerTintColor: '#1E3D59',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    
    name="Connexion" component={Connexion}/>
    <Stack.Screen   options={{
      title: 'Nom',
      headerStyle: {
        backgroundColor: '#FFFEDC',
      },
      headerTintColor: '#1E3D59',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}  name="Inscription" component={Inscription}/>
    <Stack.Screen   options={{
      title: 'Prénom',
      headerStyle: {
        backgroundColor: '#FFFEDC',
      },
      headerTintColor: '#1E3D59',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} name="InscriptionPrenom" component={InscriptionPrenom}/>
    <Stack.Screen   options={{
      title: 'Adresse-mail',
      headerStyle: {
        backgroundColor: '#FFFEDC',
      },
      headerTintColor: '#1E3D59',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} name="InscriptionMail" component={InscriptionMail}/>

<Stack.Screen  options={{
      title: 'Mdp',
      headerStyle: {
        backgroundColor: '#FFFEDC',
      },
      headerTintColor: '#1E3D59',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} name="InscriptionMdp" component={InscriptionMdp}/>

    </Stack.Navigator >
</NavigationContainer>

)
  
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor : "red"
  },

});



export default Navigation;