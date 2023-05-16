import React from 'react';
import {View,Text,StyleSheet,Image, TextInput, Button} from 'react-native';
import pranLogo2 from '../../assets/pranLogo2.png'
import Colors from '../../global/color';
import { MaterialIcons } from '@expo/vector-icons';

const ForgetPassword = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
         
        {/* //image */}
        <View style={styles.Imagecontainer}>
          <Image style={styles.image} source={pranLogo2}/>
        </View>
            {/* enter email or mobile */}
        <Text style={styles.ForgetPasswordText}>Forget password</Text>

        <Text style={styles.emailMobileText}>Enter Email/mobile</Text>

        <View style={styles.textInputContainer}>
        <MaterialIcons name="email" size={24} color={Colors.textInputColor} style={{margin:6,marginHorizontal:5}}/>
          <TextInput placeholder='Email/mobile no.'  placeholderTextColor={Colors.textInputColor}
            style={{color:Colors.primaryText}}/>
        </View>
         
         {/* back to login page  */}

        <View style={styles.backLoginText}>
        
        <Text style={{color:Colors.highLightBlue,fontWeight:"700"}} >Back to login page</Text>
        </View>
        
         <View style={styles.buttonContainer}>
          <Text style={{color:Colors.primaryText,fontWeight:"700"}}>Send OTP</Text>
         </View>

        
          {/* bottomText */}
          <View style={styles.bottomTextContainer}>
          <Text style={{color:Colors.primaryText}}>Don't have an account ?</Text>
           <Text style={{color:Colors.highLightBlue}}> Register here</Text>

          </View>


    </View>
  )
}

export default ForgetPassword

const styles=StyleSheet.create({
  mainContainer:{
    marginTop:0
  },
  Imagecontainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf:"center",
    width: 200,
    margin: 10,


},
image: {
  resizeMode:"contain",
  height:180,
  width: 200,
},
ForgetPasswordText:{
  color:Colors.primaryText,
  margin:15,
  fontSize:32,
  fontWeight:"700",
  textAlign:"center"
},
emailMobileText:{
  color:Colors.highLightBlue,
  fontWeight:"800",
  marginHorizontal:40,
  fontSize:15,
  margin:15
},
textInputContainer:{
  flexDirection:"row",
  borderBottomWidth:2,
  borderBottomColor:Colors.textInputColor,
  width:"80%",
  marginHorizontal:40
},

backLoginText:{
  alignItems:"flex-end",
  padding:30
  
},
buttonContainer:{
  
  width:120,
  height:40,
  borderRadius:7,
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:Colors.highLightBlue,
  alignSelf:"center"
  

},
bottomTextContainer:{
  flexDirection:"row",
 top:60,
 alignSelf:"center"
}
});