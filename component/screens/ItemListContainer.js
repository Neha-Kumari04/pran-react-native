import { Text,View,StyleSheet, ScrollView, FlatList, SafeAreaView } from "react-native";

import NotesListComponent from "../NotesListComponent";
import VideoListComponent from "../VideoListComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";



function ItemListContainer(props){
  let token;
  const [data,setData]=useState()

 const getList=async()=>{
    token=  await AsyncStorage.getItem("token")
    console.log(token);
  

  
  switch(props.type){
    case "new":
      // geting token from AsyncStorage
        
        // API calling
        axios.get("https://pran.thefacts.space/api/posts/allPosts",{
         headers:{
          Authorization:"auth "+token
         } 
        }).then((response)=>{
            setData(response.data);
        }).catch((err)=>{
          console.log(err);
        }) 
      break;

      case "3004":
      // geting token from AsyncStorage
        const auth= "auth eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5laGEiLCJpYXQiOjE2ODQyMjM4OTF9.fPaKukvN6_NJ2hQYMt8DK5lky3yIizCZdRG7NXGpNx4";
        console.log(auth);
        // API calling
        axios.post("https://pran.thefacts.space/api/posts/allPostsBySubject",{
         headers:{
          Authorization:auth
         } ,
         data:{
          sub_id:"3002"
         }
        }).then((response)=>{
          console.log(response.data);
            setData(response.data);
        }).catch((err)=>{
          console.log(err);
        })
         break;
    default:
      break;
  }

}

useEffect(()=>{
  getList()

},[props])



  return(
   
   <View>
   
        <FlatList style={{width:"95%"}} contentContainerStyle={{justifyContent:"center"}}
         data={data}
         renderItem={(item)=>{return <NotesListComponent data={item}/>}}
         nestedScrollEnabled={true}  />
      
        </View>

   
     
    
    
  )




}



export default ItemListContainer;


const styles=StyleSheet.create({
container:{
    borderwidth:2,
    width:"100%",
    marginTop:15,
    alignItems:"center",
    justifyContent:"center"
    
},
});