import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, Pressable,alert } from 'react-native';
import pranLogo2 from '../../assets/pranLogo2.png';
import Colors from '../../global/color';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginPage({navigation}) {
    
    
    const[emailId,setEmailId]=useState();
    const[password,setPassword]=useState();

      
    const loginHandler=()=>{ 
        console.log(emailId+" "+password);
        axios.post("https://pran.thefacts.space/api/users/userLogin",{
            username:emailId,
            password:password
        }).then(async (response)=>{
            if(response.data.msg=="Login Successfully"){
               await AsyncStorage.setItem("token",response.data.auth_token)
                
               navigation.navigate("Home")
              
            }else{
                console.log('incorrect password');
            }
        }).catch((error)=>{
           console.log(error);
        })
    }



    return (

        <View style={styles.container}>
            {/* icon container     */}
            <ScrollView>
                <View style={styles.Imagecontainer}>
                    <Image style={styles.image} source={pranLogo2} />

                </View>
                {/* signUp container */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Sign In</Text>
                </View>
                {/* detail  */}
                <View style={styles.detailcontainer}>
                    
                    <View style={styles.detailStyle}>
                        <Ionicons name="mail" size={20} color={Colors.textInputColor} />
                        <TextInput placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15,color:Colors.primaryText }}
                            placeholder='Enter Email-ID' onChangeText={setEmailId}/>
                    </View>
                    <View style={styles.detailStyle}>
                        <MaterialIcons name="lock" size={20} color={Colors.textInputColor} />
                        <TextInput secureTextEntry={true} placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15,color:Colors.primaryText }}
                            placeholder='Password' onChangeText={setPassword} />
                    </View>
                   
                    
                      <View style={{alignItems:"flex-end",marginRight:40}}>
                        <Pressable>
                            <Text style={{color:"blue"}}>Forget Password ?</Text>
                        </Pressable>
                      </View>

                   

                    <View style={{alignItems:"center"}}>
                       <Pressable style={{backgroundColor:Colors.highLightBlue,padding:10,paddingHorizontal:30,borderRadius:5,marginVertical:20}} onPress={loginHandler}>
                        <Text style={{color:"#ffffff",fontWeight:"bold"}}>LOGIN</Text>
                       </Pressable>
                    </View>
    
                    <View style={{flexDirection:"row",marginBottom:20,marginLeft:50,marginTop:50}}>
                        <Text style={{color:Colors.textInputColor}}>Don't have an accouont ?? </Text>
                        <Pressable><Text style={{color:Colors.highLightBlue,}}> Register here</Text></Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>



    )
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        height:"100%",
        
    },
    Imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        width: 200,
        margin: 20,


    },
    image: {
        resizeMode:"contain",
        height:200,
        width: 200,
    },
    signUpContainer: {

        marginBottom: 0,
        alignItems: "center",
        marginBottom:10

    },
    signUpText: {
        fontWeight: "600",
        fontSize: 35,
        color: "#ffffff",



    },
    detailcontainer: {
     

    },
    detailStyle: {
        borderBottomWidth: 0.5,
        padding: 9, width: "85%",
        marginHorizontal: 20,
        borderBottomColor: "#ffffff",
        flexDirection: "row",
        marginVertical:15


    },
    CouSemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "92%",


    },
    CouSemView: {
        borderBottomWidth: 0.5,
        width: "40%",
        marginHorizontal: 25,
        padding: 9,
        borderBottomColor: "#ffffff",
        flexDirection: "row",
    },


});