import React from 'react'
import { View,Text,StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../global/color';
const bottomNavbar = () => {
  return (
    
        <View style={styles.container}>
           
            <View style={styles.btn}>
            <FontAwesome5 name="home" size={24} color={Colors.secondaryText} />
                <Text style={styles.btnText}>home</Text>
            </View>
            <View style={styles.btn}>
            <Ionicons name="grid" size={24} color={Colors.secondaryText} />
                <Text style={styles.btnText}>menu</Text>
            </View>
            <View style={styles.btn}>
            <MaterialIcons name="favorite" size={24} color={Colors.secondaryText} />
                <Text style={styles.btnText}>save</Text>
                
            </View>
    </View>
  )
}

export default bottomNavbar



const styles=StyleSheet.create({
 container:{
    borderWidth:2,
    flexDirection:"row",
    justifyContent:"space-around",
    backgroundColor:"#000000",
    width:"100%",
    padding:10,
    position:"absolute",
    bottom:0,
    left:0
    
 },
 btn:{
    alignItems:"center",
    justifyContent:"center",
    
 },
      
 
 btnText:{
    color:"Colors.secondaryText",
    
 },
});