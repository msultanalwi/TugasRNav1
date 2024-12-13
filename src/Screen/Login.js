import React from "react"
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import Register from "./Register"

const Login = ({navigation}) => {
    return (
       
        <View style={{flex: 1, backgroundColor: "#17a3f2"}}>
        <View style={{ padding: 25, marginHorizontal: 25, marginTop: 50, borderRadius: 80, borderWidth: 7,
        borderColor: "white"}}>
            <Text style={{fontSize: 40, textAlign: "center"  }}>JustMarkets</Text>
        </View>
       
        <View style={{padding: 10,}}>
        <TextInput placeholder="Enter Username ID or Email" style={{backgroundColor: "white"}}/>
        <View style={{marginTop: 10}}>
        <TextInput placeholder="Enter Password" secureTextEntry={true} style={{backgroundColor: "white"}}/>
        </View>
        <TouchableOpacity onPress={()=> Alert.alert("Login successfull")}>
        <View style={{backgroundColor: "gray", height: 50, width: 70, justifyContent: "center", alignItems: "center", marginHorizontal: 150, marginTop: 20, borderRadius: 50 }} >
            <Text>Login</Text>
        </View>
    </TouchableOpacity>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Restore")}>
        <Text style={{textAlign: "center", fontSize: 15, textDecorationLine: "underline"}}> Forgot password? </Text>
        </TouchableOpacity>

        <View>
        <Text style={{textAlign: "center", fontSize: 15}}> Don't have an account? it takes less than a minute </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text style={{textAlign: "center", color: "red", fontSize: 15}}> Sign Up</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
    )
}

export default Login