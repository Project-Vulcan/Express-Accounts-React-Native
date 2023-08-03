import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles"
import { useState } from 'react';


function HomeScreen() {
  const offText = <Text style={styles.textboxOff} onPress={() => setButton(onText)}>Off</Text>
  const onText = <Text style={styles.textboxOn} onPress={() => setButton(offText)}>On</Text>
  //const [message, setMessage] = useState("Hello!");
  const [button, setButton] = useState(offText);
  return (
    
     <View style={styles.homeSscreen}>
      {button}
    
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.SettingsScreen}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: makeIconRender("home") }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: makeIconRender("cog") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
