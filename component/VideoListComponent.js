import { Text,View,StyleSheet } from "react-native";
import Colors from "../global/color";
import { MaterialCommunityIcons } from '@expo/vector-icons';



 function VideoListComponent(){
    return(
        <View style={styles.listContainer}>
        <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="youtube" size={30} color="red" />
 
        </View>
        <View>
        <Text style={{fontWeight:"bold",fontSize:18,color:Colors.primaryText}}>Java full notes</Text>
        <Text style={{color:Colors.secondaryText}}>By : Rahul sir</Text>
        </View>
    
      
     </View>
    )
}

export default VideoListComponent;

const styles=StyleSheet.create({
    
    listContainer:{
    
     marginVertical:5,
     backgroundColor:Colors.secondaryBackground,
     width:"90%",
     marginHorizontal:10,
     borderRadius:8,
     flexDirection:"row",
     alignItems:"center",
    },
    iconContainer:{
      padding:15
    }
    });

