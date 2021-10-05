import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container
                }>

                    <ImageBackground style = {styles.backgroundImage} source = {require('../assets/bg.png')}>


                        <View style={styles.titleBar} >
                            <Text style={styles.titleText}>Home Screen!</Text>
                        </View>
                        <TouchableOpacity style={styles.routeCard} onPress={()=>
                            this.props.navigation.navigate("IssLocation")
                        }>
                            <Text style={styles.routeText}> ISS Location </Text>
                            <Text style={styles.knowMore}>{"Know more!"}</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image style = {styles.iconImage} source = {require('../assets/iss_icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={()=>
                            this.props.navigation.navigate("Meteors")
                        }>
                            <Text style={styles.routeText}> Meteors </Text>
                            <Text style={styles.knowMore}>{"Know more!"}</Text>
                            <Text style={styles.bgDigit}>2</Text>
                            <Image style = {styles.iconImage} source = {require('../assets/meteor_icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={()=>
                            this.props.navigation.navigate("Update")
                        }>
                            <Text style={styles.routeText}> Updates </Text>
                            <Text style={styles.knowMore}>{"Know more!"}</Text>
                            <Text style={styles.bgDigit}>3</Text>
                            <Image style = {styles.iconImage} source = {require('../assets/rocket_icon.png')}/>
                        </TouchableOpacity>
                    </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    droidSafeArea: { marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
    backgroundImage: { flex: 1, resizeMode: 'cover', },
    routeCard: { flex: 0.25, marginLeft: 50, marginRight: 50, marginTop: 50, borderRadius: 30, backgroundColor: 'white' },
    titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
    titleText: { fontSize: 40, fontWeight: "bold", color: "white", alignContent: "center" },
    routeText: { fontSize: 35, fontWeight: "bold", color: "black", marginTop: 75, paddingLeft: 30 },
    knowMore: { paddingLeft: 30, color: "red", fontSize: 15 },
    bgDigit: { position: "absolute", color: "rgba(183, 183, 183, 0.5)", fontSize: 150, right: 20, bottom: -15 },
    iconImage: { position: "absolute", height: 200, width: 200, resizeMode: "contain", right: 20, top: -80 }
})