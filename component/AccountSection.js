import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import BottomNavbar from './BottomNavbar';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../global/color';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const AccountSection = ({ mavigaton }) => {
  return (
    <>
      <Navbar />
      <BottomNavbar />
      {/* //upperPart image and details of accountSection */}
      <View style={styles.upperContainer}>
        <View style={styles.imageContainer}>
          {/* image lgega isme <image source={...}/> */}
        </View>
        <FontAwesome name="camera" size={25} color="white" style={styles.cameraIconStyle} />

        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ color: "#ffffff" }}>Neha Kumari</Text>
            <FontAwesome5 name="pen" size={20} color={Colors.textInputColor} style={{ left: 40, bottom: 20 }} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{ color: "#ffffff" }}>XYZ@gmail.com</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={{ color: "#ffffff" }}>Subsription:Basic</Text>
          </View>
          <View style={styles.textContainer}>
           <View style={{flexDirection:"row"}}>
           <Text style={{ color: "#ffffff" }}>Active till </Text>
            <Text style={{color:"#17d51a"}}>12/5/2023</Text>
           </View>
          </View>
        </View>
      </View>

      {/* Mid part of the account section */}
      <View style={styles.buttomContainer}>
        <View style={styles.buttionViewContainer}>
          <View style={styles.subButtonViewContainer}>
            <MaterialIcons name="history-edu" size={20} color={Colors.secondaryText} />
            <Text style={styles.buttomTextStyle}>Transaction History</Text>
          </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
        <View style={styles.buttionViewContainer}>
          <View style={styles.subButtonViewContainer}>
            <Ionicons name="notifications" size={20} color={Colors.secondaryText} />
            <Text style={styles.buttomTextStyle}>Notification</Text>
          </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
        <View style={styles.buttionViewContainer}>
          <View style={styles.subButtonViewContainer}>
            <Entypo name="lock" size={20} color={Colors.secondaryText} />
            <Text style={styles.buttomTextStyle}>Change Password</Text>
          </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
        <View style={styles.buttionViewContainer}>
          <View style={styles.subButtonViewContainer}>
            <FontAwesome name="share-square-o" size={20} color={Colors.secondaryText} />
            <Text style={styles.buttomTextStyle}>Share app</Text>
          </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
        <View style={styles.buttionViewContainer}>
          <View style={styles.subButtonViewContainer}>
            <Feather name="download" size={20} color={Colors.secondaryText} />
            <Text style={styles.buttomTextStyle}>About Us</Text>
          </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
        <View style={styles.buttionViewContainer}>
          <View style={styles.subButtonViewContainer}>
            <Ionicons name="help-buoy" size={20} color={Colors.secondaryText}/>
            <Text style={styles.buttomTextStyle}>Help & Support</Text>
          </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
        <View style={styles.buttionViewContainer}><View>
          <View style={styles.subButtonViewContainer}>
            <MaterialIcons name="logout" size={20} color={Colors.secondaryText} />
            <Text style={styles.buttomTextStyle}>Logout</Text>
          </View>
        </View>
          <AntDesign name="right" size={20} color="#ffffff" />
        </View>
      </View>
    </>
  )
}

export default AccountSection


const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: "row",
    marginTop: 35
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: "#ffffff",
    width: 100,
    height: 100,
    marginHorizontal: 25,
    borderRadius: 50
  },
  cameraIconStyle: {

    alignSelf: "flex-end",
    right: 60,
    top: 5,
  },
  detailsContainer: {
    right: 10,
    alignItems:"baseline"
  },
  textContainer: {
    margin: 3
  },
  buttomContainer: {
    margin: 30,
    marginTop: 40
  },
  buttionViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  },
  buttomTextStyle: {
    color: Colors.primaryText,
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 10
  },
  subButtonViewContainer: {
    flexDirection: "row",

  }
});