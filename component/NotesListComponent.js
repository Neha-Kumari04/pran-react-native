import { Text,View,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../global/color";



function NotesListComponent(props){
    //  console.log(props.data.item)
    return(
        <View style={styles.listContainer}>
        <View style={styles.iconContainer}>
        <FontAwesome5 name="book" size={30} color="#1ac2ce" />
        </View>
        <View>
        <Text style={{fontWeight:"bold",fontSize:18,color:Colors.primaryText}}>{props.data.item.title}</Text>
        <Text style={{color:Colors.secondaryText}}>{props.data.item.desc.slice(0,25)+"..."}</Text>
        </View>
    
      
     </View>
    )
}



export default NotesListComponent;

const styles=StyleSheet.create({
    
    listContainer:{
    
     marginVertical:5,
     backgroundColor:Colors.secondaryBackground,
     marginHorizontal:10,
     borderRadius:8,
     flexDirection:"row",
     alignItems:"center",
    },
    iconContainer:{
      padding:15
    }
    });