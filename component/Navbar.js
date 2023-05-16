import {React, useEffect, useState} from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import pranLogo from '../assets/pranLogo.png';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../global/color';
import { Pressable } from 'react-native';
import ProfileDropDownModal from './ProfileDropDownModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
    const [profileModal,setProfileModal]=useState();
    const navigation =useNavigation()

   
    

   
        
    
  return (

    // {gettoken?navbar:""}
    <View style={styles.container}>
    <View style={styles.navbarstyle}>
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={styles.logoContainer1}>
           <Image style={styles.logo} source={pranLogo}/>
       </TouchableOpacity>

        <Pressable onPress={()=>{setProfileModal(<ProfileDropDownModal profileModal={setProfileModal}/>)}} style={styles.logoContainer1}>
        <Ionicons name="person-circle" size={35} color="#004AAD" />
       </Pressable>

    </View> 
          {profileModal?profileModal:""}
</View>

    
  )
}

export default Navbar
 
const styles=StyleSheet.create({
    container:{
         width:"100%",
         marginTop:0,
         backgroundColor:Colors.backgroundColor,
         elevation:15,
         paddingTop:20
         
         
    },
    navbarstyle:{
        padding:0,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    logoContainer1:{
          height:60,
          width:"auto",
          
    },
    logo:{
        resizeMode:"contain",
        borderWidth:2,
    
        height:50,
        width:110,
        
    
    }

});