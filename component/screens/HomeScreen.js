import React from 'react'
import { View,Text,StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../global/color';
const HomeScreen = () => {
  return (
    <View>

    <View style={styles.searchContainer}>
        
        <View style={styles.searchBox}  >
         <TextInput style={{flex:8}} placeholder='Search subject, notes, video here' placeholderTextColor="#5A5A5a" />  
         <FontAwesome name="search" size={24} color={Colors.secondaryText} />
        </View>
   </View>
   <View style={{margin:10}}>
   <Text style={{fontSize:35,paddingHorizontal:10,color:Colors.primaryText,fontWeight:"bold"}}>Hello</Text>
   <Text style={{fontSize:20,paddingHorizontal:10,color:Colors.primaryText}}>Pawanji,</Text>
   </View>
    
   <View style={styles.container}>
    <View style={styles.chatContainer}>
    
    <MaterialIcons name="message" size={24} color={Colors.primaryText} />
        <Text style={{color:Colors.primaryText,fontSize:17,paddingHorizontal:10}}>chat</Text>
      
    </View>
    <View style={styles.chatContainer}>
    <AntDesign name="eye" size={24} color={Colors.primaryText} />
        <Text style={{color:Colors.primaryText,fontSize:17,paddingHorizontal:10}}>5 min Learnt today</Text>
    </View>
   </View>  
   
    </View>  
  )
}  

export default HomeScreen



const styles=StyleSheet.create({
    searchContainer:{
        backgroundColor:Colors.secondaryBackground,
        padding:10,
        margin:12,
        borderRadius:15,
        width:"90%",
        alignSelf:'center'
        
        
    },
    searchBox:{
       
       flexDirection:"row",
          
    },
    container:{
    
      
      flexDirection:"row",
      height:80,
      justifyContent:"space-around",
      
    
    
    },
    chatContainer:{
       
       justifyContent:"center",
       alignItems:"center", 
        paddingHorizontal:10,
        flexDirection:"row",
       flex:1,
       margin:10,
       backgroundColor:Colors.secondaryBackground,
       borderRadius:20,
       height:100
       
    },


});