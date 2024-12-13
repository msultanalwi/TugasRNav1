import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Screen/Login"
import Register from "../Screen/Register"
import Restore from "../Screen/Restore"

const Stack = createNativeStackNavigator()


const NavigationIndex = () => {
return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Restore" component={Restore} />
        </Stack.Navigator>
    </NavigationContainer>
)
}

export default NavigationIndex