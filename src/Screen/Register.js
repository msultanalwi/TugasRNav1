import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'

const Register = () => {
  return (


    <View style={{flex: 1, backgroundColor: "#17a3f2"}}>
        <View style={{ padding: 25, marginHorizontal: 25, marginTop: 50, borderRadius: 25, borderWidth: 15,
        borderColor: "white"}}>
            <Text style={{fontSize: 50, textAlign: "center"  }}>Sign Up</Text>
        </View>

        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput placeholder='First Name'/>
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput placeholder='Last Name' />
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput placeholder='Email' />
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput secureTextEntry={true} placeholder='Password' />
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput secureTextEntry={true} placeholder='Repeat Password' />
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput placeholder='Phone Number' />
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput placeholder='Full Address' />
        </View>
        <View style={{backgroundColor: "white", marginTop: 20, borderRadius: 50, marginHorizontal: 20}}>
        <TextInput placeholder='Birth Date' />
        </View>
    <TouchableOpacity onPress={()=> Alert.alert("Account Created")}>
        <View style={{backgroundColor: "gray", height: 50, width: 70, justifyContent: "center", alignItems: "center", marginHorizontal: 160, marginTop: 20, borderRadius: 50 }} >
            <Text>Submit</Text>
        </View>
    </TouchableOpacity>
    </View>


  )
}

export default Register