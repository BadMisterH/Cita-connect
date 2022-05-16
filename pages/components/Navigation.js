import "react-native-gesture-handler";
import Connexion from "../screens/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

// import {Provider as PaperProvider} from 'react-native-paper';

// const  {Navigator, Screen } = createStackNavigation();

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen
          options={{
            title: "Connexion",
            headerStyle: {
              backgroundColor: "#FFFEDC",
            },
            headerTintColor: "#1E3D59",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Connexion"
          component={Connexion} />

        </Stack.Navigator>
          
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "red",
  },
});

export default Navigation;
