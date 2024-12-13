import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const Restore = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#17a3f2"}}>
    <View style={{marginTop: 50, backgroundColor: "yellow", height: 50, justifyContent: "center", marginHorizontal: 50, borderRadius: 50}}>
      <Text style={{fontSize: 20, textAlign: "center"}}>Restore Password</Text>
    </View>
    <View style={{backgroundColor: "white", marginTop: 20, marginHorizontal: 20, borderRadius: 50}}>
    <TextInput secureTextEntry={true} placeholder='Create a new Password' />
    </View>
    <View style={{backgroundColor: "white", marginTop: 20, marginHorizontal: 20, borderRadius: 50}}>
    <TextInput secureTextEntry={true} placeholder='Confirm Password' />
    </View>
    <View style={{backgroundColor: "white", marginTop: 20, marginHorizontal: 20, borderRadius: 50}}>
    <TextInput placeholder='Enter Number Phone' />
    </View>
    <TouchableOpacity onPress={()=> Alert.alert("Please check your SMS or WhatsApp")}>
        <View style={{backgroundColor: "gray", height: 50, width: 70, justifyContent: "center", alignItems: "center", marginHorizontal: 160, marginTop: 20, borderRadius: 50 }} >
            <Text>Submit</Text>
        </View>
    </TouchableOpacity>
    </View>
  )
}

export default Restore
