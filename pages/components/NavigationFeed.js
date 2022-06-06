import { AppRegistry } from 'react-native';
import App from './src/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import CreateFeed from '../stacks/Posts/AddPostSystem';
import ListFeed from '../stacks/Posts/AddNewPost';


const Stack = createStackNavigator();


export const NavigationFeed = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={ListFeed} name="Home Screen" />
                <Stack.Screen component={CreateFeed} name="Create Feed" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


AppRegistry.registerComponent(appName, () => Navigation);