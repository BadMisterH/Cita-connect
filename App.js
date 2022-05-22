import { View, Text, Image } from 'react-native';
import React from 'react';
import Appstyles from './styles/styles.scss';

export default function App() {
  return (
    <View style={Appstyles.logoContainer}>
      <Text>App</Text>
      <Image
          style={Appstyles.tinyLogo}
          source={require('./assets/img/favicon.png')}
      />
    </View>
  )
}