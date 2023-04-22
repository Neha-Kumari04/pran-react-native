import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, Pressable } from 'react-native';
import pranLogo2 from '../../assets/pranLogo2.png';
import Colors from '../../global/color';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
function SignUpPage() {
    return (

        <View style={styles.container}>
            {/* icon container     */}
            <ScrollView>
                <View style={styles.Imagecontainer}>
                    <Image style={styles.image} source={pranLogo2} />

                </View>
                {/* signUp container */}
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>
                {/* detail  */}
                <View style={styles.detailcontainer}>
                    <View style={styles.detailStyle}>
                        <Ionicons name="person" size={20} color={Colors.textInputColor} />
                        <TextInput placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15 }}
                            placeholder='Enter student name' />
                    </View>
                    <View style={styles.detailStyle}>
                        <AntDesign name="mobile1" size={20} color={Colors.textInputColor} />
                        <TextInput placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15 }}
                            placeholder='Enter Mobile number' />
                    </View>
                    <View style={styles.detailStyle}>
                        <Ionicons name="mail" size={20} color={Colors.textInputColor} />
                        <TextInput placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15 }}
                            placeholder='Enter Email-ID' />
                    </View>
                    <View style={styles.detailStyle}>
                        <MaterialIcons name="lock" size={20} color={Colors.textInputColor} />
                        <TextInput placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15 }}
                            placeholder='Password' />
                    </View>
                    <View style={styles.detailStyle}>
                        <MaterialIcons name="lock" size={20} color={Colors.textInputColor} />
                        <TextInput placeholderTextColor={Colors.textInputColor}
                            style={{ fontSize: 14.5, marginHorizontal: 15 }}
                            placeholder='Confirm Password' />
                    </View>
                    <View style={styles.detailStyle}>
                        <MaterialCommunityIcons name="office-building-outline" size={20} color={Colors.textInputColor} />
                        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                            <TextInput placeholderTextColor={Colors.textInputColor}
                                style={{ fontSize: 14.5, marginHorizontal: 15 }}
                                placeholder='Select College name ' />
                            <MaterialIcons style={{ marginHorizontal: 110 }} name="arrow-drop-down" size={24} color={Colors.textInputColor} />
                        </View>
                    </View>


                    <View style={styles.CouSemContainer}>
                        <View style={styles.CouSemView} >
                            <MaterialCommunityIcons name="book-education" size={20} color={Colors.textInputColor} />
                            <TextInput placeholderTextColor={Colors.textInputColor}
                                placeholder='Courses' style={{ marginHorizontal: 15 }} />
                            <MaterialIcons name="arrow-drop-down" size={24} color={Colors.textInputColor} />
                        </View>

                        <View style={styles.CouSemView}>
                            <TextInput placeholderTextColor={Colors.textInputColor}
                                placeholder='Semester' />
                            <MaterialIcons name="arrow-drop-down" size={24} color={Colors.textInputColor}
                                style={{ marginHorizontal: 35 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 20, marginHorizontal: 40 }}>
                        <FontAwesome name="check-circle" size={24} color="#3385ff" />
                        <Text style={{ color: Colors.textInputColor, marginHorizontal: 7 }}>Agree with</Text><Text style={{ color: "#3385ff" }}> Term & Condition</Text>
                    </View>

                    <View style={{alignItems:"center"}}>
                       <Pressable style={{backgroundColor:"#3385ff",padding:10,paddingHorizontal:20,borderRadius:5,marginVertical:20}}>
                        <Text style={{color:"#ffffff",fontWeight:"bold"}}>REGISTER</Text>
                       </Pressable>
                    </View>
                    <View style={{flexDirection:"row",marginBottom:20,marginLeft:40}}>
                        <Text style={{color:Colors.textInputColor}}>Already have an accouont ?? </Text>
                        <Text style={{color:"#3385ff"}}>Login here</Text>
                    </View>
                </View>
            </ScrollView>
        </View>



    )
}

export default SignUpPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
       

    },
    Imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center",
        width: 200,
        margin: 20,


    },
    image: {
        resizeMode:"contain",
        height:200,
        width: 200,
    },
    signUpContainer: {
        height: "8%",
        marginBottom: 0,
        alignItems: "center",
        marginBottom:10

    },
    signUpText: {
        fontWeight: "600",
        fontSize: 35,
        color: "#ffffff",



    },
    detailcontainer: {
        marginTop: 0

    },
    detailStyle: {
        borderBottomWidth: 0.5,
        padding: 9, width: "85%",
        marginHorizontal: 20,
        borderBottomColor: "#ffffff",
        flexDirection: "row",


    },
    CouSemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "92%",


    },
    CouSemView: {
        borderBottomWidth: 0.5,
        width: "40%",
        marginHorizontal: 25,
        padding: 9,
        borderBottomColor: "#ffffff",
        flexDirection: "row",
    },


});