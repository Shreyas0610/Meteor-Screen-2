import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class IssInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {},
        };
    }

    componentDidMount() {
        this.getIssLocation()
        try {
            setInterval(async () => {
                this.getIssLocation()
            }, 5000)
        } catch (e) {
            console.log(e);
        }
    }

    getIssLocation = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({
                    location: response.data
                })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text> Loading </Text>
                </View>
            )
        } else {
            return (
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}> Lattitude: {this.state.location.latitude}</Text>
                    <Text style={styles.infoText}> Longitude: {this.state.location.longitude}</Text>
                    <Text style={styles.infoText}> Altitude (KM): {this.state.location.altitude}</Text>
                    <Text style={styles.infoText}> Velocity (KM/HR): {this.state.location.velocity}</Text>



                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
});

