import React from 'react'
import {View, Text} from 'react-native'
import { Connecter, AuthStackScreen } from './pages/components/Navigation'

const AuthNav = () => {
    return <>{currentUser ? <Connecter/> : <AuthStackScreen />}</>
}