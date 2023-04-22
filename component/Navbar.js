import {React, useState} from 'react'
import { View,Text,StyleSheet,Image} from 'react-native'
import pranLogo from '../assets/pranLogo.png';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../global/color';
import { Pressable } from 'react-native';
import ProfileDropDownModal from './ProfileDropDownModal';


const Navbar = () => {
    const [profileModal,setProfileModal]=useState()

  return (
    <View style={styles.container}>
        <View style={styles.navbarstyle}>
            <View style={styles.logoContainer1}>
               <Image style={styles.logo} source={pranLogo}/>
           </View>

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
         marginTop:2,
         backgroundColor:Colors.backgroundColor
         
    },
    navbarstyle:{
        padding:10,
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