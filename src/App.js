import React from "react";
import "./App.css";
import { Text, View } from 'react-native';
import Album from "./Album";

  
function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
  <Album></Album>
  </View>
  );
}
  export default App;


