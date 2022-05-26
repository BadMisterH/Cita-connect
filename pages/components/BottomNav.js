import { View, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Mairie from '../stacks/Mairie'


//screen Stack
import Urgencess from "../stacks/Urgences"
import HomePage from "../screens/HomePage"
import AddNewPost from '../stacks/Posts/AddNewPost';
import Compte from "../components/backend/Compte"



const StackNavigator = createBottomTabNavigator();


export default function BottomNav() {
  return (

    <StackNavigator.Navigator
      tabBarOptions={{
        activeTintColor : "#E2801B",
        inactiveTintColor : "#F9F4F4",
        labelStyle:{paddingBottom : 8, fontSize : 12}
      }}
      initialRouteName="HomePage"
      screenOptions={({route}) => ({

        tabBarStyle : {
            backgroundColor : "#1E3D59",
            height : 63
        },

          tabBarIcon: ({focused, color, size}) => {
              let iconName;
            
              switch(route.name){
                  case "Accueil": 
                  iconName = focused ? 'home' : 'home-outline'
                  break;

                  case "Mairie":
                    iconName = focused ? 'megaphone' : 'megaphone-outline'
                    break;

                  case "Urgences" :
                    iconName = focused ? 'alert' : 'alert-outline'
                    break;

                  case "Posts" : 
                    iconName = focused ? 'add' : 'add-outline'

                //   case "Compte" : 
                //     iconName = focused ? 'accessibility' : 'accessibility-outline'
                  
              }

              return <Ionicons name={iconName} size={size} color={color}/>
          }
      })}
    >

      <StackNavigator.Screen
        name="Accueil"
        component={HomePage}
        options={{
          headerShown : false
        }}
      />

      <StackNavigator.Screen
        name="Mairie"
        component={Mairie}
        options={{
          headerShown : false
        }}
      />


      <StackNavigator.Screen
        name="Urgences"
        component={Urgencess}
        options={{
          headerShown : false

        }}
      />

        <StackNavigator.Screen
        name="Posts"
        component={AddNewPost}
        options={{
          headerShown : false
        }}
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