import React, { useState } from 'react'
import { View,Text,StyleSheet, TextInput, Pressable,onPress, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../global/color';
import ItemListContainer from './ItemListContainer';




const HomeScreen = () => {

  const [notesList,setNotesList]=useState()

    function pressHandler(){
       setNotesList(<ItemListContainer/>)

           
      
    }



  return (
    <View style={styles.main}>

    <View style={styles.searchContainer}>
        
        <View style={styles.searchBox}  >
         <TextInput style={{flex:8}} placeholder='Search subject, notes, video here' placeholderTextColor="#5A5A5a" />  
         <FontAwesome name="search" size={24} color={Colors.secondaryText} />
        </View>
   </View>
   <ScrollView>
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

      {/* Tab navigtion section */}

   <View style={styles.notesTab}>

      <View style={styles.pairContainer}>
        <View style={styles.IconContainer}>
        <Pressable android_ripple={{color:"#504dae"}} onPress={pressHandler}>
        <MaterialIcons name="history" size={30} color="white" />
        </Pressable>
        </View>
        
        <Text style={{color:"#ffffff",fontSize:15}}>Recent view</Text>
      </View>

      <View style={styles.pairContainer}>
         <View style={styles.IconContainer}>
        <Pressable android_ripple={{color:"#504dae"}} onPress={pressHandler}>
         <MaterialIcons name="important-devices" size={30} color="white" />
      </Pressable>
      </View>
        <Text style={{color:"#ffffff",fontSize:15}}>Most viewed</Text>
      </View>

      <View style={styles.pairContainer}>
      <View style={styles.IconContainer}>
      <Pressable android_ripple={{color:"#504dae"}} onPress={pressHandler}>
      <FontAwesome name="star-o" size={30} color="white" />
      </Pressable>
      </View>
        <Text style={{color:"#ffffff",fontSize:15}}>Important</Text>
      </View>
   </View>

   {/* notes list Section */}

   {notesList}
   </ScrollView>
    </View>  
  )
}  

export default HomeScreen



const styles=StyleSheet.create({
  main:{
    backgroundColor:Colors.backgroundColor,
  },
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
        paddingHorizontal:20,
        flexDirection:"row",
       flex:1,
       margin:10,
       backgroundColor:Colors.secondaryBackground,
       borderRadius:20,
       height:100
       
    },

    notesTab:{
      flexDirection:"row",
      marginTop:45,
      justifyContent:"space-around",
      paddingHorizontal:10
    },
    IconContainer:{
     borderRadius:300,
     width:60,
     height:60,
     backgroundColor:Colors.secondaryBackground,
     paddingHorizontal:1,
     alignItems:"center",
     justifyContent:"center"
     
    },
    pairContainer:{
      alignItems:"center",
      justifyContent:"center"
    }
   


});