import 'react-native-gesture-handler';
import * as React from 'react';
import AuthNav from "./AuthNav";

// import AppliAfficheSignInSignUp from "./pages/stacks/ApplicationAffichages";
// import AuthStackAffichages from './pages/stacks/AuthStackAffichages';
import { NavigationContainer } from "@react-navigation/native";
import ApplicationScreen from './pages/stacks/ApplicationAffichages';

 const App = () => {

  return (
    <NavigationContainer>
        <ApplicationScreen/>
    </NavigationContainer>
  );
};

export default App;