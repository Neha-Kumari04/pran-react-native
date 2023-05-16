import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Colors from '../../global/color';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const ChangePassword = () => {
    return (
        <View>
            {/* //    backButton */}
            <TouchableOpacity>
                <View style={styles.navBarContainer}>
                    <AntDesign name="left" size={25} color="#3705cd" />
                    <Text style={styles.backText}>Back</Text>
                </View>
            </TouchableOpacity>

            {/* // Change your Password text */}
            <View style={{ margin: 50 }}>
                <Text style={styles.mainatextContainer}>Change your</Text>
                <Text style={styles.mainatextContainer}>password</Text>

            </View>
            {/* textInput of password and confirm password */}

            {/* <Text style={styles.passwordText}>Password</Text> */}

            <View style={styles.passwordContainer}>
                <View style={{ flexDirection: "row" }}>
                  <MaterialIcons name="lock" size={18} color={Colors.textInputColor} />
                  <TextInput  secureTextEntry={true} placeholder='your password' placeholderTextColor={Colors.textInputColor} 
                  style={styles.placeholderStyle}/>
                </View>
                <View>
                  <AntDesign name="eye" size={18} color={Colors.textInputColor} />
                </View>
            </View>

            {/* <Text style={styles.confirmPasswordText}>Confirm Password</Text> */}

            <View style={styles.passwordContainer}>
                <View style={{ flexDirection: "row" }}>
                  <MaterialIcons name="lock" size={18} color={Colors.textInputColor} />
                  <TextInput  secureTextEntry={true} placeholder='Confirm Password' placeholderTextColor={Colors.textInputColor} 
                  style={styles.placeholderStyle}/>
                </View>
                <View>
                  <AntDesign name="eye" size={18} color={Colors.textInputColor} />
                </View>
            </View>

            {/* Set Password Button */}
           <TouchableOpacity>
           <View style={styles.ButtonContainer}>
                <Text style={styles.buttonText}>Set Password</Text>
            </View>

           </TouchableOpacity>






        </View>
    )
}

export default ChangePassword
const styles = StyleSheet.create({
    navBarContainer: {
        flexDirection: "row",
        marginTop: 30,
        marginHorizontal: 10
    },
    backText: {
        color:"#3705cd",
        fontSize: 19,
        marginHorizontal: 5
    },

    mainatextContainer: {
        alignSelf: "center",
        color: Colors.primaryText,
        fontSize: 35,
        fontWeight: "700"

    },
    passwordText: {
        color: Colors.highLightBlue,
        fontSize: 18,
        fontWeight: "700",
        padding: 28,
        top:10
         
    },
    passwordContainer: {
        justifyContent: 'space-between',
        flexDirection: "row", width: "80%",
        borderBottomWidth: 2,
        borderBottomColor: Colors.secondaryBackground,
        marginHorizontal:25,
        top:10,
        marginTop:35
    },
    confirmPasswordText:{
        color: Colors.highLightBlue,
        fontSize: 18,
        fontWeight: "700",
        marginHorizontal:25,
        bottom:2,
        paddingBottom:15
        
    },
    placeholderStyle:{
      marginHorizontal:15,
      color:Colors.primaryText,
      fontSize:16
    },
    ButtonContainer:{
        borderWidth:1,
        backgroundColor:Colors.highLightBlue,
        height:40,
        width:120,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
        top:80
    },
    buttonText:{
        color:"#000000",
        fontWeight:"500"
    },
});