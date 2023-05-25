import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ScrollView, TextInput, Text, View } from 'react-native';

const App = () =>
{
  return (
    <ScrollView>
      <Text> Some Text</Text>
      <View>
        <Text> Some more text</Text>
      <Image source={{
        uri : 'https://reactnative.dev/docs/assets/p_cat2.png',
      }}
      style = {{width: 200, height: 200}} 
      />
      </View>
      <TextInput 
        style = {{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
        }}
        defaultValue= 'Input text here'
      />
    </ScrollView>
  )
}

export default App