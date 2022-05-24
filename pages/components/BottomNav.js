import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Mairie from '../stacks/Mairie';


function NewPage (){
    return(
        <View>
            <Text>Eren</Text>
        </View>
    )
}

export default function BottomNav() {

    const tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
     <tab.Navigator>
       <tab.Navigator name="Mairie" component={Mairie}></tab.Navigator>
       <tab.Navigator name="NewPage" component={NewPage}></tab.Navigator>
     </tab.Navigator>
     </NavigationContainer>
  )
}