import { React, useState } from 'react';
import { Modal, Pressable, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../global/color';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import UpdateSemModal from './UpdateSemModal';



const ProfileDropDownModal = ({ profileModal }) => {
    // const [updateSem, setUpdateSem] = useState();


    const navigation = useNavigation();


    const loginCheck = async () => {
        if (!await AsyncStorage.getItem("token")) {
            navigation.navigate("login")
        }
    }



    return (
        <Modal visible={true} transparent={true} style={{ alignItems: "flex-end", justifyContent: "flex-end" }} onRequestClose={() => { profileModal(""); }}>
            <Pressable style={styles.transparentBtn} onPress={() => { profileModal("") }}>
                <View style={styles.dropDown}>
                    {/* <TouchableOpacity style={styles.viewContainer} onPress={() => { setUpdateSem(<UpdateSemModal updateSem={setUpdateSem} />) }}> */}
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
                    <TouchableOpacity style={styles.viewContainer} onPress={async () => {
                        await AsyncStorage.removeItem("token");
                        loginCheck();
                        profileModal("")
                    }} >
                        <MaterialCommunityIcons name="logout" size={24} color={Colors.highLightBlue} />
                        <Text style={styles.listItem}>Logout</Text>
                    </TouchableOpacity>


                </View>
                {/* {updateSem ? updateSem : ""} */}
            </Pressable>
        </Modal>
    )
}

export default ProfileDropDownModal;


const styles = StyleSheet.create({
    transparentBtn: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
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
        marginLeft: 10,
        fontWeight: 400,
        fontSize: 18
    },
    viewContainer: {
        flexDirection: "row",
        padding: 12,
        marginLeft: 2
    }
});