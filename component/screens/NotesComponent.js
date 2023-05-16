import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Navbar from '../Navbar';
import Colors from '../../global/color';
import { StatusBar } from 'expo-status-bar';
import ItemListContainer from './ItemListContainer'
import BottomNavbar from '../BottomNavbar';

const NotesComponent = ({ navigation }) => {


  const [AllNotes, SetAllNotes] = useState(<ItemListContainer type="new" />);



  return (
    <>
      {/* <StatusBar style='auto'/> */}
      <Navbar />


      <View style={styles.scrollViewContainer}>
        <View style={{ flexDirection: "row", }}>
          <ScrollView horizontal={true}>

            <Text style={styles.scrollText} onPress={() => {
              SetAllNotes(<ItemListContainer type="new" />)
            }}>All</Text>

            <Text style={styles.scrollText} onPress={() => {
              SetAllNotes(<ItemListContainer type="3004" />)
            }}>SAD</Text>
            
            <Text style={styles.scrollText}>computer architecture</Text>
            <Text style={styles.scrollText} >statistics</Text>
            <Text style={styles.scrollText}>java programming</Text>
            <Text style={styles.scrollText}>multimedia</Text>
          </ScrollView>
        </View>

      </View>

      {AllNotes}
      {/* <ScrollView vertical={true}>
          
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>ssaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>skldjlksaj</Text> 
        <Text style={styles.itemList}>skldjlksaj</Text>
        <Text style={styles.itemList}>lskldjlksaj</Text>
        </ScrollView>
        */}



        <BottomNavbar/>
    </>


  )
}

export default NotesComponent

const styles = StyleSheet.create({
  scrollViewContainer: {


    // borderTopWidth:2,
    // borderBottomWidth:2,
    padding: 10,
    backgroundColor: Colors.darkBackgaround,
    opacity: 8,

    flexDirection: "row",

  },
  scrollText: {
    borderWidth: 2,
    borderColor: Colors.secondaryBackground,
    borderRadius: 8,
    padding: 5,
    marginHorizontal: 5,
    color: "#ffffff",
    fontWeight: "600",
    backgroundColor: Colors.secondaryBackground,


  },
  itemList: {
    borderWidth: 2,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.secondaryBackground,
    borderColor: Colors.secondaryBackground
  }


});