import { StatusBar } from 'expo-status-bar';
import Flat from './flatlist';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
   
    <View style={styles.container}>

<Flat/>
      <Text selectionColor={'green'}>Open up App.js to start working on your app!ssssssssssssssss</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(120,120, 174,0.8)`,
    alignItems: 'center',
    justifyContent: 'center'
    // color: 'yellow'
    
  },
});
