import React from "react"
import { View, Text, StatusBar } from "react-native"
import NavigationIndex from "./src/Navigation/NavigationIndex"

const App = () => {
  return (
    <>
    <StatusBar hidden/>
      <NavigationIndex />
    </>
  )
}

export default App