import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../global/color';
import MenuModal from './MenuModal';
import HomeScreen from './screens/HomeScreen';
const bottomNavbar = () => {
    const [menuModal, setMenuModal] = useState("");







    return (

        <View style={styles.container}>

            <View style={styles.btn}>
             <TouchableOpacity onPress={()=>{<HomeScreen/>}}>
             <FontAwesome5 name="home" size={24} color={Colors.secondaryText} />
                <Text style={styles.btnText}>home</Text>
             </TouchableOpacity>
                
            </View>
            <TouchableOpacity onPress={() => { setMenuModal(<MenuModal setMenuModal={setMenuModal} />) }} style={styles.btn}>
                <Ionicons name="grid" size={24} color={Colors.secondaryText} />
                <Text style={styles.btnText} >menu</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
                <MaterialIcons name="favorite" size={24} color={Colors.secondaryText} />
                <Text style={styles.btnText}>save</Text>

            </View>
            {menuModal }
        </View>
    )
}

export default bottomNavbar



const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#000000",
        width: "100%",
        padding: 10,
        position: "absolute",
        bottom: 0,
        left: 0

    },
    btn: {
        alignItems: "center",
        justifyContent: "center",

    },


    btnText: {
        color: Colors.secondaryText,

    },
});