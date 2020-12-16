import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/robo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.images}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  /* fallback for old browsers */
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat',
  },
  images: {
  
    
  }
});
