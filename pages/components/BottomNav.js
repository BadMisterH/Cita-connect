import { View, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 


//screen Stack
import Urgencess from "../stacks/Urgences"
import HomePage from "../screens/HomePage"
import ListesPosts from '../stacks/Posts/ListesPosts';
import Compte from "../components/backend/Compte"
import { SafeAreaView } from 'react-native-safe-area-context';



const StackNavigator = createBottomTabNavigator();


export default function BottomNav() {
  return (

    <StackNavigator.Navigator
      tabBarOptions={{
        activeTintColor : "#E2801B",
        inactiveTintColor : "#F9F4F4",
        labelStyle:{paddingBottom : 8, fontSize : 12,}
      }}
      initialRouteName="HomePage"
      screenOptions={ ({route}) => ({

        tabBarStyle : {
            backgroundColor : "#1E3D59",
            height : 70,
            paddingLeft : 34,
            paddingRight : 34,
        },

          tabBarIcon: ({focused, color, size}) => {
              let iconName;
            
              switch(route.name){
                  case "Accueil": 
                  iconName = focused ? 'home' : 'home-outline'
                  break;

                  case "Compte":
                    iconName = focused ? 'person-add' : 'person-add-outline'
                    break;

                  case "Publier" :
                    iconName = focused ? 'add' : 'add-outline'
                    break;

                  case "Notifs" : 
                    iconName = focused ? 'notifications' : 'notifications-outline'



                //   case "Compte" : 
                //     iconName = focused ? 'accessibility' : 'accessibility-outline'
                  
              }

              return <Ionicons name={iconName} size={size} color={color}/>
          },
      })
    
    }
    >

      <StackNavigator.Screen
        name="Accueil"
        component={HomePage}
        options={{
          headerShown : false
        }}
      />

      <StackNavigator.Screen
        name="Compte"
        component={Compte}
        options={{
          headerShown : false
        }}
      />


      <StackNavigator.Screen
        name="Publier"
        component={ListesPosts}
        options={{
          headerShown : false

        }}
      />

        <StackNavigator.Screen
        name="Notifs"
        component={ListesPosts}
        options={{ headerShown: true, headerStyle : {
          backgroundColor : "#FFFEDC"
        } }}
      />

       {/* <StackNavigator.Screen
        name="Compte"
        component={Compte}
        options={{
          headerShown : false
        }}
      /> */}




    </StackNavigator.Navigator>
  )
}