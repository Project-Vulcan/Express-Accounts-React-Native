import React , {Component} from "react"
// import background from './assets/images/office_blur.jpg'
import background from './assets/images/receipts.png'
import logo from './assets/images/express_logo.png'
import { SafeAreaView, ScrollView, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import CheckBox from 'expo-checkbox'
import {styles} from './styles'
import { Linking } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props)
  }

  render() {

    return(
   
      <SafeAreaView style={styles.outerContainer}>

        <Image
          source={background}
          style={styles.background} />

        <Image style={styles.logo} source={logo} />  

        <View style={styles.box}>

          <View style={{flexDirection: "row", alignItems: "center", marginLeft: 10, paddingVertical: 20}}>

            <CheckBox style={{alignItems: "center", marginLeft: 10}}
              disabled={false}
              // value={this.state.acceptPrivacyPolicy}
              // onValueChange={(newValue) => this.setState({acceptPrivacyPolicy: newValue})}
            />

            <Text id="message" style={{marginTop: 10,
                      marginLeft: 20,
                      marginBottom: 10,
                      }}
                      > I have read and agree to the</Text>

            <Text id="message" style={{color: "blue", marginTop: 10,
                      // marginLeft: 20,
                      marginBottom: 10,
                      }}
                      onPress={() => Linking.openURL('https://www.termsfeed.com/live/9a4c53e1-5df9-4ac0-9c2b-130f3df1ff23')}> privacy policy </Text>


          </View>  

        </View>

      </SafeAreaView>
      
      )

  }

}


// import "react-native-gesture-handler";

// import { StatusBar } from "expo-status-bar";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// import { useLoadedAssets } from "./hooks/useLoadedAssets";
// import Navigation from "./navigation";
// import { useColorScheme } from "react-native";

// export default function App() {
//   const isLoadingComplete = useLoadedAssets();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }
