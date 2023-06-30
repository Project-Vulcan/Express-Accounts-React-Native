import {StyleSheet, StatusBar} from "react-native"

export const styles = StyleSheet.create({ 

    outerContainer: {
        flex: 1,
        height: "90%",
        marginTop: StatusBar.currentHeight*1.1,
        // alignItems: 'flex-end'
    },

    background: {
        position:'absolute',
        left:0, 
        right:0, 
        top:0,
        bottom:0,
        height:"100%",
        width:"100%"
    },

    logo: {
        height: 150,
        width: '90%',
        alignSelf: 'center',
        // marginTop: 80,
        flex: 0.5,
        resizeMode: 'contain',
        // paddingVertical: 10,
    },  

    box: {
        marginTop:15,
        flex: 0.5,
        backgroundColor: "white",
        height: '50%',
        alignItems: 'center'
        },

});