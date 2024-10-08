import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CInput({...rest}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 64,
        paddingBottom: 16,
    },
    input: {
        width: '100%',
        height: 36,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 8,
        elevation: 1,
        backgroundColor: '#303030',
        color: '#fff'
    },

   
})