import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Colors from '../global/color';
import { useNavigation } from '@react-navigation/native';

const MenuModal = (props) => {
 const navigation=useNavigation();
 
  function NotesPressHandler(){
    navigation.navigate("Notes")
}




  return (
    <Modal transparent={true} onRequestClose={() => { props.setMenuModal("") }}>
      <TouchableOpacity style={{ width: "100%", height: '100%' }} onPress={() => { props.setMenuModal("") }}>
        <View style={styles.modalContainer}>
          <View style={styles.viewContainerStyle}>

            <TouchableOpacity onPress={NotesPressHandler} style={styles.subViewContainer}>
              <FontAwesome name="book" size={40} color="#8bd7e6" />
              <Text style={styles.textStyle} >Notes</Text>
            </TouchableOpacity>
            <View style={styles.subViewContainer}>
              <Fontisto name="messenger" size={40} color="#3385ff" />
              <Text style={styles.textStyle} >Chat</Text>
            </View>
            <View style={styles.subViewContainer}>
              <FontAwesome5 name="cloud-upload-alt" size={40} color="#3385ff" />
              <Text style={styles.textStyle} >upload user</Text>
            </View>
          </View>
          <View style={styles.viewContainerStyle}>
            <View style={styles.subViewContainer}>
              <FontAwesome5 name="question-circle" size={40} color="#3385ff" />
              <Text style={styles.textStyle} > PYQ</Text>
            </View>
            <View style={styles.subViewContainer}>
              <MaterialCommunityIcons name="calendar-month" size={40} color="#8bd7e6" />
              <Text style={styles.textStyle}>Holiday</Text>
            </View>
            <View style={styles.subViewContainer}>
              <Fontisto name="youtube-play" size={35} color="#e60e0e" />
              <Text style={styles.textStyle} > Video</Text>
            </View>
          </View>
          <View style={styles.viewContainerStyle}>
            <View style={styles.subViewContainer}>
              <Feather name="book" size={40} color="#5994e0" />
              <Text style={styles.textStyle} >E-Book</Text>
            </View>
            <View style={styles.subViewContainer}>
              <MaterialCommunityIcons name="book-education" size={40} color="#d4560d" />
              <Text style={styles.textStyle}>Syllabus</Text>
            </View>

          </View>

        </View>

      </TouchableOpacity>
    </Modal >
  )
}

export default MenuModal



const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#000000",
    position: "absolute",
    bottom: 55,
    left: 0,
    opacity: 0.8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: "row"
},
  viewContainerStyle:{
    flexDirection:"column",
    padding:30,
  },
  subViewContainer:{
    height:"40%",
    marginHorizontal:5,
  
 },

  textStyle: {
    color: Colors.primaryText,
    margin:2,
    width:"93%"
  },
 
})