import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import { View, Button, TextInput, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [text, onTextChange] = useState("http://reactnative.dev/movies.json")

  const [data, setData] = useState("")
  const request  = new XMLHttpRequest() 

  const handleWebBrowserRequest  = () =>{
    request.onreadystatechange = e =>{
      if(request.readyState !== 4){
        return

      }

      if(request.status === 200){
        console.log('success')
        setData("status: " + request.status + " " + request.statusText + " " + request.responseText + " " + request.response )
      }

      else{
        console.log("failed")
        setData("status: " + request.status + " " + request.statusText + " " + request.responseText + " " + request.response )

      }
    }

    request.open('GET', text)
    request.send()
  }




  return (
    <View style = {styles.containerColumn}>
      <View style = {styles.containerRow}>
        <TextInput 
        style = {styles.textInput}
        value = {text}
        onChangeText = {onTextChange}
/>
        <Button title = "Click me"
        onPress = {() => handleWebBrowserRequest()}></Button>

      </View>

      <Text>{data}</Text>


    </View>
 
  );
}

const styles = StyleSheet.create({

  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,


  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,


  },
  textInput: {
    color: 'blue',


  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
