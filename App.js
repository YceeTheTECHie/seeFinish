import { StatusBar } from 'expo-status-bar';
import Home from './Components/Home'
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/robo.png'

export default function App() {
  return (
    <View style={styles.container}>
        <Home/>
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
