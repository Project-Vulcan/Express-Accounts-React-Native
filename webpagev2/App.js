import { View, Text, Image } from "react-native"
import logo from 'caisteclogo.jpg';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
  
      <image source="{logo}" alt="The logo of CaisTec which is a red mountain"/>
     
    </View>
  );
}