import { Text,View,StyleSheet, ScrollView } from "react-native";

import NotesListComponent from "../NotesListComponent";
import VideoListComponent from "../VideoListComponent";



function ItemListContainer(){
  return(
    <View style={styles.container}>
      
 {/* <NotesListComponent/>
      <NotesListComponent/>
      <NotesListComponent/>
      <NotesListComponent/>
      <NotesListComponent/>
      <NotesListComponent/> */}
      

   
      {/* <NotesListComponent/> */}
      <VideoListComponent/>
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