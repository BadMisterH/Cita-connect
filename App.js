import { View, Text, Image } from 'react-native';
import React from 'react';
import Appstyles from './styles/styles.scss';

export default function App() {
  return (
    <View style={Appstyles.logoContainer}>
      <Image
          style={Appstyles.tinyLogo}
          source={require('./assets/img/citaconnect-logo.gif')}
      />
    </View>
  )
}