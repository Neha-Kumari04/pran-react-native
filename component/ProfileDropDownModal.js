import {React,useState }from 'react';
import { Modal } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../global/color';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileDropDownModal = (props) => {
    const[visibleModal,setVisibleModal]=useState(true);
       

    return (
        <Modal visible={visibleModal}  transparent={true} style={{ alignItems: "flex-end", justifyContent: "flex-end" }} onRequestClose={()=>{props.profileModal("");}}>
            <View style={styles.dropDown}>
                <View style={styles.viewContainer}>
                <FontAwesome name="graduation-cap" size={24} color={Colors.highLightBlue} />
                    <Text style={styles.listItem}>update sem</Text>
                    </View>
                <View style={styles.viewContainer}>
                <FontAwesome name="graduation-cap" size={24} color={Colors.highLightBlue} />
                    <Text style={styles.listItem}>update course</Text>
                </View>
                <View style={styles.viewContainer}>
                <Ionicons name="person-circle" size={24} color={Colors.highLightBlue} />
                    <Text style={styles.listItem}>Account</Text>
                </View>
                <View style={styles.viewContainer}>
                <MaterialCommunityIcons name="logout" size={24} color={Colors.highLightBlue} />
                    <Text style={styles.listItem}>Logout</Text>
                </View>
                

            </View>
        </Modal>
    )
}

export default ProfileDropDownModal;


const styles = StyleSheet.create({
    dropDown: {
        borderWidth: 1,
        width: 200,
        height: 200,
        elevation: 5,
        opacity: 5,
        position: "absolute",
        right: 0,
        top: 40,
        backgroundColor: Colors.backgroundColor,
        borderRadius: 5,
        marginRight: 10,
    },
    listItem: {
        color: "#ffffff",
        marginLeft:10,
        fontWeight:400,
        fontSize:18
    },
    viewContainer:{
        flexDirection:"row",
        padding:12,
        marginLeft:2    
    }
});